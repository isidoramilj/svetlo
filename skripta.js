var prek = document.getElementById("prekidac");
var kal = document.getElementById("kal-wrapper");
var hide = document.getElementById("hide");
var poz = document.getElementsByClassName("bg")[0];
var poz2 = document.getElementsByClassName("bg")[1];
var svt = document.getElementById("svetlo");
var poz4 = document.getElementById("bg4");

var ukljuceno = false;

prek.onclick = function () {

  // RESET animacije (ovo je ključno)
  svt.style.animation = "none";
  svt.offsetHeight; // reflow - forsira reset
  svt.style.animation = null;

  if (!ukljuceno) {

    prek.src = "slike/prekidac2.svg";
    document.body.classList.add("otkljucano");

    // napred
    svt.style.animation = "svetlo 0.8s ease-in forwards";
    svt.style.animationDirection = "normal";

    svt.addEventListener("animationend", function handler() {

      hide.classList.add("hidden");

      setTimeout(() => {
        kal.classList.add("aktivno");
        poz4.classList.add("neaktivno");
      }, 300);

      svt.removeEventListener("animationend", handler);
    });

    ukljuceno = true;

  } else {

    prek.src = "slike/prekidac1.svg";
    document.body.classList.remove("otkljucano");

    // prvo sakrij kalendar
    kal.classList.remove("aktivno");
    hide.classList.remove("hidden");
    poz4.classList.remove("neaktivno");

    // pa animacija unazad
    svt.style.animation = "svetlo 0.8s ease-in forwards";
    svt.style.animationDirection = "reverse";

    ukljuceno = false;
  }
};


  var datum = document.querySelectorAll(".datum-klik");
  var info = document.querySelectorAll(".tekst");

  info.forEach(sec => sec.classList.add("hidden"));

  datum.forEach(dat => {
    dat.addEventListener("click", () => {
      info.forEach(sec => sec.classList.add("hidden"));
      var idMatch = dat.id.replace("-klik", "");
      document.getElementById(idMatch).classList.remove("hidden");

    });
  });