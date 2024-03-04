const app = Vue.createApp({
  data() {
    return {
      message: UPGRADES.tree1.11.desc
    }
  }
})

app.mount('#app')
