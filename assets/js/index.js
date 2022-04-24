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
