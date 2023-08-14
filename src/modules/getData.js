const getData = (str) => {
  //   return  fetch(`https://glo-5bcdf-default-rtdb.europe-west1.firebasedatabase.app/goods.json?${str ? `search=${str}` : ''}`)    -- именно вот так делается на настоящих серверах. Но в Firebase, где хранится база, это не работает
  return  fetch('https://glo-5bcdf-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
            .then(res => res.json())

}

export default getData

