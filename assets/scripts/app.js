'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const wineEvents = require('./wine/events.js')
// const uiEvents = require('./wine/ui.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.auth-items').hide()
  $('.cellar').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#wine-entry').on('submit', wineEvents.onNewWine)
  $('#wine-index').on('click', wineEvents.onIndexWine)
  $('#wine-id').on('submit', wineEvents.onGetWine)
  // Because of event bubbling due to Handlebars template, need to target the parent
  // element here and look for the child element within it.... this handles/prevents
  // the page from being reloaded
  $('.wine-cellar').on('submit', '.wine-update', wineEvents.onUpdateWine)
  $('#wine-delete').on('submit', wineEvents.onDeleteWine)
})
