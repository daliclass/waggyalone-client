export default function ({ store, redirect }) {
  if (!store.state.authorization.loggedIn) {
    return redirect('/')
  }
}
