const first = document.querySelector('#first');
const last = document.querySelector('#last');
const text = document.querySelector('#text');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  first.style.top = value * 0.7 + 'px';
  last.style.bottom = value * 0.7 + 'px';
  text.style.top = value * 1 + 'px';
});