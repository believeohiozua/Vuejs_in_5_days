<template>
   <v-text-field class="pa-3 field-add-task" v-model="newTaskTitle" outlined label="Add Task" hide-details
      clearable @keyup.enter="addTask">
      >
      <template v-slot:append>
            <v-icon 
            @click="addTask"
            color="primary"
            :disabled="isTaskTitleInvalid"
            >
              mdi-plus
            </v-icon>
            </template>
            </v-text-field>
</template>

<script>
export default {
    data() {
    return {
      newTaskTitle: '',

    }
  },
  computed: {
    isTaskTitleInvalid() {
      return !this.newTaskTitle
    },
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    },
  },
}
</script>
<style lang="sass">
.field-add-task.v-input--is-focused
  .v-input__slot
    background: rgba(31,94,129, 0.5)

</style>
