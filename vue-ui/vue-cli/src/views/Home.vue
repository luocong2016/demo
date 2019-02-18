<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Layout1></Layout1>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Layout1 from "@/components/Layout1.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Layout1
  }
};
</script>
