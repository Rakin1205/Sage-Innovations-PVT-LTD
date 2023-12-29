const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const otherMenu = document.querySelector(".otherMenu");

btnRight.addEventListener("click", () => {
    otherMenu.scrollLeft += 150;
});

btnLeft.addEventListener("click", () => {
    otherMenu.scrollLeft -= 150;
});

//navigation bar

function showSidebar(){
    const sidebar = document.querySelector('.sideBar')
    sidebar.classList.add('active');
    const subSidebar = document.querySelector('.subSideBar')
    subSidebar.classList.add('active');
}
function closeSidebar(){
    const sidebar = document.querySelector('.sideBar')
    sidebar.classList.remove('active');
    const subSidebar = document.querySelector('.subSideBar')
    subSidebar.classList.remove('active');
}

function showLogin(){
    const subSidebar = document.querySelector('.Blur')
    subSidebar.classList.add('active');
}
function closeLogin(){
    const subSidebar = document.querySelector('.Blur')
    subSidebar.classList.remove('active');
}

function showSignUp(){
    const Sidebar = document.querySelector('.wrapper')
    Sidebar.classList.add('active');

    const subSidebar = document.querySelector('.wrapper1')
    subSidebar.classList.add('active');
}
function closeSignUp(){
    const subSidebar = document.querySelector('.wrapper')
    subSidebar.classList.remove('active');

    const Sidebar = document.querySelector('.wrapper1')
    Sidebar.classList.remove('active');
}