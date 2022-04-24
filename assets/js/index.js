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

function get_info() {
    let i = 0
    $.get(list_files[i], function (data) {
        let converter = new showdown.Converter({metadata: true});
        let html_code = converter.makeHtml(data);
        let metadata = converter.getMetadata(false);
        console.log(html_code);
        console.log(metadata)
        // let html_topic = make_topic(metadata, html_code);
    })
}
