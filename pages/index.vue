<template>
  <section>
    <section class="hero is-fullheight is-primary">
      <Navbar />
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <div>
                <h2 class="title is-1">
                  Train at a pace that suits you
                </h2>
                </br>
                <p class="subtitle is-4">
                  We help owners train their dogs to be happy when left home alone. Puppy or grown-up this course is here to provide guidance, tips and support.
                </p>
                <button v-if="!loggedIn" class="button is-facebook is-large" @click="continueWithFacebook">
                  Login with Facebook
                </button>
                <div v-if="userErrorAuthenticating" class="notification is-warning">
                  Oops.... this is embarrassing their was a problem with your log in please try again
                </div>
                </br>
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
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <img src="../assets/dog-1.svg">
            </div>
            <div class="column is-two-thirds">
              <h2 class="title is-2">
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
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h2 class="title is-2">
                How the course works
              </h2>
              <p class="subtitle">
                <ul class="list">
                  <li class="list-item">
                    <input type="checkbox" disabled> Sign in and tell us about your dog and the current stage you are at in your training
                  </li>
                  <li class="list-item">
                    <input type="checkbox" disabled> We generate a training session for you containing multiple exercises to complete with your dog
                  </li>
                  <li class="list-item">
                    <input type="checkbox" disabled> Once you complete the session we create another training session based on your performance
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
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h2 class="title is-1">
            Get Started
          </h2>
          <p class="subtitle">
            To get started just press the button below to sign up with Facebook and we will give you five free training sessions so you can find out if its a good fit.
          </p>
          <p class="subtitle">
            We know that different dogs take differing amounts of time to train. That is why we only offer one price of £25 for lifetime access to our training tool.
          </p>
          <button v-if="!loggedIn" class="button is-facebook is-large" @click="continueWithFacebook">
            Get started with Facebook
          </button>
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
        </div>
      </div>
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>WaggyAlone</strong> The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a> <a>terms of service </a> and <a>privacy policy</a>. Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons" rel="nofollow">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>.
        </p>
      </div>
    </footer>
  </section>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'

export default {
  components: { Navbar },
  computed: {
    userErrorAuthenticating () {
      return this.$store.state.authorization.userErrorAuthenticating
    },
    loggedIn () {
      return this.$store.state.authorization.loggedIn
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
