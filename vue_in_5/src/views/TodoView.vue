<template>

  <div class="home">
    <v-text-field class="pa-3" v-model="newTaskTitle" outlined label="Append" append-icon="mdi-plus" hide-details
      clearable @click:append="addTask" @keyup.enter="addTask">
      ></v-text-field>
    <v-list flat class="pt-0" v-if="$store.state.tasks.length">


      <div v-for="task in $store.state.tasks" :key="task.id" :class="{ 'blue lighten-5': task.done }">
        <v-list-item @click="$store.commit('doneTask', task.id)">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">{{
                task.title
              }}</v-list-item-title>
            </v-list-item-content>
            <template>
              <v-list-item-action>
                <v-btn icon @click.stop="$store.commit('deleteTask', task.id)">
                  <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </template>

        </v-list-item>
        <v-divider></v-divider>
      </div>


    </v-list>
    <div v-else class="no__tasks">
      <v-icon size="100" color="primary lighten-">mdi-check</v-icon>
      <p class="text-h5 px-4 primary--text">
        No Task
      </p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data() {
    return {
      newTaskTitle: '',

    }
  },
  methods: {
    addTask() {
      if (this.newTaskTitle.trim()) {
        this.$store.commit('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      }
    },
  
   
  }


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
