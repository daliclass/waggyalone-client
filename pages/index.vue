<template>
  <section class="hero is-fullheight">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <p class="navbar-item">
          <img src="~/assets/paw.png" alt="Sa coach logo" height="50">
        </p>
      </div>
    </nav>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-12-mobile is-8-tablet is-10-desktop is-10-widescreen has-text-centered">
            <img
              src="~/assets/paw.png"
              height=100
              width=100
              alt="Larger sa coach logo"
              />
            <h2 class="title is-1 ">
              Welcome to SA coach
            </h2>
            <p class="subtitle">Helping dog owners help there best friend overcome separation anxiety one step at a time</p>
            <button class="button is-info">
              Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    checkLoginState () {
      console.log('Hello World')
    }
  }
}
</script>
