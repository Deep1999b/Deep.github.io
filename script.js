// 🌌 Loading animation script
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // give the illusion of loading time
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 800); // matches CSS fade-out
  }, 2000); // fake load duration (2 sec)
});
