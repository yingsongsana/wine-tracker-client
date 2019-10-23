'use strict'

const config = require('../config')
const store = require('../store')

const newWine = function (formData) {
  // console.log(store.user.token)
  // console.log('formData is', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/wines',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const indexWine = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/wines',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// get one wine by id
const getWine = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/wines/' + formData.wine.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateWine = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/wines/' + formData.wine.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteWine = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/wines/' + formData.wine.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newWine,
  indexWine,
  getWine,
  updateWine,
  deleteWine
}
