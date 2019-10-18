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

module.exports = {
  onNewWineSuccess,
  onNewWineFailure
}
