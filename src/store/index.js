import Vue from 'vue';
import Vuex from 'vuex';
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = true

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    tasks: [
      // { id: 1, title: 'Wake up', done: false, dueDate: '2023-01-20' },
      // { id: 2, title: 'Brush teeth', done: false, dueDate: '2023-10-26' },
      // { id: 3, title: 'Eat breakfast', done: false, dueDate: null },
    ],
    snackbar: {
      show: false,
      text: ''
    },
    sorting: false,
  },


  mutations: {
    setSearch(state, search) {
      state.search = search
    },
    addTask(state, newTask) {
      if (newTask) {
        state.tasks.push(newTask)
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
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    },
    toggleSorting(state) {
      state.sorting = !state.sorting
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    }
  },


  actions: {
    addTask({ commit }, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      // db.collection('tasks').add(newTask)
      commit('addTask', newTask)
      commit('showSnackbar', 'Task added!')
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      // db.collection('tasks').doc({ id: id }).update({
      //   done: !task.done
      // })
      //   .then(() => {
      //     commit('doneTask', id)
      //     commit('showSnackbar', 'Task done')
      //   })
      //   .error(err => commit('showSnackbar', JSON.stringify(err)))

      // db.collection('tasks').doc({ id: id }).update({
      //   done: !task.done
      // })
      commit('doneTask', id)
      commit('showSnackbar', 'Task done')
    },
    deleteTask({ commit }, id) {
      // db.collection('tasks').doc({ id: id }).delete()
      commit('deleteTask', id)
      commit('showSnackbar', 'Task deleted')
    },
    updateTaskTitle({ commit }, payload) {
      // db.collection('tasks').doc({ id: payload.id }).update({
      //   title: payload.title
      // })
      commit('updateTaskTitle', payload)
      commit('showSnackbar', 'Task updated')
    },
    updateTaskDueDate({ commit }, payload) {
      // db.collection('tasks').doc({ id: payload.id }).update({
      //   dueDate: payload.dueDate
      // })
      commit('updateTaskDueDate', payload)
      commit('showSnackbar', 'Due Date updated')
    },
    setTask({ commit }, task) {
      // db.collection('tasks').set(task)
      commit('setTask', tasks)
    },
    getTasks({ commit }) {
      // db.collection('tasks').get()
      // .then(tasks => {
      //   commit('setTasks', tasks)
      // })
      commit('setTasks', tasks)
    }
  },


  getters: {
    tasksFiltered: state => {
      if (state.search) {
        return state.tasks.filter(task => task.title.toLowerCase().includes(state.search.toLowerCase()))
      }
      return state.tasks
    }
  },


  modules: {
  }
})
