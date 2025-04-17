// زر الرجوع لأعلى
document.getElementById("toTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// الوضع الليلي
document.getElementById("toggleMode").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
