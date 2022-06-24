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
 * Firstname validation function - checks if firstname form is valid
 * @param {Element} firstname 
 * @returns true or false
 */
function firstnameValidation(firstname) {
    const firstnameForm = firstname.closest('.formData');
    const nameRegex = /^[a-zA-z-éè]{2,15}$/;

    if (firstname.value.trim() === "") {
        firstnameForm.dataset.error = "Veuillez remplir le champ";
        firstnameForm.dataset.errorVisible = "true";
        return false;
    }
    if (firstname.value.length < 2) {
        firstnameForm.dataset.error = "Veuillez saisir au moins deux lettres";
        firstnameForm.dataset.errorVisible = "true";
        return false;
    }
    if (!nameRegex.test(firstname.value)) {
        firstnameForm.dataset.error = "Veuillez n'utiliser que des lettres";
        firstnameForm.dataset.errorVisible = "true";
        return false;
    }
    
    firstnameForm.dataset.errorVisible = "false";
    return true;
}

/** ------------------------------------------------------------
 * Lastname validation function - checks if lastname form is valid
 * @param {Element} lastname 
 * @returns true or false
 */
function lastnameValidation(lastname) {
    const lastnameForm = lastname.closest('.formData');
    const nameRegex = /^[a-zA-z-éè]{2,15}$/;

    if (lastname.value.trim() === "") {
        lastnameForm.dataset.error = "Veuillez remplir le champ";
        lastnameForm.dataset.errorVisible = "true";
        return false;
    }
    if (lastname.value.length < 2) {
        lastnameForm.dataset.error = "Veuillez saisir au moins deux lettres";
        lastnameForm.dataset.errorVisible = "true";
        return false;
    }
    if (!nameRegex.test(lastname.value)) {
        lastnameForm.dataset.error = "Veuillez n'utiliser que des lettres";
        lastnameForm.dataset.errorVisible = "true";
        return false;
    }
    
    lastnameForm.dataset.errorVisible = "false";
    return true;
}

/** ------------------------------------------------------------
 * Email validation function - checks if email form is valid
 * @param {Element} email 
 * @returns true or false
 */
function mailValidation(email) {
    const emailForm = email.closest('.formData');
    const mailRegex = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/;

    if (email.value.trim() === "") {
        emailForm.dataset.error = "Veuillez remplir le champ";
        emailForm.dataset.errorVisible = "true";
        return false;
    }
    if (!mailRegex.test(email.value)) {
        emailForm.dataset.error = "Veuillez renseigner une adresse mail valide";
        emailForm.dataset.errorVisible = "true";
        return false;
    }

    emailForm.dataset.errorVisible = "false";
    return true;
}

/** ------------------------------------------------------------
 * Birthdate validation function - checks if birthdate form is valid
 * @param {Element} birthdate 
 * @returns true or false
 */
function birthdateValidation(birthdate) {
    const birthdateForm = birthdate.closest('.formData');
    const birthdayRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (birthdate.value.trim() === "") {
        birthdateForm.dataset.error = "Veuillez remplir le champ";
        birthdateForm.dataset.errorVisible = "true";
        return false;
    }
    if (!birthdayRegex.test(birthdate.value)) {
        birthdateForm.dataset.error = "Veuillez rentrer une date valide";
        birthdateForm.dataset.errorVisible = "true";
        return false;
    }

    birthdateForm.dataset.errorVisible = "false";
    return true;
}

/** ------------------------------------------------------------
 * Quantity validation function - checks if quantity form is valid
 * @param {Element} quantity 
 * @returns true or false
 */
function quantityValidation(quantity) {
    const quantityForm = quantity.closest('.formData');
    const quantityRegex = /^\d{1,2}$/;

    if (quantity.value.trim() === "") {
        quantityForm.dataset.error = "Veuillez remplir le champ";
        quantityForm.dataset.errorVisible = "true";
        return false;
    }
    if (!quantityRegex.test(quantity.value)) {
        quantityForm.dataset.error = "Le nombre doit être compris entre 0 et 99";
        quantityForm.dataset.errorVisible = "true";
        return false;
    }

    quantityForm.dataset.errorVisible = "false";
    return true;
}

/** ------------------------------------------------------------
 * City validation function - checks if city form is valid
 * @param {NodeElements} cityForm 
 * @returns true or false
 */
function locationValidation(cities) {
    for (let i = 0; i < cities.length; i++) {
        if(cities[i].checked){
            cityChecked = cities[i].value;
            cities[i].closest('.formData').dataset.errorVisible = "false";
            return true;
        }

        cities[i].closest('.formData').dataset.error = "Veuillez selectionné une ville";
        cities[i].closest('.formData').dataset.errorVisible = "true";
    }
}

/** ------------------------------------------------------------
 * Checkbox validation function - checks if checkbox form is valid
 * @param {Element} checkbox 
 * @returns true or false
 */
function checkboxValidation(checkbox) {
    if (checkbox.checked) {
        checkbox.closest('.formData').dataset.errorVisible = "false";
        return true;
    }

    checkbox.closest('.formData').dataset.error = "Veuillez accepter les conditions d'utilisation";
    checkbox.closest('.formData').dataset.errorVisible = "true";
    return false;
}

/** ------------------------------------------------------------
 * Validate form function - checks if every forms are valid
 * @param {Object} e 
 * @returns true or false
 */
 function validateForm(e) {
    e.preventDefault();
    
    //-- Verification array (true or false) for each input value
    let verification = [
        firstnameValidation(firstname),
        lastnameValidation(lastname),
        mailValidation(email),
        birthdateValidation(birthdate),
        quantityValidation(quantity),
        locationValidation(cityForm),
        checkboxValidation(checkbox1)
    ];

    console.log(verification);

    //-- If every data are correct
    if(verification.every(Boolean)) {
        //-- Build object data, prepare to send
        const validateFormData = {
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            birthdate: birthdate.value,
            quantity: parseInt(quantity.value),
            location: cityChecked,
            approved: checkboxValidation(checkbox1),
            newsletter: checkboxValidation(checkbox2)
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