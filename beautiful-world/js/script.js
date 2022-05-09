let zSpacing = -1000;
let lastPos = zSpacing / 5;
let frames = document.querySelectorAll('.frame');
let zVals = [];

window.onscroll = function() {

    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;

    lastPos = top;

    frames.forEach((n, idx) => {
        zVals.push((idx * zSpacing) + zSpacing);
        zVals[idx] += delta * -3;
        let frame = frames[idx];
        let transform = `translateZ(${zVals[idx]}px)`;
        let opacity = zVals[idx] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    });
};

window.scrollTo(0, 1);


let soundbtn = document.querySelector('.soundbtn');
let audio = document.querySelector('.audio');

soundbtn.addEventListener('click', () => {
    soundbtn.classList.toggle('paused'); 
    audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function() {
    soundbtn.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function() {
    audio.pause();
};