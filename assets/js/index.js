// markdowns = [
//     "physics/README.md",
//     "astronomy/README.md",
//     "zftsh/README.md",
//     "physolimp/README.md",
//     "iepho/README.md",
//     "coding/README.md",
//     "library/README.md"
// ]
//
// markdowns_names = [
//     "Физика",
//     "Астрономия",
//     "ЗФТШ",
//     "Physolimp",
//     "IEPhO",
//     "Coding",
//     "Библиотека"
// ]
//
// $(document).ready(async function() {
//     let add_or_not = 0;
//     for (let link in markdowns) {
//         await $.get(markdowns[link], function (data) {
//             let converter = new showdown.Converter({metadata: true});
//             let html_code = converter.makeHtml(data);
//             let metadata = converter.getMetadata(false);
//             let lis = $(html_code).find('li');
//             let i = 0;
//             for (let html_li of lis) {
//                 if (html_li.innerHTML.indexOf('<strong>NEW</strong>') !== -1) {
//                     if (i === 0) {
//                         $(".section-new").append(`<h2>${markdowns_names[link]}</h2>`);
//                         i = 1;
//                         add_or_not = 1;
//                     }
//                 }
//                 if (html_li.innerHTML.indexOf('<strong>NEW</strong>') !== -1) {
//                     $(html_li).find('strong').remove()
//                     $(".section-new").append(html_li);
//                     console.log(html_li)
//                 }
//             }
//         });
//     }
//     if (add_or_not === 0) {
//         $('.section-new').remove()
//     }
// });
