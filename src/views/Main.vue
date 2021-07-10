<template>
  <div class="main">
    <div class="wrapper">
      <h1 v-if="name">Hello, {{ name }}!</h1>
      <h1 v-else>
        Hello, well-trusted man or woman, who's name we get from the server
      </h1>
    </div>
    <img src="../images/lady-out.svg" class="lady-out" alt="lady-out-logo" />
  </div>
</template>

<script>
export default {
  data: () => ({
    name: sessionStorage.getItem("name"),
  }),
};
</script>

<style lang="scss" scoped>
$dark: #181c43;

.main {
  position: relative;
  width: 100%;
  height: 100%;
}
.wrapper {
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
h1 {
  color: $dark;
  display: inline-block;
  width: 22rem;
  text-align: center;
  font-weight: 800;
}
.lady-out {
  height: 40rem;
  width: 100%;
  bottom: 0;
  position: absolute;
}
</style>
