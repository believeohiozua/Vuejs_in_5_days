<template>
  <v-dialog
   :value="true"
      persistent
      max-width="290"
    >
     
      <v-card>
        <v-card-title class="text-h5">
          Edit Task
        </v-card-title>
        <v-card-text>
          Edit the title of the task
          <v-text-field
            v-model="taskTitle"
            label="Title"
            @keyup.enter="saveTask"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="saveTask"
            :disabled="isTaskTitleInvalid"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
props:['task'],
data(){
    return{
       taskTitle: null
}
},
computed:{
    isTaskTitleInvalid(){
        return !this.taskTitle || this.taskTitle === this.task.title
    }
},
mounted(){
    this.taskTitle = this.task.title
},
methods:{
    saveTask(){
      if (!this.isTaskTitleInvalid){
      let payload = {
        id: this.task.id,
        title: this.taskTitle
      }
      this.$store.dispatch('updateTaskTitle', payload)
    this.$emit('close')
  }
    }
}
}
</script>

<style>

</style>