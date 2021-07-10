<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <div class="form-container">
      <SignUpForm />
      <div class="footer-wrapper">
        <h2>Already have an account?</h2>
        <router-link to="/sign-in"><span>Sign in</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpForm from "../components/SignUpForm.vue";

export default {
  components: {
    SignUpForm,
  },
};
</script>

<style lang="scss" scoped>
$dark: #181c43;
.footer-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
}

.sign-up {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
}

.form-container {
  width: 30rem;
  height: 45rem;
  background-color: #fff;
  border-radius: 2rem;
  margin: 3rem;
  span {
    font-size: 1.5rem;
    color: #000;
  }
}
</style>
