'use strict'
const store = require('./../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('form').trigger('reset')
  $('#message').addClass('failure')
  $('#message').removeClass('success')
}

const onCreateSneakerSuccess = responseData => {
  successMessage('Nice!')
  $('#message').css('color', 'green')
}

const onCreateSneakerFailure = () => {
  failureMessage('Try again')
  $('#message').css('color', 'red')
}

const onSignUpSuccess = responseData => {
  successMessage('Signed up successfully!')
  $('#message').css('color', 'green')
  $('#sign-up').hide()
}

const onSignUpFailure = () => {
  failureMessage('Sign up failed')
  $('#message').css('color', 'red')
}

const onSignInSuccess = function (response) {
  successMessage('Signed in successfully')
  store.user = response.user
  $('#message').css('color', 'green')
  $('#sign-up, #sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-sneaker').show()
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
  $('#change-password').hide()
  $('#sign-out').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#message').css('color', 'red')
}

$('.form').on('click', function () {
  $(this).addClass('active')
})

$('.submit').on('click', function () {
  $(this).parent().parent().hide(300)
  $('.ok_message').addClass('active')
})

$('.ok_message').on('click', function () {
  $(this).removeClass('active')
  $('.form').removeClass('active').show()
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
  onCreateSneakerFailure
}
