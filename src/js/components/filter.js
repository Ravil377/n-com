// Импортируйте стили ion-rangeslider (путь зависит от вашей конфигурации проекта)
// import 'ion-rangeslider/css/ion.rangeSlider.min.css';

// Импортируйте сам плагин
import 'ion-rangeslider/js/ion.rangeSlider.min.js';
const filter = document?.querySelector('[data-filter]');
const filterMenu = document?.querySelector('[data-filter-menu]');
const inputs = document?.querySelectorAll('.custom-checkbox__field-js');
const columns = document?.querySelector('[data-columns]');
const goods = document?.querySelector('[data-goods]');

var $ranges = $(".js-range-slider"),
    $inputsFrom = $(".js-input-from"),
    $inputsTo = $(".js-input-to"),
    instances = [],
    min = 0,
    max = 1000;

filter.addEventListener('click', () => {
    inputs.forEach(input => {
        if (input) {
            var container = input?.closest('.filter-checkbox');
            var filterContent = container?.querySelector('.filter-checkbox__content');
            filterContent.style.display = 'none';
            input.checked = false;
        }
    });
    filterMenu.classList.toggle('_active');
})

$ranges.each(function (index) {
    var $range = $(this);
    var $inputFrom = $inputsFrom.eq(index);
    var $inputTo = $inputsTo.eq(index);

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        onStart: function (data) {
            updateInputs(data, $inputFrom, $inputTo);
        },
        onChange: function (data) {
            updateInputs(data, $inputFrom, $inputTo);
        }
    });

    instances.push($range.data("ionRangeSlider"));
});

function updateInputs(data, $inputFrom, $inputTo) {
    var from = data.from;
    var to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputsFrom.on("input", function () {
    var $inputFrom = $(this);
    var index = $inputsFrom.index($inputFrom);
    var val = $inputFrom.prop("value");

    if (val < min) {
        val = min;
    } else if (val > instances[index].result.to) {
        val = instances[index].result.to;
    }

    instances[index].update({
        from: val
    });
});

$inputsTo.on("input", function () {
    var $inputTo = $(this);
    var index = $inputsTo.index($inputTo);
    var val = $inputTo.prop("value");

    if (val < instances[index].result.from) {
        val = instances[index].result.from;
    } else if (val > max) {
        val = max;
    }

    instances[index].update({
        to: val
    });
});


inputs.forEach(input => input.addEventListener('change', () => toggleFilterContent(input)));

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

columns?.addEventListener('click', (e) => {
    e.preventDefault();
    const currentBtn = e.target;
    const id = currentBtn?.dataset.id;
    id == 1 && !goods.classList.contains('_one') ? goods?.classList.add('_one') : goods.classList.remove('_one');
    const active = columns?.querySelector('._active');
    active.classList.remove('_active');
    currentBtn.classList.add('_active');
})