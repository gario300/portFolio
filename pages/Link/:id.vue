<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'OpenLinking',
  mounted () {
    this.openLink()
  },
  methods: {
    openLink () {
      console.log(this.$route.params)
      window.open('almacenmeta://' + this.$route.params.id, '_self')
    }
  }
}
</script>

<style scoped>

</style>
