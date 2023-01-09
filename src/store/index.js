import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Wake up', done: false },
      { id: 2, title: 'Brush teeth', done: false },
      { id: 3, title: 'Eat breakfast', done: false },
      // { id: 4, title: 'Go to work', done: false },
      // { id: 5, title: 'Come home', done: false },
      // { id: 6, title: 'Eat dinner', done: false },
      // { id: 7, title: 'Go to bed', done: false },
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  getters: {
  },


  mutations: {
    addTask(state, newTaskTitle) {
      if (newTaskTitle) {
        state.tasks.push({
          id: Date.now(),
          title: newTaskTitle,
          done: false
        })
      }
    },
    doneTask(state, id) {
      state.tasks = state.tasks.filter(task => {
        if (task.id === id) {
          task.done = !task.done
        }
        return task
      })
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
    showSnackbar(state, text) {
      let timeOut = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeOut = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.text = text
      }, timeOut)
    },
    closeSnackbar(state) {
      state.snackbar.show = false
    },
    updateTaskTitle(state, payload) {
     let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    }
  },

  
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit('addTask', newTaskTitle)
      commit('showSnackbar', 'Task added')
    },
    deleteTask({ commit }, id) {
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted')
    },
    updateTaskTitle({ commit }, payload) {
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task updated')
    }
  },
  modules: {
  }
})
