<template>
    <div id="custom-home">
      <HelloWorld />      
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  beforeCreate: function(index) {
    fetch(this.$store.state.apiUrl + 'api/user', {
      method: 'GET'
    })
    .then(res => res.text())
    .then(text => console.log(text))
  }
}
</script>
