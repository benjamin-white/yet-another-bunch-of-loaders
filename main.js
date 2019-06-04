document.addEventListener('DOMContentLoaded', () => {

  const invertButton = document.getElementsByClassName('js-style--invert');

  invertButton.length && [...invertButton].forEach(button => {
    button.addEventListener('click', ev => {
      document.body.classList.toggle('u-inverted');
    });
  });

});
