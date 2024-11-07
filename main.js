const navBtn = document.getElementById('navBtn')
const navBtnIcon = document.getElementById('navBtnIcon')
const navList = document.getElementById('navList')

navBtn.addEventListener('click', () => {
    navList.classList.toggle('hidden')
    if (navBtnIcon.classList.contains('fa-bars-staggered')){
        navBtnIcon.classList.add('fa-bars')
        navBtnIcon.classList.remove('fa-bars-staggered')
        // navBtnIcon.classList.replace('fa-bars-staggered', 'fa-bars')
    }else {
        navBtnIcon.classList.add('fa-bars-staggered')
        navBtnIcon.classList.remove('fa-bars')
        // navBtnIcon.classList.replace('fa-bars', 'fa-bars-staggered')
    }
} )