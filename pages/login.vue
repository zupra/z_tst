<template>
  <div>
    <h1>LOGIN PAGE works ...</h1>
    <br />
    <a href="#">
      <h2 @click="$router.push('/')">Если затупило КЛАЦ</h2>
    </a>
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
