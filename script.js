const input_name = document.getElementById('name')
const input_card_number = document.getElementById('number')
const input_month = document.getElementById('expire_month')
const input_year = document.getElementById('expire_year')
const input_cvc = document.getElementById('input_cvc')





let valid = 0;
let error = 0;

const form = document.getElementById('js-form')
const thanks = document.getElementById('js-thanks')



form.addEventListener('submit', (e) => {
    e.preventDefault();
    cardValidation()
    addHtml()
    checkValid()
    
    
}) 




function cardValidation() {

    const name = input_name.value.trim()
    const cardNumber = input_card_number.value.trim()
    const month = input_month.value.trim()
    const year = input_year.value.trim()
    const cvc = input_cvc.value.trim()



    let nameValid = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i
    let cardNumValidation = /^[0-9]{16}$/
    let cvcValid = /[0-9]{3}$/
    let monthValid = /^((0[1-9])|(1[0-2]))$/
    let yearValid = /^((0[1-9])|(1[0-9])|(2[0-9]|3[0-9]))$/

    const errorName = 'John Monroe Doe'
    const errorNumberCard = '0000000000000000'
    const errorMonth = '00'
    const errorYear = '00'
    const errorCVC = '000'

    if(name === '') {
        errorSign(input_name)
        nameHTML = errorName
    
    
    } else if (name.match(nameValid)){
        nameHTML = name
        validSign(input_name)
        valid++
        
        
    }
    else if (!name.match(nameValid)) {
        errorSign(input_name)
        nameHTML = errorName
       
        
    }

    
    if(cardNumber.match(cardNumValidation)){
       numberHtml = cardNumber
       validSign(input_card_number)
       valid++

        
    }else {
        numberHtml = errorNumberCard
        errorSign(input_card_number)
       
   
        
    }

    if(month.match(monthValid)){
        monthHtml = month
        validSign(input_month)
        valid++

    

    } else {
        errorSign(input_month)
        monthHtml = errorMonth
        
   
       
    }
    if(cvc.match(cvcValid)){
        cvcHtml = cvc
        validSign(input_cvc)
        valid++


       
    }else {
        errorSign(input_cvc)
        cvcHtml = errorCVC
        
    }

    if(year.match(yearValid)){
        yearHtml = year
        validSign(input_year)
        valid++

    }else {
        errorSign(input_year)
        yearHtml = errorYear
    }



   
}

function checkValid() {
        if(valid >= 6 || valid < 5){
            valid = 0;
            
        }
        else if(valid = 5){
            passForm()
            
        }
}

function addHtml() {
    const card_number = document.getElementById('js-card-number')
    const card_name = document.getElementById('js-card-name')
    const card_month = document.getElementById('js-card-expire-month')
    const card_year = document.getElementById('js-card-expire-year')
    const card_cvc = document.getElementById('js-card-cvc')

    card_name.innerHTML = `${nameHTML}`
    card_number.innerHTML = `${numberHtml}`
    card_month.innerHTML = `${monthHtml}`
    card_year.innerHTML = `${yearHtml}`
    card_cvc.innerHTML = `${cvcHtml}`

}

function errorSign(input){
    const formArea = input
    const errorNotif = document.querySelector("small")
    errorNotif.classList.add("error-notification")
    formArea.className = 'error'
}

function validSign(input){
    const formArea = input
    const errorNotif = document.querySelector("small")
    errorNotif.classList.remove("error-notification")
    formArea.className = 'valid'
}

function passForm(){
    form.classList.add("finished-form")
    thanks.classList.add("thank-active")

}