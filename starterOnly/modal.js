function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//-- DOM Elements
const modalbg  = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const closeVld = document.querySelector(".close-button");
const content  = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
closeBtn.addEventListener("click", closeModal);
closeVld.addEventListener("click", closeModal);

/** ------------------------------------------------------------
 * Launch modal function
 */
function launchModal() {
    modalbg.style.display = "block";
}

/** ------------------------------------------------------------
 * Close modal function
 */
function closeModal() {
    modalbg.style.display = "none";

    //-- Disbale error for each form data
    formData.forEach(element => {
        element.dataset.error = "";
        element.dataset.errorVisible = "false";
    });
}

/*content.style.animationName = "modalclose";

content.addEventListener("animationend", () => {
    modalbg.style.display = "none";
    content.style.animationName = "modalopen";
})*/