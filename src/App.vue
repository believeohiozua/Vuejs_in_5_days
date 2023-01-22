<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer" 
    :mobile-breakpoint="768"
    app
    >
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Todo App
          </v-list-item-title>
          <v-list-item-subtitle>
            vue in 5
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider> -->

      <v-img
      class="pa-4 pt-7"
      src="https://picsum.photos/1920/1080?random"
  height="170"
  gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
  
>
<v-avatar size="70" class="mb-2">
      <img
        src="https://res.cloudinary.com/dzql5s4vq/image/upload/v1557753054/BelieveOhiozua_sui51y.jpg"
        alt="Mr BIG"
      >
    </v-avatar>
    <div>
      <p class="white--text text-subtitle-1 font-weight-bold">Mr Big</p>
      <p class="white--text text-subtitle-2 pt-0 mt-0">@MrBig</p>
    </div>
  </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
    app 
    color="white" 
    dark 
    src="https://picsum.photos/1920/1080?random"
      
      prominent
      :height="$route.path==='/' ? 235: 170"
      >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"></v-img>
      </template>

      <v-container class="header__container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer" prominent></v-app-bar-nav-icon> 
          <v-spacer></v-spacer>
          <search/>
        </v-row>
        <v-row>
          <v-app-bar-title class="ml-4 text-h3">{{$store.state.appTitle}}</v-app-bar-title>
        </v-row>
        <v-row>
            <live-date-time/>
        </v-row>
        <v-row v-if="$route.path==='/'">
          <field-add-task/>
        </v-row>
      </v-container>



    

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <!-- <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->

    <v-main>
      <router-view></router-view>
      <snackbar/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
      { title: 'Table', icon: 'mdi-table', to: '/table' },
    ],
  }),
  mounted() {
    this.$store.dispatch('getTasks')
  },
  components: {
    'search': require('./components/Tools/Search.vue').default,
    'live-date-time': require('./components/Tools/LiveDateTime.vue').default,
    'field-add-task': require('./components/Todo/FieldAddTask.vue').default,
   'snackbar': require('./components/Shared/Snackbar.vue').default,
  },
}
</script>

<style lang="sass">
.header__container
  max-width: none !important
</style>