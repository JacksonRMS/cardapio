const list = document.querySelector('ul') //lista não ordenada
const cards = document.querySelector('#cards') //primeiro botão = ForEach - showALL
const botaoDeDesconto = document.querySelector('#desconto') //map-all

cards.addEventListener('click', () => mostrarTudo (menuOptions) )//showAll
botaoDeDesconto.addEventListener('click', descont)


function mostrarTudo(productsArray) { //showAll
    let myLyst = ''
    
    productsArray.forEach((produto) => {
        myLyst += `
                <li>
                    <img src = ${produto.src}>
                    <p>${produto.name}</p>
                    <p>${produto.price}</p>
                </li>
        `
    })
    list.innerHTML = myLyst
}

function descont() { //mapALLItems
    const novosPrecos /*newPrices*/ = menuOptions.map((produto) => ({
        ...produto, //Spread Operator
        price: produto.price * 0.9,
    }))

   mostrarTudo(novosPrecos) //showALL

}










