<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input
      v-focus
      v-model="input"
    />
    <div>{{ input | capitalize }}</div>
    <hr />
    <Layout1></Layout1>
    <hr />
    <ProductList></ProductList>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Layout1 from "@/components/Layout1.vue";
import ProductList from "@/components/ProductList.vue"

var myMixin = {
  data: function() {
    return {
      message: "hello",
      foo: "abc"
    };
  }
};

export default {
  name: "App",
  mixins: [myMixin],
  components: {
    HelloWorld,
    Layout1,
    ProductList
  },
  data: function() {
    return {
      input: ""
    };
  },
  // 注册局部自定义指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  // 注册局部过滤器
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调
  beforeCreate: function() {
    console.log("beforeCreate: ", arguments);
  },
  created: function() {
    console.log("created", arguments);
  },
  beforeMount: function() {
    console.log("beforeMount", arguments);
  },
  mounted: function() {
    console.log("mounted", arguments);
  },
  beforeUpdate: function() {
    console.log("beforeUpdate", arguments);
  },
  updated: function() {
    console.log("updated", arguments);
  },
  activated: function() {
    console.log("activated", arguments);
  },
  deactivated: function() {
    console.log("deactivated", arguments);
  },
  beforeDestroy: function() {
    console.log("beforeDestroy", arguments);
  },
  destroyed: function() {
    console.log("destroyed", arguments);
  },
  errorCaptured: function(err, vm, info) {
    console.log("errorCaptured", err, vm, info);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
