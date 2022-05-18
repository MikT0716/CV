var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 200;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    ".typewrite > .wrap { border-right: 0.1em solid rgba(228, 145, 68, 0.9); padding: 0;}";
  document.body.appendChild(css);
};

const personallink = document.querySelector(
  ".personal a[href*='linkedin.com']"
);
// konkrét szöveget (linket) tartalmazó href-re így lehet szűkíteni a targetelést

const personal = document.querySelector(".personal");
const toggleButton = document.querySelector("header a");

personal.classList.remove("hide");

function togglePersonal(a) {
  a.preventDefault();
  // a link eredeti funkcióját kikapcsolja

  toggleButton.innerHTML == "Hide Personal details"
    ? (toggleButton.innerHTML = "Show Personal details")
    : (toggleButton.innerHTML = "Hide Personal details");
  personal.classList.toggle("hide");
}

toggleButton.addEventListener("click", togglePersonal, false);

/* To the top button
-----------------------------------------------------------------------------------*/
mybutton = document.querySelector(".myBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    /* document.body.scrollTop > 20 || */ document.documentElement.scrollTop >
    200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
