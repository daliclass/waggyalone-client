<template>
  <div>
    <script />
    <Navbar />
    <nuxt />
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
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar'
export default {
  components: { Navbar }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
