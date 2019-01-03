<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import * as test from '@/api/test';
import * as convert from '@/utils/convert';
import * as type from '@/utils/type';

export default {
  name: 'test',

  components: {
    HelloWorld
  },

  mounted() {
    console.log('This is a test.');

    // Success
    test
      .login({ user: 'lutz', password: '123456789' })
      .then(res => console.log(res));

    test.echars({ c: 'line-stack' }).then(res => console.log(res));

    // Fail
    // test
    //   .loginFail({ user: 'lutz', password: '123456789' })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err));

    // test.syllabusAppend({ name: 'lutz' }).then(res => console.log(res));

    console.log('This is a convert.');

    console.log('money-Infinity: ', convert.moneyFormat(Infinity));
    console.log('money-null: ', convert.moneyFormat(null));
    console.log('money-NaN: ', convert.moneyFormat(NaN));
    console.log('money-Object: ', convert.moneyFormat({}));
    console.time('a');
    console.log('money-String: ', convert.moneyFormat('1234567.1234'));
    console.timeEnd('a');
    console.time('b');
    console.log('money-Number: ', convert.moneyFormat(-123456.1234));
    console.timeEnd('b');
    console.log('money-Number: ', convert.moneyFormat(-123456));
    console.log('money-"": ', convert.moneyFormat(''));
    console.log('money-"0": ', convert.moneyFormat('0'));
    console.log('money-0: ', convert.moneyFormat(0));
    console.log('money--0: ', convert.moneyFormat(-0));

    console.log('Number', type.getType(12));
    console.log('Date', type.getType(new Date()));
    console.log('RegExp', type.getType(new RegExp()));
    console.log('RegExp', type.getType(Object.create(null)));
  }
};
</script>
