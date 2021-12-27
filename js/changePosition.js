const main = document.querySelector('.main');


document.addEventListener('mousemove', e => {
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX
    let mouseY = e.clientY
    let res1 = `${50 - (mouseX - w )  *0.01}% ${50 - (mouseY -h)  *0.01}%`
    let x = `${res1}`;

  main.style.backgroundPosition = x ;
});
