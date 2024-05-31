const thumb = document.getElementById('scroll-thumb');
const scrollTrack = document.querySelector('.scroll-track');
let maxLeft = scrollTrack.clientWidth - thumb.clientWidth;

const moveThumb = (amount) => {
    let newLeft = parseInt(window.getComputedStyle(thumb).left, 10) + amount;
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    thumb.style.left = `${newLeft}px`;
};

thumb.onmousedown = (e) => {
    e.preventDefault();
    const startX = e.pageX;
    const startLeft = parseInt(document.defaultView.getComputedStyle(thumb).left, 10);

    const onMouseMove = (e) => {
        let newLeft = startLeft + e.pageX - startX;
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        thumb.style.left = `${newLeft}px`;
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
};
