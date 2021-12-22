$(document).ready(async function() {
    $.get("https://nplus1.ru/rss", function (data, error) {
        console.log(data)
    })
})