const app = Vue.createApp({
  //data, functons
  data() {
    return {
      showBooks: true,
      title: "The Final return",
      author: "Brandon Stepson",
      age: 23,
    };
  },

  methods: {
    toggleShowBook() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
