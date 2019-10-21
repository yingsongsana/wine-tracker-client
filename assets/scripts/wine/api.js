'use strict'

const config = require('../config')
const store = require('../store')

const newWine = function (formData) {
  console.log(store.user.token)
  console.log('formData is', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/wines',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  newWine
}
