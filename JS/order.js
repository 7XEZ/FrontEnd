const subButton = document.querySelector('.button__form');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#close__btn');
const myForm = document.querySelector('.form');

function validateForm(form) {
    let valid = true;
    ['name', 'phone', 'comment'].forEach(function(fieldName) {
        const field = form.elements[fieldName];
        if (!validateField(field)) {
            valid = false;
        }
    });
    return valid;
}

function validateField(field) {
    let errorDiv = field.nextElementSibling;
    if (!field.checkValidity()) {
        errorDiv.textContent = field.validationMessage;
        field.classList.add('error-highlight');
        return false;
    } else {
        errorDiv.textContent = '';
        field.classList.remove('error-highlight');
        return true;
    }
}

subButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: myForm.elements.to.value
        };

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status === 200) {
                modal.style.display = "flex";
            } else {
                console.error('Ошибка отправки: ', xhr.response);
                // Здесь можно добавить обработку ошибок сервера, например, отобразить сообщение об ошибке
            }
        };
        xhr.onerror = function() {
            console.error('Ошибка запроса');
            // Здесь можно добавить обработку ошибок сети, например, отобразить сообщение об ошибке
        };
        xhr.send(JSON.stringify(data));
    }
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
