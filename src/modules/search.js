import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

// фильтрация имеющихся товаров по каждой новой вводимой букве в инпуте!
// в строку подключения к БД в getData добавили проверку на str

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    searchInput.addEventListener('input', (event) => {
        const value = event.target.value;

        getData().then(data => {
            renderGoods(searchFilter(data, value))
        });
    })
}

export default search