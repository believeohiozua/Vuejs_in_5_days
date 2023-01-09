<template>

  <div class="home">
   <field-add-task/>
  <list-tasks
    v-if="$store.state.tasks.length"
  />
   <no-tasks
    v-else
  />
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    'field-add-task': () => import('@/components/Todo/FieldAddTask.vue'),
    'list-tasks': () => import('@/components/Todo/ListTasks.vue'),
    'no-tasks': () => import('@/components/Todo/NoTasks.vue'),
  },


}
</script>
