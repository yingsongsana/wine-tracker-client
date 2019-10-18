'use strict'

const store = require('../store.js')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function (data) {
  successMessage('Signed up successfully!')
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (event) {
  failureMessage('Signed up failed')
  $('#sign-up').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
