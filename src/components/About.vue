<template>
  <div class="about">
      <h1>Hello {{my_name}}, This is about page</h1>
      <p>XXXXXXXXXXXXXXXXXXXXXXXXXX</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      my_name: this.$route.params.name
    }
  }
}
</script>
