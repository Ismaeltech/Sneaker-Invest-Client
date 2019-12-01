'use strict'
const store = require('./../store')
const showSneakersTemplate = require('../templates/helpers/sneaker-listing.handlebars')

const successMessage = function (newText) {
  $('#message').html(newText)
  $('#message').show(500)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').fadeOut(850)
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('form').trigger('reset')
  $('#message').addClass('failure')
  $('#message').removeClass('success')
  $('#message').show(500)
  $('#message').fadeOut(2000)
}

// Create sneakers

const onCreateSneakerSuccess = responseData => {
  successMessage('Nice!')
  $('#message').css('color', 'green')
}

const onCreateSneakerFailure = () => {
  failureMessage('Try again')
  $('#message').css('color', 'red')
}

// Update sneakers

const onUpdateSneakerSucccess = () => {
  successMessage('Lit!')
  $('#message').css('color', 'green')
}

const onUpdateSneakerFailure = () => {
  failureMessage('Shoot!')
  $('#message').css('color', 'red')
}

// Get sneakers

const onGetSneakerSuccess = function (data) {
  successMessage('Your kicks!')
  const showSneakersHtml = showSneakersTemplate({ sneakers: data.sneakers })
  $('.content').html(showSneakersHtml)
  $('#sneaker-message').show(500)
  setTimeout(function () {
    $('#run-message').fadeOut().empty()
  }, 2000)
}

const onGetSneakerFailure = (data) => {
  $('#sneaker-message').html('No Sneakers here!')
}

// delete sneaker
const onDeleteSneakerSuccess = () => {
  successMessage('Deleted!')
  $('#message').css('color', 'green')
  $('#delete-sneaker').trigger('reset')
}

const onDeleteSneakerFailure = () => {
  failureMessage('Try again!')
  $('#message').css('color', 'red')
}

const onSignUpSuccess = responseData => {
  successMessage('Signed up successfully!')
  $('#message').css('color', 'green')
}

const onSignUpFailure = () => {
  failureMessage('Sign up failed')
  $('#message').css('color', 'red')
}

const onSignInSuccess = function (response) {
  successMessage('Signed in successfully')
  store.user = response.user
  $('#message').css('color', 'green')
  $('#sign-up, #container, #sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-sneaker').show()
  $('#update-sneaker').show()
  $('#total-sneakers').show()
  $('#delete-sneaker').show()
}

const onSignInFailure = function () {
  failureMessage('Sign in failed')
  $('#message').css('color', 'red')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('#message').css('color', 'green')
}

const onChangePasswordFailure = function () {
  failureMessage('change password failed')
  $('#message').css('color', 'red')
}

const onSignOutSuccess = responseData => {
  successMessage('Signed out successfully!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#container').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-sneaker').hide()
  $('#update-sneaker').hide()
  $('#total-sneakers').hide()
  $('#sneaker-message').hide()
  $('#delete-sneaker').hide()
  $('.content').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#message').css('color', 'red')
}

const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active')
})

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active')
})

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateSneakerSuccess,
  onCreateSneakerFailure,
  onUpdateSneakerSucccess,
  onUpdateSneakerFailure,
  onGetSneakerSuccess,
  onGetSneakerFailure,
  onDeleteSneakerSuccess,
  onDeleteSneakerFailure
}
