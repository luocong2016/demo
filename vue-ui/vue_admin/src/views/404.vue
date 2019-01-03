<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404_images/404.png" alt="404">
        <img class="pic-404__child left" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="@/assets/404_images/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="@/assets/404_images/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">嗯？ 此路不通</div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，<br />请点击以下按钮返回主页或者发送错误报告</div>
        <a href="./" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  computed: {
    message() {
      return '网管说这个页面你不能进......';
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wscn-http404-container {
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
}
.wscn-http404 {
  position: relative;
  width: 1200px;
  padding: 0 50px;
  overflow: hidden;
  .pic-404 {
    position: relative;
    float: left;
    width: 600px;
    overflow: hidden;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        width: 80px;
        top: 17px;
        left: 220px;
      }
      &.mid {
        width: 46px;
        top: 10px;
        left: 420px;
      }
      &.right {
        width: 62px;
        top: 100px;
        left: 500px;
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    width: 300px;
    padding: 30px 0;
    overflow: hidden;
    &__oops {
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1482f0;
      margin-bottom: 20px;
    }
    &__headline {
      font-size: 20px;
      line-height: 24px;
      color: #222;
      font-weight: bold;
      margin-bottom: 10px;
    }
    &__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
    }
    &__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
    }
  }
}
</style>
