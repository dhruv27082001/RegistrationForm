let globalIsSubmitted = false

function validate(isSubmitted = false) {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let others = document.getElementById('others').checked
    let country = document.getElementById('country').value

    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {
    
        //First name validation error message.
        if (firstName.length >= 3 && firstName.match(/^[A-Za-z]*$/)) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        } else {
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true
        }

        //Last name validation error message.
        if (lastName.length >= 3 && lastName.match(/^[A-Za-z]*$/)) {
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        } else {
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error = true
        }

        //Email Validation error message.
        if (
            email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";
            error = true
        }
        
        //Phone Number Validation error message.
        if (phone.length == 10 && phone.match(/^[0-9]+$/) && phone.match(/^[6-9]\d{9}$/)) {
            document.getElementById("phone-valid").style.display = "block";
            document.getElementById("phone-invalid").style.display = "none";
        } else {
            document.getElementById("phone-invalid").style.display = "block";
            document.getElementById("phone-valid").style.display = "none";
            error = true
        }

        //Gender Validation error message.
        if (male || female || others) {
            document.getElementById('valid-gender').style.display = "block"
            document.getElementById('invalid-gender').style.display = "none"
        } else {
            document.getElementById('invalid-gender').style.display = "block"
            document.getElementById('valid-gender').style.display = "none"
        }

        //Country Validation error message.
        if (country != 'None') {
            document.getElementById("country-invalid").style.display = 'none'
            document.getElementById("country-valid").style.display = 'block'
        } else {
            document.getElementById("country-invalid").style.display = 'block'
            document.getElementById("country-valid").style.display = 'none'
            error = true
        }

        //Pop-up msg saved successfully.
        if (!error && isSubmitted) {
            alert('Your details have been saved successfully!')

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }
}

