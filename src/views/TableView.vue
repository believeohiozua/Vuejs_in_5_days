<template>
  <div class="">
    <my-table/>
  </div>
</template>

<script>
export default {
    name: 'Table',
  components: {
'my-table': () => import('@/components/table/Table.vue'),
  }
}
</script>

<style>

</style>