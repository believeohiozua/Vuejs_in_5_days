<template>
    <div>
    <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
              color="primary"
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="handleClick(index)"
              >
              <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
</v-menu>

<dialog-edit v-if="dialogs.edit" :task="task" @close="dialogs.edit=false"/>
<dialog-due-date v-if="dialogs.dueDate" :task="task" @close="dialogs.dueDate=false"/>
<dialog-delete v-if="dialogs.delete" :task="task" @close="dialogs.delete=false"/>
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
    data: () => ({
        dialogs:{
            edit: false,
            delete: false,
            dueDate: false
            },
      items: [
        { 
        title: 'Edit',
        icon:'mdi-pencil' ,
        click(){
            this.dialogs.edit=true
        }
    },
        { 
        title: 'Due date' ,
        icon:'mdi-calendar',
        click(){
            this.dialogs.dueDate=true
        }
    },
        { 
        title: 'Delete' ,
        icon:'mdi-delete',
        click(){
            this.dialogs.delete=true
        }
    },
        { 
        title: 'Sort' ,
        icon:'mdi-drag-horizontal-variant',
        click(){
            if (!this.$store.state.search){
              this.$store.commit('toggleSorting')
            }
            else{
              this.$store.commit('showSnackbar', 'Cannot sort while searching')
            }
        }
    },
      ],
    }),
    methods: {
        handleClick(index){
            this.items[index].click.call(this)
        }
    },
    components:{
        'dialog-delete': () => import('@/components/Todo/DialogsDelete.vue'),
        'dialog-edit': () => import('@/components/Todo/DialogsEdit.vue'),
        'dialog-due-date': () => import('@/components/Todo/DialogsDueDate.vue'),
    }
}
</script>
