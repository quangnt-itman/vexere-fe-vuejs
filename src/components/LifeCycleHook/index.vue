<template>
  <div class="life-cycle-hook">
    <h3>Life Cycle Hook</h3>
    <p>{{ name }}</p>
    <button
      type="button"
      class="btn btn-primary"
      @click="name = 'Nguyen Thien Quang'"
    >
      change name
    </button>
  </div>
</template>

<script>
export default {
  beforeUpdate() {
    console.log(this.$el.innerHTML);
  },
  updated() {
    this.$el.innerHTML = "fuck you";
    console.log(this.$el.innerHTML);
  },
  data() {
    return {
      name: "quangnt",
    };
  },
};
</script>

<style>
</style>
