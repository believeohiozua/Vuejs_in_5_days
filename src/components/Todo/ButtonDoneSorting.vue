<template>
  <v-btn @click="$store.commit('toggleSorting')"
  class="button__done__sorting"
  color="primary"

  >
    Done Sorting 
    </v-btn>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.button__done__sorting
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)

</style>