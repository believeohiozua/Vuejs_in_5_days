<template>
   <div class="no__tasks">
      <v-icon size="100" color="primary lighten-">mdi-check</v-icon>
      <p class="text-h5 px-4 primary--text">
        No Task
      </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.no__tasks
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
