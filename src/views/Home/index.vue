<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld,
  },
  data(){
    return {
      a:[1,2,3,4]
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.$delete(this.a,0);
      console.log(this.a);
    }
  }
};
</script>
