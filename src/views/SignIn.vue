<template>
  <div class="sign-in">
    <h1>Sign In</h1>
    <div class="form-container">
      <SignInForm />
    </div>
  </div>
</template>
<script>
import SignInForm from "../components/SignInForm.vue";

export default {
  components: {
    SignInForm,
  },
};
</script>

<style lang="scss" scoped>
$dark: #181c43;

.sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
}

.form-container {
  width: 30rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 2rem;
  margin: 3rem;
}
</style>
