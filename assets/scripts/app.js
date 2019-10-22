'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#create-sneaker').hide()
  $('#update-sneaker').hide()
  $('#total-sneakers').hide()
  $('#delete-sneaker').hide()
  $('#sneaker-message').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-sneaker').on('submit', authEvents.onCreateSneaker)
  $('#update-sneaker').on('submit', authEvents.onUpdateSneaker)
  $('#total-sneakers').on('submit', authEvents.onGetSneaker)
  $('#delete-sneaker').on('submit', authEvents.onDeleteSneaker)
})
