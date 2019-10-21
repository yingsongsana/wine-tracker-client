'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#wine-message').text(newText)
  $('#wine-message').removeClass('failure')
  $('#wine-message').addClass('success')
}
const failureMessage = function (newText) {
  $('#wine-message').text(newText)
  $('#wine-message').removeClass('success')
  $('#wine-message').addClass('failure')
}

const onNewWineSuccess = function (data) {
  successMessage('New entry created successfully!')
  store.wine = data.wine
  console.log(store.wine)
  $('#wine-entry').trigger('reset')
}

const onNewWineFailure = function (event) {
  failureMessage('New entry creation failed')
  $('#wine-entry').trigger('reset')
}

const onIndexWineSuccess = function (data) {
  // store.wine = data.wines
  // console.log(data)
  // console.log(store.wine)
  // console.log(store.wine[0].name)
  successMessage('Wine index retrieved!')
}

const onIndexWineFailure = function (data) {
  failureMessage('Wine index unable to retrieve')
}

const onGetWineSuccess = function (responseData) {
  console.log(responseData)
  $('.wine-cellar').html('')
  const wineText = (`
    <h4>Name: ${responseData.wine.name}</h4>
    <p>Producer: ${responseData.wine.producer}</p>
    <br>
    `)
  $('.wine-cellar').html(wineText)
}

const onGetWineFailure = function () {
  failureMessage('Uable to find your bottle!')
}

module.exports = {
  onNewWineSuccess,
  onNewWineFailure,
  onIndexWineSuccess,
  onIndexWineFailure,
  onGetWineSuccess,
  onGetWineFailure
}
