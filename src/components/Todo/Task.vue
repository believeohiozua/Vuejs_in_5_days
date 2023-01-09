<template>
   <div>
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
                <task-menu :task="task"/>
                <!-- <v-btn icon @click.stop="dialogs.delete=true">
                  <v-icon color="primary lighten-1">mdi-delete</v-icon>
                </v-btn> -->
              </v-list-item-action>
            </template>
          </template>

        </v-list-item>
        <v-divider></v-divider>
      </div> 
</template>

<script>
export default {
    props: {
        task: {
        type: Object,
        required: true,
        },
    },
    components:{
        'task-menu': () => import('@/components/Todo/TaskMenu.vue'),
    }

}
</script>