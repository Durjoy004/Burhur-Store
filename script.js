let menu = document.getElementById('menu');
let cross = document.getElementById('cross');
let menuList = document.getElementById('nav2');

// Sidebar
menu.addEventListener('click', () => {
    menu.style.display = 'none';

    cross.style.display = 'block';

    menuList.style.display = 'block';

})
cross.addEventListener('click', (e) => {
    menu.style.display = 'block';
    cross.style.display = 'none';
    menuList.style.display = 'none';

})

