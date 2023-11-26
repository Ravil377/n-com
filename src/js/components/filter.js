// Импортируйте стили ion-rangeslider (путь зависит от вашей конфигурации проекта)
// import 'ion-rangeslider/css/ion.rangeSlider.min.css';

// Импортируйте сам плагин
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

const inputs = document.querySelectorAll('.custom-checkbox__field-js');
inputs.forEach(input => {
    input.addEventListener('change', () => toggleFilterContent(input));
});

function toggleFilterContent(clickedInput) {
    inputs.forEach(input => {
        if (input !== clickedInput) {
            var container = input.closest('.filter-checkbox');
            var filterContent = container?.querySelector('.filter-checkbox__content');
            filterContent.style.display = 'none';
            input.checked = false;
        }
    });

    var container = clickedInput.closest('.filter-checkbox');
    var filterContent = container?.querySelector('.filter-checkbox__content');

    if (clickedInput.checked) {
        filterContent.style.display = 'flex';
    } else {
        filterContent.style.display = 'none';
    }
}


const columns = document?.querySelector('[data-columns]');
const goods = document?.querySelector('[data-goods]');



columns?.addEventListener('click', (e) => {
    e.preventDefault();
    const currentBtn = e.target;
    const id = currentBtn?.dataset.id;
    id == 1 && !goods.classList.contains('_one') ? goods?.classList.add('_one') : goods.classList.remove('_one');
    const active = columns?.querySelector('._active');
    active.classList.remove('_active');
    currentBtn.classList.add('_active');

})