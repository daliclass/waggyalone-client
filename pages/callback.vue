<template>
    <div>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    async mounted() {
      // Extract the access_token from the URL hash
      const hash = window.location.hash.substr(1); // Remove the leading '#'
      const params = new URLSearchParams(hash);
      const accessToken = params.get('access_token');

      if (accessToken !== null && !this.$auth.loggedIn) {
        this.$store.dispatch('authorization/convertTokenToUser', accessToken);
      } else if (this.$auth.loggedIn) {
        this.$router.push('/training/plan');
      } else {
        console.error('Access token not found in URL');
      }
    }
  }
  </script>