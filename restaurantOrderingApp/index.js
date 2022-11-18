import {menuArray} from "./data.js"


const yourOrderHtml = document.getElementById('your-order')
const modal = document.getElementById('modal')
const paymentForm = document.getElementById('payment-form')
const thanksMessage = document.getElementById('thanks-message')

let orderList = []






document.addEventListener('click', function(e) {
    if (e.target.dataset.id) {
        handlePlusClick(e.target.dataset.id)
    }
    else if (e.target.dataset.remove) {
        removeBtn(e.target.dataset.remove)
    }
    else if (e.target.id === "complete-btn") {
        openModal()
    }
})


function openModal() {
    modal.style.display = 'block'
}

modal.addEventListener('submit', function(e) {
    e.preventDefault()
    const loginFormData = new FormData(paymentForm)

    const name = loginFormData.get('name')
    modal.innerHTML = `
        <div class='modal-inner-loading'>
            <img src="/images/loading.gif" width="70px" height="70px">
            <p>Waiting for bank confirmation</p>
        </div>`
    setTimeout(function() {
        modal.innerHTML = `
        <div class='modal-inner-loading'>
            <img src="/images/paycompleted.png" width="70px" height="70px">
            <p>Thank you for your order!</p>
            <p>Approximate delivery time 20-30 minutes</p>
        </div>`
    }, 3000)

    setTimeout(function() {
        modal.style.display = 'none'
        yourOrderHtml.style.display = 'none'
        thanksMessage.style.display = 'flex'
        thanksMessage.textContent = `Thanks, ${name}! Your order is on its way!`
    }, 6000)
    
})

function handlePlusClick(itemId) {
    const targetItemObj = menuArray.filter(function(item) {
        return item.id == itemId
    })[0]
    orderList.push(targetItemObj)
    getFeedHtml()
}

function removeBtn(itemId) {
    const targetItemObj = orderList.filter(function(item) {
        return item.id == itemId
    })[0]

    if (targetItemObj.quantity > 0) {
        targetItemObj.quantity--
    } else {
        let itemIndex = orderList.indexOf(targetItemObj)
        orderList.splice(itemIndex, 1)
    }

    getFeedHtml()

}


function getFeedHtml() {
    

    let feedHtml = ``
    menuArray.forEach(function(menu) {
        let orderHtml = ``
        let totalPrice = 0
        orderHtml += 
        `
        <div class="order-section">
            <div class="title">Your order</div>
        </div>
        `
        if (orderList.length > 0) {
            orderList.forEach(function(item) {
                yourOrderHtml.classList.remove('hidden')
                totalPrice += item.price
                orderHtml += 
                `        
                <div class="order-info">
                    <span>${item.name}</span>
                    <button class="remove-btn" data-remove='${item.id}'">remove</button>
                    <span class="price-element">${item.price}$</span>
                </div>
                `
            })
        } else if (orderList.length === 0) {
            yourOrderHtml.classList.add('hidden')
        }
        orderHtml += 
        `
        <div class="total-price">
            <span>Total price</span>
            <span class="price-element">${totalPrice}$</span>
            <button class="complete-btn" id="complete-btn">Complete order</button>    
        </div>
        `

        yourOrderHtml.innerHTML = orderHtml

        

        feedHtml += `
        <div class="wrapper">
            <div class="container">
                <img src="${menu.emoji}" alt="pizza">
                <div class="info">
                    <span class="name">${menu.name}</span>
                    <span class="ingredients">${menu.ingredients}</span>
                    <span class="price">${menu.price}$</span>
                </div>
                <i class="fa-solid fa-plus plus-icon"  data-id='${menu.id}'></i>
                
            </div>
        </div>
        `
        
        
    })
    return feedHtml
}      



function render() {
    document.getElementById('full-menu').innerHTML = getFeedHtml()
}

render()
