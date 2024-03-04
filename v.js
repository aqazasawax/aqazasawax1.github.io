const app = Vue.createApp({
  data() {
    return {
      message: 'test',
      message2: UPGRADES.tree1.11.desc
    }
  },
  computed: {
    
  }
})

app.mount('#app')
