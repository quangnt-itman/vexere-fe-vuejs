<template>
  <div class="auth-page">
    <h1>AUTH PAGE</h1>
    <button
      class="btn btn-success my-2 my-sm-0 mx-sm-1"
      type="submit"
      data-toggle="modal"
      data-target="#m-login"
      ref="mlogin"
      id="mlogin"
      @click="handleClick($refs.mlogin)"
    >
      Log in
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$refs["mlogin"]
    // console.log(this.$refs);
    this.$refs.mlogin.click();
  },
  methods: {
    handleClick(ele) {
      console.log("handleClick: ", ele);
    },
  },
};
</script>

<style>
</style>
