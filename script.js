const form = document.querySelector('.form-area');

const nameInput = document.querySelector('.card-name-input')
const cardInput = document.querySelector('.card-number-input')
const monthInput = document.querySelector('.card-month-input')
const yearInput = document.querySelector('.card-year-input')
const cvcInput = document.querySelector('.card-cvc-input')

const nameLabel = document.querySelector('.card-name-label')
const cardLabel = document.querySelector('.card-number-label')
const monthYearLabel = document.querySelector('.card-exp-date-label')
const cvcLabel = document.querySelector('.cvc-label')

const nameDisplay = document.querySelector('.card-name-display');
const numberDisplay = document.querySelector('.card-number-display');
const dateDisplay = document.querySelector('.card-date-display');
const cvcDisplay = document.querySelector('.card-cvc-display');

const thankYou = document.querySelector('.thank-you-card')
const finishedBtn = document.querySelector('.finished-btn')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    cardValidation()
    cardDisplay()
  
});
  

function cardValidation(){
  const nameValue = nameInput.value.trim()
  const cardValue = cardInput.value.trim()
  const monthValue = monthInput.value.trim()
  const yearValue = yearInput.value.trim()
  const cvcValue = cvcInput.value.trim()

  let nameValid = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i
  let cardValid = /^[0-9]{16}$/
  let cvcValid = /^[0-9]{3}$/
  let monthValid = /^((0[1-9])|(1[0-2]))$/
  let yearValid = /^((0[1-9])|(1[0-9])|(2[0-9]|3[0-9]))$/

  const defaultName = 'John Doe'
  const defaultCard = '0000 0000 0000 0000'
  const defaultMonth = '00'
  const defaultYear = '00'
  const defaultCvc = '000'

  if(nameValue === '' || (!nameValue.match(nameValid))){
    nameInput.classList.remove('valid')
    nameInput.classList.add('error')
    nameLabel.classList.add('error-label')
    nameHtml = defaultName
  }
  else {
    nameInput.classList.remove('error')
    nameInput.classList.add('valid')
    nameLabel.classList.remove('error-label')
    nameHtml = nameValue
  }

  if(cardValue === '' || (!cardValue.match(cardValid))){
    cardInput.classList.remove('valid')
    cardInput.classList.add('error')
    cardLabel.classList.add('error-label')

    cardHtml = defaultCard
  }
  else {
    cardInput.classList.remove('error')
    cardLabel.classList.remove('error-label')
    cardInput.classList.add('valid')
    cardHtml = cardValue.replace(/\d{4}/g, '$& ').trim();
  }

  if(monthValue === '' || (!monthValue.match(monthValid))){
    monthInput.classList.remove('valid')
    monthInput.classList.add('error')
    monthYearLabel.classList.add('error-label')
    monthHtml = defaultMonth
  }
  else {
    monthInput.classList.remove('error')
    monthInput.classList.add('valid')
  }

  if(yearValue === '' || (!yearValue.match(yearValid))){
    yearInput.classList.remove('valid')
    yearInput.classList.add('error')
    monthYearLabel.classList.add('error-label')
    yearHtml = defaultYear
  }
  else {
    yearInput.classList.remove('error')
    yearInput.classList.add('valid')
  }

  if((monthValue.match(monthValid)) && (yearValue.match(yearValid)))
  {
    monthYearLabel.classList.remove('error-label')
    monthHtml = monthValue
    yearHtml = yearValue
  }

  if(cvcValue === '' || (!cvcValue.match(cvcValid))){
    cvcInput.classList.remove('valid')
    cvcInput.classList.add('error')
    cvcLabel.classList.add('error-label')
    cvcHtml = defaultCvc
  }
  else {
    cvcInput.classList.remove('error')
    cvcLabel.classList.remove('error-label')
    cvcInput.classList.add('valid')
    
    cvcHtml = cvcValue
  }

    if (nameInput.classList.contains("valid") && cardInput.classList.contains("valid") &&
      monthInput.classList.contains("valid") && yearInput.classList.contains("valid") &&
      cvcInput.classList.contains("valid")) {
      thankYou.style.display = 'block'
  } else {
    thankYou.style.display = 'none'
  }

}

function cardDisplay() {
  nameDisplay.innerHTML = `${nameHtml}`
  numberDisplay.innerHTML = `${cardHtml}`
  dateDisplay.innerHTML = `${monthHtml} / ${yearHtml}`
  cvcDisplay.innerHTML = `${cvcHtml}`
}

finishedBtn.addEventListener("click", () => {
  location.reload();
})