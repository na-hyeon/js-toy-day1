const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove',(e)=>{//매개변수가 없는 함수.. 가 뭐야ㅠㅠ//
 cursor.style.left = e.pageX +'px';
 cursor.style.top = e.pageY + 'px'; //px단위를 안쓰면 해당 좌표 인식불가//
 cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
 //console.log(e.pageX, e.pageY)//
});
window.addEventListener('scroll', ()=>{
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
 console.log(fromTop)
});

window. addEventListener('click',()=>{
    if(cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click')
    } else {
        cursor.classList.add('click')
    }
})