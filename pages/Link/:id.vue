<template>
  <div>
    <a
      :href="`almacenmeta://${this.$route.params.id}`"
    >
      Open nink
    </a>
  </div>
</template>

<script>
export default {
  name: 'OpenLinking'
}
</script>

<style scoped>

</style>
