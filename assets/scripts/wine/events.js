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
  console.log(formData)
  api.getWine(formData)
    .then(ui.onGetWineSuccess)
    .catch(ui.onGetWineFailure)
}

module.exports = {
  onNewWine,
  onIndexWine,
  onGetWine
}
