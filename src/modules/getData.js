const getData = () => {
  return  fetch('https://glo-5bcdf-default-rtdb.europe-west1.firebasedatabase.app/goods.json')
            .then(res => res.json())

}

export default getData

