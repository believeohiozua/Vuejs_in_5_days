<template>
   <div>
        <v-list-item @click="$store.dispatch('doneTask', task.id)" :ripple="false" class="white">
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

              <v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
                 <v-icon small>mdi-calendar</v-icon>
                 {{ task.dueDate | niceDate }}
                </v-list-item-action-text>
              </v-list-item-action>

              <v-list-item-action>
                <task-menu :task="task"/>
                <v-list-item-action v-if="$store.state.sorting">
                  <v-btn icon color="primary" class="handle">
                    <v-icon color="primary">mdi-drag-horizontal-variant</v-icon>
                  </v-btn>
                </v-list-item-action>
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
import {format} from 'date-fns';

export default {
    props: ['task'],
    filters:{
        niceDate(value){
            return format(new Date(value), 'MMM d')
        }
    },
    components:{
        'task-menu': () => import('@/components/Todo/TaskMenu.vue'),
    }

}
</script>

<style lang="sass">
.sortable-ghost
  opacity: 0

.sortable-drag
  box-shadow:0 0 10px rgba(0,0,0,0.3)
</style>