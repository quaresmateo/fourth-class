<template>
  <div id="app">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            LABES Training
          </h1>
          <h2 class="subtitle">
            ToDo App
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form class="field is-grouped" @submit.prevent="addTodo()">
          <div class="field has-addons" style="margin-right: 10px">
            <p class="control">
              <button
                class="button"
                :class="{ 'is-primary': filter === 'all' }"
                @click="setFilter('all')"
              >
                <span>All</span>
              </button>
            </p>

            <p class="control">
              <button
                class="button"
                :class="{ 'is-primary': filter === 'active' }"
                @click="setFilter('active')"
              >
                <span>Active</span>
              </button>
            </p>

            <p class="control">
              <button
                class="button"
                :class="{ 'is-primary': filter === 'done' }"
                @click="setFilter('done')"
              >
                <span>Done</span>
              </button>
            </p>
          </div>

          <p class="control is-expanded">
            <input class="input" type="text" placeholder="ToDo title" v-model="newTitle">
          </p>

          <p class="control">
            <button type="submit" class="button is-info">
              Add
            </button>
          </p>
        </form>

        <article
          v-for="(todo, key) in filteredTodos"
          :key="key"
          class="media has-background-light"
          style="padding: 15px"
        >
          <div class="media-left">
            <label class="checkbox">
              <input
                type="checkbox"
                v-model="todo.completed"
                @click="updateTodo(todo)"
              >
            </label>
          </div>

          <div class="media-content">
            <div class="content">
              <p>
                <strong>#{{ todo.id }}</strong>
                {{ todo.title }}
              </p>
            </div>
          </div>

          <div class="media-right">
            <button
              @click="deleteTodo(todo)"
              class="delete"
            ></button>
          </div>
        </article>
      </div>
    </section>

    <notifications group="all" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data: () => ({
    todos: [],
    filter: 'all',
    newTitle: ''
  }),

  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }

      return this.todos
        .filter(todo => {
          return this.filter === 'done' ? todo.completed : !todo.completed
        })
    }
  },

  created () {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.todos = res.data
      })
      .catch(err => {
        this.$notify({
          group: 'all',
          type: 'error',
          title: 'Request failed!',
          text: 'Failed to load os ToDos!'
        })
      })
  },

  mounted () {
    this.$notify({
      group: 'all',
      type: 'info',
      title: 'Hello there!',
      text: 'Welcome to our application!'
    })
  },

  methods: {
    setFilter (type) {
      this.filter = type
    },

    addTodo () {
      if (!this.newTitle) {
        return
      }

      const newTodo = {
        title: this.newTitle,
        completed: false
      }

      axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => {
          this.todos.unshift(res.data)
          this.newTitle = ''
        })
        .catch(err => {
          this.$notify({
            group: 'all',
            type: 'error',
            title: 'Request failed!',
            text: 'Failed to save a ToDo!'
          })
        })
    },

    updateTodo (todo) {
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        .then(res => {
          const index = this.todos.indexOf(todo)
          this.todos[index] = res.data
        })
        .catch(err => {
          this.$notify({
            group: 'all',
            type: 'error',
            title: 'Request failed!',
            text: 'Failed to update a ToDo!'
          })
        })
    },

    deleteTodo (todo) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
        .then(res => {
          this.todos = this.todos.filter(otherTodo => otherTodo.id !== todo.id)
        })
        .catch(err => {
          this.$notify({
            group: 'all',
            type: 'error',
            title: 'Request failed!',
            text: 'Failed to delete a ToDo!'
          })
        })
    }
  }
}
</script>

<style>
</style>
