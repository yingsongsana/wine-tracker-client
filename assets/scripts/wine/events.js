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
    // .catch(ui.onIndexWineFailure)
}

module.exports = {
  onNewWine,
  onIndexWine
}
