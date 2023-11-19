const subButton = document.querySelector('.button__form');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close__btn');
const myForm = document.querySelector('.form')

subButton.addEventListener('click', function(event){
    event.preventDefault();

    if(validateForm(myForm)){
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: myForm.elements.to.value
        };


       const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
    }

    modal.style.display = "flex";

    closeBtn.addEventListener('click', function(){
       modal.style.display = 'none';
    });

    function validateForm(form){
        let valid = true

        if (!validateField(form.elements.name)){
            valid = false;
        }

        if (!validateField(form.elements.phone)){
            valid = false;
        }

        if (!validateField(form.elements.comment)){
            valid = false;
        }

        return valid
    }

    function validateField(field){
        field.nextElementSibling.textContent = field.validationMessage;

        return field.checkValidity();
    }
});