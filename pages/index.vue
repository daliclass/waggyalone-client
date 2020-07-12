<template>
  <section>
    <section class="hero is-fullheight is-primary">
      <nav class="navbar">
        <div class="navbar-brand">
          <h1 class="navbar-item has-text-weight-bold">
            WaggyAlone
          </h1>

          <div class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link v-scroll-to="{el: '#why-us'}" :to="{path: '/', hash: 'why-us'}" class="navbar-item">
              Why us
            </nuxt-link>
            <nuxt-link v-scroll-to="{el: '#how-it-works'}" :to="{path: '/', hash: 'how-it-works'}" class="navbar-item">
              how it works
            </nuxt-link>
            <nuxt-link v-scroll-to="{el: '#get-started'}" :to="{path: '/', hash: 'get-started'}" class="navbar-item">
              Get started
            </nuxt-link>
          </div>
        </div>
      </nav>
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div>
                <h2 class="title is-1">
                  Happy Hounds at Home
                </h2>
                </br>
                <p class="subtitle is-4">
                  We help owners train their dogs to be happy when left home alone. Puppy or grown-up this course is here to provide guidance, tips and support.
                </p>
                <a class="button is-facebook is-large" href="#get-started">
                  Start Training Today
                </a>
              </div>
            </div>
            <div class="column">
              <img src="../assets/dog-3.svg">
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section id="why-us" class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <img src="../assets/dog-1.svg">
            </div>
            <div class="column is-two-thirds">
              <h2 id="why-us" class="title is-2">
                Why train with us
              </h2>
              <p class="subtitle">
                Training your dog to be left alone can be stressful we change that by offering easy to follow training sessions. Traditional training advice such as <b>"let them bark it out"</b> is stressful for both you and your dog and can cause future behavioural problems.
              </p>
              <p class="subtitle">
                At <b>WaggyAlone</b> we take a different approach. <b>We provide tailored training sessions</b> for you and your dog to complete that teaches them that <b>being left alone is not scary</b>. We do this by breaking the problem down into small achievable milestones covering
                <ul>
                  <li>- Settling your dog where you intend to leave them</li>
                  <li>- Desensitising them to leaving and returning</li>
                  <li>- Building the time up in manageable increments</li>
                </ul>
              </p>
              <p class="subtitle">
                By breaking the problem down into manageable milestones it allows you to look back at how far you have come and celebrate, this reduces the feelings that your stagnating or progress is not happening fast enough.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section id="how-it-works" class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h2 class="title is-2">
                How the course works
              </h2>
              <p class="subtitle">
                We help owners train their dogs to be happy when left home alone. Puppy or grown-up this course is here to provide guidance, tips and support.
              </p>
              <p class="subtitle">
                <ul class="list">
                  <li class="list-item">
                    Sign in and tell us about your dog and the current stage you are at in your training
                  </li>
                  <li class="list-item">
                    We generate a training session for you containing multiple exercises to complete with your dog
                  </li>
                  <li class="list-item">
                    Once you complete the session we create another training session based on your performance
                  </li>
                </ul>
              </p>
            </div>
            <div class="column">
              <img src="../assets/dog-2.svg">
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section id="get-started" class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-1">
            Get Started
          </h2>
          <p class="subtitle">
            To get started just press the button below to sign up with Facebook and you can get started right away
          </p>
          <p class="subtitle">
            We know that different dogs take differing amounts of time to train. For a limited time we are offering free access to WaggyAlone while we continue to refine the course.
          </p>
          <button class="button is-facebook is-medium" @click="continueWithFacebook">
            Login with Facebook
          </button>
          <div v-if="userErrorAuthenticating" class="notification is-warning">
            Oops.... this is embarrassing their was a problem with your log in please try again
          </div>
          </br>
        </div>
      </div>
      </div>
    </section>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-1">
            Have more questions?
          </h2>
          <p class="subtitle">
            We would love to hear from you please reach out to us on Facebook Messenger at WaggyAlone. We are happy to answer any questions and offer any support we can.
          </p>
          <a href="https://www.facebook.com/WaggyAlone/" class="button is-facebook is-medium">
            Ask a question
          </a>
        </div>
      </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>WaggyAlone</strong> <nuxt-link to="/terms-and-conditions">
            Terms of service
          </nuxt-link>
          and <nuxt-link to="/privacy-policy">
            privacy policy
          </nuxt-link>. Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons" rel="nofollow">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  computed: {
    userErrorAuthenticating () {
      return this.$store.state.authorization.userErrorAuthenticating
    },
    loggedIn () {
      return this.$store.state.authorization.loggedIn
    }
  },
  updated () {
    if (this.loggedIn) {
      this.$router.push('/training/plan')
    }
  },
  methods: {
    continueWithFacebook () {
      this.$store.dispatch('authorization/continueWithFacebook')
    }
  },
  layout: 'no-nav'
}
</script>
