import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"
import { hotSaleFilter } from "./filters"

// фильтр по цене и акции (чекбокс)

const filter = () => {
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');

    const checkboxInput = document.getElementById('discount-checkbox');
    const checkboxSpan = document.querySelector('.filter-check_checkmark');

    // сейчас функции сортировки по цене и по акции не связаны между собой. Поэтому что мы сделали последнее, то и срабатывает без учета предыдущего. Поэтому меняем renderGoods(priceFilter(data, ...)) на то, что есть сейчас, а потом видоизмененную функцию копируем в checkBoxinput. Оставил старые варианты для того, чтобы можно было бы их использовать по отдельности

    minInput.addEventListener('input', () => {
        getData().then(data => {
         // renderGoods(priceFilter(data, minInput.value, maxInput.value))
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        });
    })

    maxInput.addEventListener('input', () => {
        getData().then(data => {
         // renderGoods(priceFilter(data, minInput.value, maxInput.value))
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        });
    })


    checkboxInput.addEventListener('change', () => {
        if(checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }
        getData().then(data => {
         // renderGoods(hotSaleFilter(data, checkboxInput.checked))
            renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value))
        });
    })
}

export default filter