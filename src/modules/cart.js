import renderCart from "./renderCart";
import postData from "./postData"

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');      // отправка корзины на сервер
    const goodsWrapper = document.querySelector('.goods')        //для функции добавления в корзину
    const cartWrapper = document.querySelector('.cart-wrapper')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        cartModal.style.display = 'flex'

        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    const closeCart = () => {
        cartModal.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartCloseBtn.addEventListener('click', closeCart)

    // клик по кнопке Корзина
    goodsWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')      //поиск родительского элемента, в котором находится кнопка "Корзина", т.к. именно в нем есть идентификатор с data-id
            // console.log(card);
            const key = card.dataset.key     // получили идентификатор

            const goods = JSON.parse(localStorage.getItem('goods'));        //добавляем в новый массив
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {                 // ищем наличие в массиве
                return item.id === +key
            })

            cart.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })

    //удаление товаров из корзины
    // копируем код, который написан выше
    cartWrapper.addEventListener('click', (event) => {
        if(event.target.classList.contains('btn-primary'))  {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            const card = event.target.closest('.card')
            const key = card.dataset.key     // получили идентификатор

            // console.log(key);

            const index = cart.findIndex((item) => {    // находим индекс элемента
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
        }
    })

    // отправка данных из корзины на сервер по клику на кнопке
    // копируем элементы написанного ранее кода
    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        // console.log(cart);

        postData(cart).then(() => {             //после отправки данных очищаем массив и пересчитываем корзину
            localStorage.removeItem('cart')

            renderCart([])

            cartTotal.textContent = 0
        })
    })
}

export default cart
