// lil glowing effect for fun
document.addEventListener('mousemove', (e) => {
  const x = e.pageX / window.innerWidth;
  const y = e.pageY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, #111122, #000010)`;
});

// 🌌 Loading animation script
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // delay for realism (you can tweak it)
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 800); // match with CSS fade-out duration
  }, 2000); // 2-second load screen
});
