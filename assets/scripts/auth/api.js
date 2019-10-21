'use strict'
const config = require('../config')
const store = require('../store')

const createSneaker = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sneakers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'sneaker': {
        'price': formData.sneaker.price,
        'name': formData.sneaker.name,
        'brand': formData.sneaker.brand,
        'user_id': store.user.id
      }
    }
  })
}

const updateSneaker = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sneakers/' + formData.sneaker.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'sneaker': {
        'price': formData.sneaker.price,
        'name': formData.sneaker.name,
        'brand': formData.sneaker.brand,
        'user_id': store.user.id
      }
    }
  })
}

const getSneaker = function () {
  return $.ajax({
    url: config.apiUrl + '/sneakers',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteSneaker = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sneakers/' + formData.sneaker.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createSneaker,
  updateSneaker,
  getSneaker,
  deleteSneaker
}
