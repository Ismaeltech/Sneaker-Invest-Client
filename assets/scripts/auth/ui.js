'use strict'
const store = require('./../store')

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
  $('#sneaker-message').html('')
  data.sneakers.forEach(sneaker => {
    const sneakerHTML = (`
 <p>ID: ${sneaker.id}</p>
 <p>Brand: ${sneaker.brand}</p>
 <p>Name: ${sneaker.name}</p>
 <p>Price: ${sneaker.price}</p>
  <br>
 `)
    $('#sneaker-message').append(sneakerHTML)
  })
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
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-sneaker').hide()
  $('#update-sneaker').hide()
  $('#total-sneakers').hide()
  $('#sneaker-message').hide()
  $('#delete-sneakers').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed')
  $('#message').css('color', 'red')
}

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
