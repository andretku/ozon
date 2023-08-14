import cart from "./modules/cart";
import catalog from "./modules/catalog";
import filter from "./modules/filter";
import load from "./modules/load";
import search from "./modules/search";


cart()
load()
search()
catalog()
filter()

// осталось только доделать 0, который висит на корзинке сверху на главной странице - обращение к Локал Сторэдж
//- Значение должно подсчитываться при загрузке страницы, при добавлении товара в корзину и при удалении товара из корзины. Так же обнуляться при отправке данных.