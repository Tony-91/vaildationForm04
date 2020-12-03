function animatedForm() {
    const arrows = document.querySelectorAll (".fa-arrow-down"); 

    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            // relative to arrow icon == input
            const input = arrow.previousElementSibling;
             // relative to arrow icon == class
            const parent = arrow.parentElement;
            // relative to arrow icon == next class
            const nextForm = parent.nextElementSibling;

            // validation check
            if(input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if(input.type === 'email' && validateEmail(input)){
               nextSlide(parent, nextForm); 
            } else if(input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        error('rgb(189, 87, 87)');
        // else return true and green color
        } else {
         //i'm not too confident about this logic here. it's labled as error but colored as green. Instead i would have created and defined a success function.
            error('rgb(87, 189, 130)');
            return true;
        } 
}

function validateEmail(email) {
    const vaildation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(vaildation.test(email.value)) {
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189, 87, 87)');
    }
}


// when form is valid, go onto next class ie. next form
function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}



// css property in js; error == color == red
function error(color) {
    document.body.style.backgroundColor = color;
}



animatedForm();




