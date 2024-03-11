const cityInput = document.querySelector(".city-js");
const cityBtn = document.querySelector(".city-btn-js");
const deliveryBtn = document.querySelector(".delivery-btn-js");
const deliveryRadios = document.querySelectorAll('input[name="delivery"]');
const paymentRadios = document.querySelectorAll('input[name="payments"]');
const paymentBtn = document.querySelector(".payment-btn-js");
const checkBtn = document.querySelector(".bottom-check-js");
const buyerForm = document.querySelector('.buyer-js');
const bottomBlock = document.querySelector('.bottom-js');
const submitButton = document.querySelector('.submit-js');

cityInput?.addEventListener("input", function () {
    cityBtn.disabled = !cityInput.value.trim();
});

cityBtn?.addEventListener("click", function () {
    document.querySelector('li[data-true="false"]').setAttribute("data-true", "true");
});

deliveryBtn?.addEventListener("click", function () {
    document.querySelector('li[data-true="false"]').setAttribute("data-true", "true");
});

paymentBtn?.addEventListener("click", function () {
    document.querySelector('li[data-true="false"]').setAttribute("data-true", "true");
});

deliveryRadios?.forEach(function (radio) {
    radio.addEventListener("change", function () {
        const isAnyRadioSelected = Array.from(deliveryRadios).some((radio) => radio.checked);
        
        if (isAnyRadioSelected) {
            deliveryBtn.removeAttribute("disabled");
        } else {
            deliveryBtn.setAttribute("disabled", "disabled");
        }
    });
});


paymentRadios?.forEach(function (radio) {
    radio.addEventListener("change", function () {
        const isAnyRadioSelected = Array.from(paymentRadios).some((radio) => radio.checked);
        if (isAnyRadioSelected) {
            paymentBtn.removeAttribute("disabled");
        } else {
            paymentBtn.setAttribute("disabled", "disabled");
        }
    });
});

buyerForm?.addEventListener('input', function () {
    const requiredInputs = buyerForm.querySelectorAll('input[required]');
    const isAllFieldsFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');

    if (isAllFieldsFilled) {
        checkBtn
        bottomBlock.classList.add('_active');
    } else {
        bottomBlock.classList.remove('_active');
    }
});

checkBtn?.addEventListener('change', function() {
    if (checkBtn.checked) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
});

const liElements = document.querySelectorAll('.basketbuy-js li');

liElements?.forEach((li, index) => {
    const currentSpan = li.querySelector('.edit-js');
    
    if (currentSpan) {
        const nextLi = liElements[index + 1];

        if (nextLi && nextLi.getAttribute('data-true') === 'true') {
            currentSpan.addEventListener('click', () => {
                nextLi.scrollIntoView({ behavior: 'smooth' });
            });
        } else {
            currentSpan.style.pointerEvents = 'none'; 
        }
    }
});

