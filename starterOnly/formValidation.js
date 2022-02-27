//-- Form variables
const validation   = document.querySelector(".validation-container");
const form         = document.querySelector("form[name='reserve']");
const allTextInput = document.querySelectorAll("form[name='reserve'] input.text-control");
const firstname    = document.querySelector("#first");
const lastname     = document.querySelector("#last");
const email        = document.querySelector("#email");
const birthdate    = document.querySelector("#birthdate");
const quantity     = document.querySelector("#quantity");
const cityForm     = document.getElementsByName('location');
const checkbox1    = document.querySelector("#checkbox1");
const checkbox2    = document.querySelector("#checkbox2");

let cityChecked = "";

// Submit form event
form.addEventListener("submit", validateForm);

/** ------------------------------------------------------------
 * Firstname validation function
 * @param {Element} firstname 
 * @returns true or false
 */
function firstnameValidation(firstname) {
    const firstnameForm = firstname.parentElement;
    const nameRegex = /^[a-zA-z-éè]{2,15}$/;

    if (!nameRegex.test(firstname.value) || firstname.value.length < 2 || firstname.value === "") {
        if (firstname.value === "") {
            firstnameForm.dataset.error = "Veuillez remplir le champ";
        }else if (firstname.value.length < 2) {
            firstnameForm.dataset.error = "Veuillez saisir au moins deux lettres";
        }
        else if (!nameRegex.test(firstname.value)) {
            firstnameForm.dataset.error = "Veuillez n'utiliser que des lettres";
        }
        firstnameForm.dataset.errorVisible = "true";
        return false;
    }else {
        firstnameForm.dataset.errorVisible = "false";
        return true;
    }
}

/** ------------------------------------------------------------
 * Validate form function
 * @param {Object} e 
 * @returns true or false
 */
 function validateForm(e) {
    e.preventDefault();
    
    //-- Verification array (true or false) for each input value
    let verification = [
        firstnameValidation(firstname),
    ];

    //-- If every data are correct
    if(verification.every(Boolean)) {
        //-- Build object data, prepare to send
        const validateFormData = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            birthdate: birthdate.value,
            quantity: parseInt(quantity.value)
        };

        console.log("%c----- [Object to send] -----", "color: #65b44b");
        console.log(validateFormData);

        //-- Display validation message
        form.style.display = "none";
        validation.style.display = "block";

        return true;
    }else {
        return false;
    }
}
