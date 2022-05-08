window.onload = function() {

  setTimeout(() => {

    document.body.classList.add('loaded');

    Draggable.create('.gallery', {
      bounds: 'body',
      inertia: true
    });
  }, 2000);
};