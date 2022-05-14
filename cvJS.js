const personallink = document.querySelector(".personal a[href*='linkedin.com']");
// konkrét szöveget (linket) tartalmazó href-re így lehet szűkíteni a targetelést

const personal = document.querySelector(".personal");
const toggleButton = document.querySelector("header a");

personal.classList.remove("hide");


function togglePersonal(a){
    a.preventDefault();
    // a link eredeti funkcióját kikapcsolja

    toggleButton.innerHTML == "Hide Personal details" ? toggleButton.innerHTML = "Show Personal details" : toggleButton.innerHTML = "Hide Personal details"
    personal.classList.toggle("hide");
}

toggleButton.addEventListener("click", togglePersonal, false);



/* To the top button
-----------------------------------------------------------------------------------*/
mybutton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (/* document.body.scrollTop > 20 || */ document.documentElement.scrollTop > 20) { 
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