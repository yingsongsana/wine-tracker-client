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
  $('#message').show()
  successMessage('Signed up successfully!')
  store.user = data.user
  // console.log(store.user)
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (event) {
  $('#message').show()
  failureMessage('Signed up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (data) {
  $('#message').show()
  successMessage('Signed in successfully!')
  store.user = data.user
  $('#sign-in').trigger('reset')
  // console.log(store.user)
  // $('body').css('background-image', "url('/public/images/background.jpg')")
  // $('body').css('background-repeat', 'repeat')
  // $('body').css('background-size', 'auto')
  $('.greeting').hide()
  $('.auth-items').show()
  $('.cellar').show()
}

const onSignInFailure = function (event) {
  $('#message').show()
  failureMessage('Signed in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (data) {
  $('#message').show()
  successMessage('Changed password successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (event) {
  $('#message').show()
  failureMessage('Changed password failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').show()
  $('#wine-message').hide()
  successMessage('Signed out successfully!')
  $('.auth-items').hide()
  $('.cellar').hide()
  $('.greeting').show()
  // $('body').css('background-image', "url('public/images/grapes_maja_petric.jpg')")
  // $('body').css('background-size', 'cover')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
