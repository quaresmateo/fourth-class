<template>
  <div id="app">
    <section class="section">
      <div class="container">
        <h1 class="title">Posts</h1>
        <h2 class="subtitle">
          Post
          <strong>sections</strong>, like the one you're currently reading
        </h2>

        <nav class="panel">
          <p class="panel-heading">Posts</p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input
                class="input is-small"
                type="text"
                placeholder="search title..."
                v-model="search"
              >
              <span class="icon is-small is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>

          <a v-for="post in filteredList" :key="post" class="panel-block">
            <social-sharing
              url="https://vuejs.org/"
              :title="post.title.toUpperCase()+'\n '+post.body"
              :description="post.body"
              quote="Vue is a progressive framework for building user interfaces."
              hashtags="vuejs,javascript,axios"
              twitter-user="vuejs"
              inline-template
            >
              <div>
                <network network="twitter">
                  <svg style="width:24px;height:24px;float:right;" viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      Elements
                      d="M14,4V8C7,9 4,14 3,19C5.5,15.5 9,13.9 14,13.9V18L21,11L14,4M16,8.83L18.17,11L16,13.17V11.9H14C11.93,11.9 10.07,12.28 8.34,12.85C9.74,11.46 11.54,10.37 14.28,10L16,9.73V8.83Z"
                    ></path>
                  </svg>
                </network>
              </div>
            </social-sharing>
            <h2>{{post.title}}</h2>
          </a>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data: () => ({
    posts: [],
    search: ""
  }),

  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.posts = res.data;
      })
      .catch(err => {
        this.$notify({
          group: "all",
          type: "error",
          title: "Request failed",
          text: err
        });
      });
  },

  mounted() {},

  computed: {
    filteredList() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {}
};
</script>

<style>
</style>
