<template>
  <div class="border">
    <p>childCom3: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  props: {
    coo: String,
    title: String,
    doo: String
  },
  
  inheritAttrs: false,
  
  created() {
    console.log(this.$attrs); //{}
  }
};
</script>