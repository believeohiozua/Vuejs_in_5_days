<template>

  <div>
    <div class="">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :footer-props="none"      
      :search="search"
      :custom-filter="filterOnlyCapsText"
      :loading="!loaded"
      :hide-default-footer="!loaded"
      :items-per-page="5"
      loading-text="Loading... Please wait"
      item-key="userId"
      class="elevation-1"
      
    >
      <template v-slot:top v-if="loaded">
        <v-text-field 
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
      <template>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
</div>

    <div class="text-right mr-15 mt-5">
<download-excel :data="desserts" name="user-data.xls">
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="primary"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Download Table
      <v-icon
        right
        dark
      >
        mdi-cloud-download
      </v-icon>
    </v-btn> 
</download-excel>
</div>
  </div>
  
</template>

<script>
    import Vue from "vue";
    import JsonExcel from "vue-json-excel";

    Vue.component("downloadExcel", JsonExcel);

  export default {
    
    data () {
      return {
        loaded: true,
        loader: null,
        loading3: false,
        search: '',
        calories: '',
        desserts: [
          {
            userId: 159,
            name: 'Frozen Yogurt Yogurt',
            email: '159@example.com',
          },
          {
            userId: 237,
            name: 'Ice cream sandwich sandwich',
            email: '237@example.com',
          },
          {
            userId: 262,
            name: 'Eclair Eclair',
            email: '262@example.com',
          },
          {
            userId: 305,
            name: 'Cupcake Cupcake',
            email: '305@example.com',
          },
          {
            userId: 356,
            name: 'Gingerbread Gingerbread',
            email: '356@example.com',
          },
          {
            userId: 375,
            name: 'Jelly bean bean',
            email: '375@example.com',
          },
          {
            userId: 392,
            name: 'Lollipop Lollipop',
            email: '392@example.com',
          },
          {
            userId: 408,
            name: 'Honeycomb Honeycomb',
            email: '408@example.com',
          },
          {
            userId: 452,
            name: 'Donut Donut',
            email: '452@example.com',
          },
          {
            userId: 518,
            name: 'KitKat KitKat',
            email: '518@example.com',
          },
        ],
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
    computed: {
      headers () {
        return [
          { text: 'user Id', value: 'userId' },
          { text: 'Names', value: 'name' },
          { text: 'Email', value: 'email' },
        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        console.log('value ', value)
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().indexOf(search) !== -1
        //   value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>

<style lang="sass">
.excel__img
  width: 100px
  height: 20px
</style>