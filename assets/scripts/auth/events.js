'use scrict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateSneaker = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createSneaker(formData)
    .then(ui.onCreateSneakerSuccess)
    .catch(ui.onCreateSneakerFailure)
}

const onUpdateSneaker = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateSneaker(formData)
    .then(ui.onUpdateSneakerSucccess)
    .catch(ui.onUpdateSneakerFailure)
}

const onGetSneaker = function (event) {
  event.preventDefault()
  api.getSneaker()
    .then(ui.onGetSneakerSuccess)
    .catch(ui.onGetSneakerFailure)
}

const onDeleteSneaker = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteSneaker(formData)
    .then(ui.onDeleteSneakerSuccess)
    .catch(ui.onDeleteSneakerFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateSneaker,
  onUpdateSneaker,
  onGetSneaker,
  onDeleteSneaker
}
