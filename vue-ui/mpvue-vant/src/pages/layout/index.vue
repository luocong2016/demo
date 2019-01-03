<template>
  <div>
    <div class="show-grid">基础用法</div>
    <van-row class="show-row">
      <van-col span="8">
        <div class="dark">span: 8</div>
      </van-col>
      <van-col span="8">
        <div class="light">span: 8</div>
      </van-col>
      <van-col span="8">
        <div class="dark">span: 8</div>
      </van-col>
    </van-row>

    <van-row class="show-row">
      <van-col span="4">
        <div class="dark">span: 4</div>
      </van-col>
      <van-col span="10" offset="4">
        <div class="light">offset: 4, span: 10</div>
      </van-col>
    </van-row>

    <van-row class="show-row">
      <van-col offset="12" span="12">
        <div class="dark">offset: 12, span: 12</div>
      </van-col>
    </van-row>

    <div class="show-grid">设置列元素间距</div>
    <van-row class="show-row" gutter="20">
      <van-col span="8">
        <div class="dark">span: 8</div>
      </van-col>
      <van-col span="8">
        <div class="light">span: 8</div>
      </van-col>
      <van-col span="8">
        <div class="dark">span: 8</div>
      </van-col>
    </van-row>

    <van-badge-group :active="active" @change="onChange">
      <van-badge title="标签名称" />
      <van-badge title="标签名称" info="8" />
      <van-badge title="标签名称" info="99" />
      <van-badge title="标签名称" info="199" />
    </van-badge-group>

  </div>
</template>

<script>
export default {
  data() {
    return { active: 1 };
  },

  methods: {
    onChange(event) {
      console.log(event);
      wx.showToast({
        icon: 'none',
        title: `切换至第${event.detail}项`
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.dark,
.light {
  color: #fff;
  font-size: 36rpx;
  line-height: 40rx;
  text-align: center;
  margin-bottom: 10rpx;
  background-clip: content-box;
}

.dark {
  background-color: #39a9ed;
}

.light {
  background-color: #66c6f2;
}

.show-grid {
  color: #666;
}
</style>

