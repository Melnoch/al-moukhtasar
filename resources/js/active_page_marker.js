let title = document.getElementsByTagName("title").item(0).text;
let navItems = document.getElementsByClassName("dropdown-item");
Array.from(navItems).forEach(item => checkAndTagActiveNav(item));

function checkAndTagActiveNav(item) {
    if (item.text === title) {
        item.classList.add('active', 'bold');
    }
}