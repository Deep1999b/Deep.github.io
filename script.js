// lil glowing effect for fun
document.addEventListener('mousemove', (e) => {
  const x = e.pageX / window.innerWidth;
  const y = e.pageY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, #111122, #000010)`;
});
