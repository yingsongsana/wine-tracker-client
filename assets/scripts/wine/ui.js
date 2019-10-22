'use strict'

const store = require('../store.js')
const winesPageTemplate = require('../templates/wines-page.handlebars')

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
  $('#wineModal').modal('toggle')
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
  successMessage('Here are all your bottles!')
  const winesPageHtml = winesPageTemplate({ wines: data.wines })
  $('.wine-cellar').text('')
  $('.wine-cellar').append(winesPageHtml)
}

const onIndexWineFailure = function (data) {
  failureMessage('Wine index unable to retrieve')
  $('.wine-cellar').text('')
}

const onGetWineSuccess = function (responseData) {
  console.log(responseData)
  $('.wine-cellar').text('')
  const wineText = (`
    <h4>Name: ${responseData.wine.name}</h4>
    <ul>Producer: ${responseData.wine.producer}</ul>
    <ul>Style: ${responseData.wine.style}</ul>
    <ul>Variety: ${responseData.wine.variety}</ul>
    <ul>Producer: ${responseData.wine.producer}</ul>
    <ul>Country: ${responseData.wine.country}</ul>
    <ul>Appearance: ${responseData.wine.appearance}</ul>
    <ul>Aroma: ${responseData.wine.aroma}</ul>
    <ul>Tasting Notes: ${responseData.wine.notes}</ul>
    <ul>Memories: ${responseData.wine.mem}</ul>
    <br>
    `)
  $('.wine-cellar').append(wineText)
  $('#wine-id').trigger('reset')
  successMessage('Found your bottle!')
}

const onGetWineFailure = function () {
  failureMessage('Unable to find your bottle!')
  $('.wine-cellar').text('')
}

const onUpdateWineSuccess = function () {
  successMessage('Updated successfully!')
  $('#wine-update').trigger('reset')
  $('#wineUpdateModal').modal('toggle')
}

const onUpdateWineFailure = function () {
  failureMessage('Update failed')
}

module.exports = {
  onNewWineSuccess,
  onNewWineFailure,
  onIndexWineSuccess,
  onIndexWineFailure,
  onGetWineSuccess,
  onGetWineFailure,
  onUpdateWineSuccess,
  onUpdateWineFailure
}
