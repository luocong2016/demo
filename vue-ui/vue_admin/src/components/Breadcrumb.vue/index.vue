<template>
  <el-breadcrumb></el-breadcrumb>
</template>

<script>
// import pathToRegexp from 'path-to-regexp';

export default {
  data() {
    return {
      levelList: null
    };
  }
};
</script>

<style lang="sass" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
