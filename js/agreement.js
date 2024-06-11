
/* mask Phone start */
let MaskOne = document.querySelector("#form-1-phone")
let maskone = new Inputmask("+7(999) 999-99-99")
maskone.mask(MaskOne)
/* mask Phone end */

document.querySelectorAll('form').forEach((el) => {
  ItcSubmitForm.getOrCreateInstance(el);
})

document.addEventListener('itc.successSendForm', (e) => {
  const el = e.target.closest('.form-container').querySelector('.form-success');
  el.classList.remove('form-success_hide');
});

// при клике на .form-success__btn
document.addEventListener('click', (e) => {
  if (!e.target.closest('.form-success__btn')) {
    return;
  }
  const el = e.target.closest('.form-container').querySelector('form');
  const form = ItcSubmitForm.getOrCreateInstance(el);
  form.reset();
  e.target.closest('.form-container').querySelector('.form-success').classList.add('form-success_hide');
});




/* Скрипт для popup Начало */
// Get the modal
var modal = document.getElementById("mymodal");

// Get the button that opens the modal
var btn = document.getElementById("mybtn");
var btn1 = document.getElementById("mybtn-1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("navbar__modal__close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // ADD THIS LINE
  document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // ADD THIS LINE
  document.body.style.height = "auto"; // ADD THIS LINE
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto";  // ADD THIS LINE    
  }
}
/* Скрипт для popup Конец */


const hamburger = document.querySelector(".hamburger")
const nav_menu = document.querySelector(".navbar__menu")

hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
  document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden';
})

document.querySelectorAll(".navbar__link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav_menu.classList.remove("active");
  document.body.style.overflow = "visible";
}))