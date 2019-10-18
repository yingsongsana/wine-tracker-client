'use strict'

const config = require('../config')
const store = require('../store')

const newWine = function (formData) {
  console.log(store)
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
