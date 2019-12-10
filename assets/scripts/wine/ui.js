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

const displayWine = function (responseData) {
  $('.wine-cellar').text('')
  const wineText = (`
    <div class="containerSingle">
    <h3>${responseData.wine.name}</h3>
    <ul>ID: ${responseData.wine.id}</ul>
    <ul>Producer: ${responseData.wine.producer}</ul>
    <ul>Style: ${responseData.wine.style}</ul>
    <ul>Variety: ${responseData.wine.variety}</ul>
    <ul>Producer: ${responseData.wine.producer}</ul>
    <ul>Country: ${responseData.wine.country}</ul>
    <ul>Appearance: ${responseData.wine.appearance}</ul>
    <ul>Aroma: ${responseData.wine.aroma}</ul>
    <ul>Tasting Notes: ${responseData.wine.notes}</ul>
    <ul>Memories: ${responseData.wine.mem}</ul>
    </div>
  `)
  $('.wine-cellar').append(wineText)
}

const onNewWineSuccess = function (data) {
  $('#message').hide()
  $('wine-cellar').show()
  successMessage('New entry created successfully!')
  store.wine = data.wine
  // console.log(store.wine)
  $('#wine-entry').trigger('reset')
  $('#wineModal').modal('toggle')
  displayWine(data)
}

const onNewWineFailure = function (event) {
  $('#message').hide()
  failureMessage('New entry creation failed')
  $('#wineModal').modal('toggle')
}

const onIndexWineSuccess = function (data) {
  // store.wine = data.wines
  // console.log(data)
  // console.log(store.wine)
  // console.log(store.wine[0].name)
  $('#message').hide()
  $('#wine-message').show()
  successMessage('Here are all your bottles!')
  const winesPageHtml = winesPageTemplate({ wines: data.wines })
  $('.wine-cellar').show()
  $('.wine-cellar').text('')
  $('.wine-cellar').append(winesPageHtml)
}

const onIndexWineFailure = function (data) {
  $('#message').hide()
  failureMessage('Wine index unable to retrieve')
  $('.wine-cellar').text('')
}

const onGetWineSuccess = function (responseData) {
  // console.log(responseData)
  $('.container').hide()
  displayWine(responseData)
  $('#wine-id').trigger('reset')
  $('#message').hide()
  successMessage('Found your bottle!')
}

const onGetWineFailure = function () {
  $('#message').hide()
  failureMessage('Unable to find your bottle!')
  $('.wine-cellar').text('')
}

const onUpdateWineSuccess = function (responseData) {
  $('#message').hide()
  successMessage('Updated successfully!')
  $('#wine-update').trigger('reset')
  $('#wineUpdateModal').modal('toggle')
  displayWine(responseData)
}

const onUpdateWineFailure = function () {
  $('#message').hide()
  failureMessage('Update failed')
  $('#wineUpdateModal').modal('toggle')
}

const onDeleteWineSuccess = function (responseData) {
  $('#message').hide()
  successMessage('Your bottle will be missed! Time to restock!')
  $('#wine-delete').trigger('reset')
  $('#wineDeleteModal').modal('toggle')
}

const onDeleteWineFailure = function () {
  $('#message').hide()
  failureMessage("You sure it's corked? Try again.")
  $('#wineDeleteModal').modal('toggle')
}

module.exports = {
  onNewWineSuccess,
  onNewWineFailure,
  onIndexWineSuccess,
  onIndexWineFailure,
  onGetWineSuccess,
  onGetWineFailure,
  onUpdateWineSuccess,
  onUpdateWineFailure,
  onDeleteWineSuccess,
  onDeleteWineFailure
}
