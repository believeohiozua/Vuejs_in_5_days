import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Wake up', done: false },
      { id: 2, title: 'Brush teeth', done: false },
      { id: 3, title: 'Eat breakfast', done: false },
      { id: 4, title: 'Go to work', done: false },
      { id: 5, title: 'Come home', done: false },
      { id: 6, title: 'Eat dinner', done: false },
      { id: 7, title: 'Go to bed', done: false },
    ]
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
    }
  },
  actions: {
  },
  modules: {
  }
})
