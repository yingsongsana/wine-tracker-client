'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewWine = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.newWine(formData)
  // console.log(formData)
    .then(ui.onNewWineSuccess)
    .catch(ui.onNewWineFailure)
}

const onIndexWine = function (event) {
  event.preventDefault()

  api.indexWine()
    .then(ui.onIndexWineSuccess)
    .catch(ui.onIndexWineFailure)
}

const onGetWine = function (event) {
  event.preventDefault()

  const formData = getFormFields(event.target)
  // console.log(formData)
  api.getWine(formData)
    .then(ui.onGetWineSuccess)
    .catch(ui.onGetWineFailure)
}

const onUpdateWine = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.updateWine(formData)
    .then(ui.onUpdateWineSuccess)
    .catch(ui.onUpdateWineFailure)
}

const onDeleteWine = function (event) {
  // console.log(event.target)
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.deleteWine(formData)
    .then(ui.onDeleteWineSuccess)
    .catch(ui.onDeleteWineFailure)
}

module.exports = {
  onNewWine,
  onIndexWine,
  onGetWine,
  onUpdateWine,
  onDeleteWine
}
