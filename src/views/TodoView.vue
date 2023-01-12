<template>

  <div class="home">
  
  <list-tasks
    v-if="$store.state.tasks.length"
  />
   <no-tasks
    v-else
  />

  <button-done-sorting v-if="$store.state.sorting"/>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
    'list-tasks': () => import('@/components/Todo/ListTasks.vue'),
    'no-tasks': () => import('@/components/Todo/NoTasks.vue'),
    'button-done-sorting': () => import('@/components/Todo/ButtonDoneSorting.vue'),
  },


}
</script>
