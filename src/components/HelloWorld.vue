<template>
  <div class="hello bg-red-700">
    <h1>{{ msg }}</h1>

    <h3>Installed CLI Plugins</h3>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
