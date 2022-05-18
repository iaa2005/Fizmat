// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
//
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme === "dark") {
//     document.body.classList.toggle("dark-mode");
// } else if (currentTheme === "light") {
//     document.body.classList.toggle("light-mode");
// }
//
// btn.addEventListener("click", function() {
//     if (prefersDarkScheme.matches) {
//         document.body.classList.toggle("light-mode");
//         let theme = document.body.classList.contains("light-mode") ? "light" : "dark";
//     } else {
//         document.body.classList.toggle("dark-mode");
//         let theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
//     }
//     localStorage.setItem("theme", theme);
// });

/*
$(document).ready(async function() {

    let list_files = [
        "library/README.md",
        "physics/README.md",
        "astronomy/README.md",
        "physolimp/README.md",
        "lprcup/README.md",
        "maths/README.md",
        "iepho/README.md",
        "coding/README.md"
    ]

    let searchList = []

    await get_info()

    function onlySpaces(str) {
        return str.trim().length === 0;
    }

    async function get_info() {
        let i = 0
        await $.get(list_files[i], function (data) {
            let converter = new showdown.Converter({metadata: true});
            let html_code = converter.makeHtml(data);
            let metadata = converter.getMetadata(false);
            // console.log(html_code);
            let a_tags = $(html_code).find("a")
            for (let a of a_tags) {
                searchList.push({title: metadata.title, data: a.innerText, href: a.href})
            }
            // console.log(searchList)
            // console.log(metadata)
            // let html_topic = make_topic(metadata, html_code);
        })

    }

    console.log(searchList)

    document.getElementById("search-suggest").style.display = "none";

    $("#search-input").on('input', function () {
        let text = $("#search-input").val();
        // if (text === '' || onlySpaces(text)) {
        //     document.getElementById("search-suggest").style.display = "none";
        // } else {
        //     document.getElementById("search-suggest").style.display = "block";
        // }
        $("#search-suggest").html("");
        for (let listText of searchList) {
            if (listText.data.toLowerCase().indexOf(text) !== -1 && text !== '') {
                let html_code = `<div class="checkk" style="display: flex"><a href="${listText.href}">${listText.data}</a><a style="color: #b8b8b8">&nbsp — ${listText.title}</a></div>`
                $("#search-suggest").append(html_code);
            }
        }
        if (text === '' || onlySpaces(text) || document.getElementsByClassName("checkk").length === 0) {
            document.getElementById("search-suggest").style.display = "none";
        } else {
            document.getElementById("search-suggest").style.display = "block";
        }
    });

});

*/



const Web3Modal = window.Web3Modal.default;
const Web3 = window.Web3;
const WalletConnectProvider = window.WalletConnectProvider;
const evmChains = window.evmChains;

let web3Modal;
let provider;
let selectedAccount;

const MATIC_PROVIDER = "https://polygon-rpc.com";
// https://polygon-rpc.com

function init() {
    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    // if(location.protocol !== 'https:') {
    //
    //     return;
    // }

    // let menuaddr = document.getElementById("menu-address");
    // menuaddr.classList.add("remove");

    const providerOptions = {
        metamask: {
            id: "injected",
            name: "MetaMask",
            type: "injected",
            check: "isMetaMask",
        },
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                infuraId: "",
                qrcodeModalOptions: {
                    mobileLinks: [
                        "rainbow",
                        "metamask",
                        "argent",
                        "trust",
                        "imtoken",
                        "pillar"
                    ]
                }
            }
        }
    };

    web3Modal = new Web3Modal({
        theme: "dark",
        network: "maticMumbai",
        cacheProvider: true,
        providerOptions
    });
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {
    // const web3 = new Web3(provider);
    // new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/0811f9ee41e9494db21e5fa7225613dd")
    // provider = new Web3.providers.HttpProvider("https://polygon-mainnet.infura.io/v3/0811f9ee41e9494db21e5fa7225613dd")

    if (provider.chainId === "0x89") {
        const web3 = new Web3(provider)
        console.log(provider)

        let accounts = await web3.eth.getAccounts();
        selectedAccount = accounts[0];

        console.log(selectedAccount)

        let menuaddr = document.getElementById("initialized-wallet");
        menuaddr.style.display = "inline-flex";

        let buttonConnect = document.getElementById("button-wallet-connect");
        buttonConnect.style.display = "none";

        let address_text = selectedAccount.substr(0, 6) + "..." + selectedAccount.substr(37, 4);
        let addressText = document.getElementById("address-header-text");
        addressText.innerText = address_text;

        let text_balance = await web3.eth.getBalance(selectedAccount);
        let ethBalance = web3.utils.fromWei(text_balance, "ether");
        let humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);
        let balance_header = document.getElementById("balance-header")
        balance_header.innerText = humanFriendlyBalance + " MATIC";

        console.log(selectedAccount);
    } else {
        document.getElementById("connect-wallet-text").style.display = "none";
        document.getElementById("warn-network").style.display = "flex";
    }
}

/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data

    // document.querySelector("#connected").style.display = "none";
    // document.querySelector("#prepare").style.display = "block";

    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.

    // document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
    await fetchAccountData(provider);
    // document.querySelector("#btn-connect").removeAttribute("disabled")
}

/**
 * Connect wallet button pressed.
 */
async function onConnect() {
    try {
        provider = await web3Modal.connect();
    } catch(e) {
        console.log("Could not get a wallet connection", e);
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        fetchAccountData();
    });

    await refreshAccountData();
}

/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if(provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavior.
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    let menuaddr = document.getElementById("initialized-wallet");
    menuaddr.style.display = "none";

    let buttonConnect = document.getElementById("button-wallet-connect");
    buttonConnect.style.display = "inline-flex";

    selectedAccount = null;

    // Set the UI back to the initial state

    // document.querySelector("#prepare").style.display = "block";
    // document.querySelector("#connected").style.display = "none";
}

async function onOpenWallet() {
    location.href = "wallet.html"
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    init();
    let buttonConnect = document.getElementById("button-wallet-connect")
    buttonConnect.addEventListener("click", onConnect)
    let walletButton = document.getElementById("initialized-wallet")
    walletButton.addEventListener("click", onOpenWallet)
    // document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
});


$(document).ready(async function() {

});
