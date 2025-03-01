<template>
    <div>
      <p>Thank you for logging out</p>
    </div>
  </template>
  
  <script>
  export default {
    async mounted() {
      this.$router.push('/');
    }
  }
  </script>