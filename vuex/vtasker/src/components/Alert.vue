<template>
  <div class="alert alert-warning alert-dismissible fade show mt-4" role="alert">
    <strong>Error!</strong> {{ message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: ["message"],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>