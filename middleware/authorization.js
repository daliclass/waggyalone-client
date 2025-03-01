export default function ({ store, redirect, $auth }) {
  if (!$auth.loggedIn) {
    return redirect('/')
  } else if (!store.state.authorization.user) {
    store.dispatch('authorization/setupUser', $auth.user);
  }
}
