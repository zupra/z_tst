<template>
  <div>
    <h1>HELLO</h1>
  </div>
</template>

<script>
export default {
  async created() {
    try {
      const response = await this.$auth.loginWith('keycloak')
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style></style>
