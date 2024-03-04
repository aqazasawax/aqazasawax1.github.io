const app = Vue.createApp({
  data() {
    return {
      message: 'test'
    }
  }
  computed: {
    firstUpgDesc() {
      if(player.class1 == 'warrior') {
        return UPGRADES.tree1.11.desc
      }
      else {
        return 'not a wa'
      }
    }
  }
  
})

app.mount('#app')
