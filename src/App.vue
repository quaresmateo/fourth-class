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
        <form class="field is-grouped">
          <div class="field has-addons" style="margin-right: 10px">
            <p class="control">
              <button class="button is-primary">
                <span>All</span>
              </button>
            </p>

            <p class="control">
              <button class="button">
                <span>Active</span>
              </button>
            </p>

            <p class="control">
              <button class="button">
                <span>Done</span>
              </button>
            </p>
          </div>

          <p class="control is-expanded">
            <input class="input" type="text" placeholder="ToDo title">
          </p>

          <p class="control">
            <button type="submit" class="button is-info">
              Add
            </button>
          </p>
        </form>

        <article class="media has-background-light" style="padding: 15px">
          <div class="media-left">
            <label class="checkbox">
              <input type="checkbox">
            </label>
          </div>

          <div class="media-content">
            <div class="content">
              <p>
                <strong>#1</strong>
                deletus at autem
              </p>
            </div>
          </div>

          <div class="media-right">
            <button class="delete"></button>
          </div>
        </article>
      </div>
    </section>

    <notifications group="all" />
  </div>
</template>

<script>
export default {
  name: 'App',

  mounted () {
    this.$notify({
      group: 'all',
      type: 'info',
      title: 'Hello there!',
      text: 'Welcome to our application!'
    })
  }
}
</script>

<style>
</style>
