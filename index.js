const form = document.querySelector('form')

const amount = document.getElementById('amount')
const currency = document.getElementById('currency')

const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

const dollarValue = 5.43
const euroValue = 6.07
const libraValue = 7.27

amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, '')
})

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function convertCurrency(amount, price, symbol) {
  try {
    const convertCalc = amount * price
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    result.textContent = `${formatCurrencyBRL(convertCalc)}`

    footer.classList.add('show-result')
  } catch (error) {
    console.log(error)
    footer.classList.remove('show-result')

    alert('Nao foi possível converter.')
  }
}

form.onsubmit = (event) => {
  event.preventDefault()

  if (currency.value === 'USD') convertCurrency(amount.value, dollarValue, '$')

  if (currency.value === 'EUR') convertCurrency(amount.value, euroValue, '€')

  if (currency.value === 'GBP') convertCurrency(amount.value, libraValue, '£')
}
