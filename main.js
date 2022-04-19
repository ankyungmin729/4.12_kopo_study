const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// addEventListener('load', () => {

// })
addEventListener('load', function(){
    const targetRect = target.getBoundingClientRect();
    console.log(targetRect);
    const targetHalfwidth = targetRect.width / 2;
    const targetHalfheight = targetRect.height / 2;

    let curX = 0;
    let curY = 0;
    let mouseX = 0;
    let mouseY = 0;

    this.document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        console.log(x,y);

        
    });

    function animate(){
        this.requestAnimationFrame(animate);
        curX += (mouseX - curX) * 0.3;
        curY += (mouseY - curY) * 0.3;

        vertical.style.transform = `translateX(${curX}px)`;
        horizontal.style.transform = `translateY(${curY}px)`;
        target.style.transform = `translate(${curX-targetHalfwidth}px, ${curY-targetHalfheight}px)`;
        tag.style.transform = `translate(${curX}px, ${curY}px)`;
        tag.innerHTML = `${Math.ceil(curX)}px, ${Math.ceil(curY)}px`;
    }
    animate();
});