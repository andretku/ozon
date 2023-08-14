
// фильтрация по буквам в строке поиска (в инпуте)
export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

// фильтрация по категориям
export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

//основная фильтрация по цене
export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if(min === '' && max === '') {
            return goodsItem
        } else if(min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if(min !== '' && max === '') {
            return goodsItem.price > +min
        } else if(min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}

//фильтрация по Акциям
export const hotSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if(value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}