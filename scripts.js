const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
} )

var botonArriba = document.getElementById("btn-arriba");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botonArriba.style.display = "block";
  } else {
    botonArriba.style.display = "none";
  }
}

botonArriba.addEventListener("click", function() {
  scrollToTop(1000); // 1000 ms = 1 segundo
});

function scrollToTop(duration) {
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

  var scrollStep = function() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var elapsedTime = now - startTime;
    var newScrollPosition = Math.easeInOutQuad(elapsedTime, start, -start, duration);
    window.scrollTo(0, newScrollPosition);
    if (elapsedTime < duration) {
      requestAnimationFrame(scrollStep);
    }
  };

  scrollStep();
}

// Función de easing para suavizar el desplazamiento
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};