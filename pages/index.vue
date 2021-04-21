<template>
  <div>
    <center>
      <template v-if="$auth.user">
        <button @click="$auth.logout()">logout()</button>
      </template>

      <h1>Проверка Keycloak</h1>

      <template v-if="$auth.user">
        <button v-for="(K, V, idx) in API" :key="idx" @click="GET(K)">
          GET {{ V }}
        </button>
      </template>
    </center>
    <pre>{{ DATA }}</pre>
  </div>
</template>

<script>
const API = {
  // https://smart-fe26.ru/smartSensor/rest/sensor/
  employee:
    'https://attestation.bpms.rusatom.dedyn.io/api/v1/employee?page=0&size=20&fieldName=id&order=ASC',
  attestation: 'https://attestation.bpms.rusatom.dedyn.io/api/v1/attestation',
  certified:
    'https://attestation.bpms.rusatom.dedyn.io/api/v1/employee/certified?page=0&size=10000&year=2021',
  commission:
    'https://attestation.bpms.rusatom.dedyn.io/api/v1/commission?attestationId=1',

  document:
    'https://attestation.bpms.rusatom.dedyn.io/api/v1/document?attestationId=1',
}

export default {
  data() {
    return {
      //
      API,
      DATA: null,
      Params: {},
    }
  },
  methods: {
    async GET(URL) {
      try {
        this.$nuxt.$loading.start()
        const data = await this.$axios.$get(`${URL}`, {
          params: { ...this.Params },
        })
        this.$nuxt.$loading.finish()
        this.$toast.success('success', {
          duration: 3000,
          keepOnHover: true,
        })
        this.DATA = data
      } catch (err) {
        this.$toast.error(`GET: ${err}`, { duration: 4000, keepOnHover: true })
      }
    },
  },
}
</script>

<style>
button + button {
  margin-left: 1rem;
}
</style>
