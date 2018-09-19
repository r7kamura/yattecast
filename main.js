window.addEventListener('load', () => {
  document.querySelectorAll('.main > .container > .card > article').forEach(e => {
    const d = Date.parse(e.querySelector('.date-time').innerHTML.trim());
    
    if (d < Date.now()) {
      e.style.display = '';
    } else {
      console.log('Not yet publish it.');
    }
  });
});
