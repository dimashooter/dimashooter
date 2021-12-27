const range = document.querySelector('.sum_range');
const header = document.getElementById('header');
const scrollTop = document.getElementById('scrollTop')

document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if(range.classList.contains("active")) return;
    if(  scroll > 120){
        range.classList.add('active')
    }
   
})

document.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if(scroll > 300){
        header.classList.add('active');
        scrollTop.style.display = 'flex';
    }  else {
        header.classList.remove('active');
        scrollTop.style.display = 'none';

    }
}) 




