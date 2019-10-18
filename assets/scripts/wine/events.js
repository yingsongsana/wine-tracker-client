'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewWine = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.newWine(formData)
  console.log(formData)
  //   .then(ui.onNewWineSuccess)
  //   .cath(ui.onNewWineFailure)
}

module.exports = {
  onNewWine
}
