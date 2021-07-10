<template>
  <form class="sing-in-form" @submit.prevent="submitHandler">
    <div class="input-container">
      <div
        class="error-box"
        v-if="
          ($v.email.$dirty && !$v.email.required) ||
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.hasSpecialChar) ||
            ($v.password.$dirty && !$v.password.hasUppercase)
        "
      >
        Wrong email or password
        <button v-on:click.prevent="resetForm()">&times;</button>
      </div>
      <label for="#email">E-mail</label>
      <input
        type="text"
        id="email"
        v-model.trim="email"
        :class="{
          invalid:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
    </div>
    <div class="input-container">
      <label for="#password">Password</label>
      <input
        :type="visibility"
        v-model.trim="password"
        :class="{
          invalid:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.hasSpecialChar) ||
            ($v.password.$dirty && !$v.password.hasUppercase),
        }"
        id="password"
      />
      <img
        src="../images/eye-opened.svg"
        @click="(showPass = !showPass), showPassword()"
        v-show="!showPass"
        class="eye-opened"
        alt="eye-opened_logo"
      />
      <img
        src="../images/eye-closed.svg"
        @click="(showPass = !showPass), hidePassword()"
        v-show="showPass"
        class="eye-closed"
        alt="eye-closed_logo"
      />
      <img
        src="../images/question-mark.svg"
        alt="question-mark-logo"
        v-on:click="isInvisible = !isInvisible"
        class="question-mark"
      />
      <div class="dialog-window" :class="{ invisible: isInvisible }">
        <div class="dialog-window--bottom"></div>
        <div class="dialog-window--message">
          Password must contain 8+ symbols, 1 special and 2 capital letters
        </div>
      </div>
      <button type="submit" class="sing-in-form--btn">
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { hasSpecialChar, hasUppercase } from "@/functions/validators";

export default {
  name: "SignInForm",
  data: () => ({
    email: "",
    password: "",
    showPass: false,
    visibility: "password",
    isInvisible: true,
  }),
  validations: {
    email: { email, required },
    password: {
      required,
      minLength: minLength(8),
      hasSpecialChar,
      hasUppercase,
    },
  },
  methods: {
    resetForm() {
      this.email = "";
      this.password = "";
      setTimeout(this.$v.$reset, 0);
    },

    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      if (sessionStorage.getItem("name")) sessionStorage.removeItem("name");
      this.$router.push("/main");
    },

    showPassword() {
      this.visibility = "text";
    },
    hidePassword() {
      this.visibility = "password";
    },
  },
};
</script>
<style lang="scss" scoped>
$dark: #181c43;
$alert-light: rgba(255, 102, 131, 0.3);
$alert: #ff6683;
.error-box {
  background-color: $alert;
  width: 80%;
  height: 5rem;
  border-radius: 3rem;
  position: absolute;
  bottom: -40rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  &:hover {
    background-color: lighten($alert, 10%);
  }
  button {
    color: #fff;
    background: transparent;
    border: none;
    margin-left: 1rem;
    font-size: 3rem;
    font-weight: 200;
    transform: translateY(0.1rem);
  }
}

.question-mark {
  position: absolute;
  top: 1.5rem;
  right: 4.8rem;
  opacity: 0.2;
  width: 1.3rem;
}
.invisible {
  display: none;
}
.dialog-window {
  position: absolute;
  width: 80%;
}
.dialog-window--message {
  background-color: #1e1a3e;
  height: 5rem;
  position: absolute;
  border-radius: 1rem;
  color: #fff;
  padding: 1rem;
  top: -12.5rem;
}
.dialog-window--bottom {
  background-color: #1e1a3e;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 20%;
  transform: rotate(45deg);
  position: absolute;
  top: -8.5rem;
  right: 1.7rem;
}
.eye-opened {
  position: absolute;
  right: 4rem;
  top: 4.8rem;
  opacity: 0.7;
  width: 1.7rem;
}
.eye-closed {
  position: absolute;
  right: 4rem;
  top: 4.7rem;
  opacity: 0.7;
  width: 1.7rem;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
}

.sing-in-form {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  input {
    background-color: #f3f3fa;
    border-radius: 2rem;
    border: none;
    width: 80%;
    height: 4rem;
    outline: none;
    padding: 1rem;
    margin: 0 auto 1.5rem auto;
  }
  label {
    margin: 1rem 1rem 0.5rem 4rem;
    font-size: 1.6rem;
    align-self: flex-start;
  }
}
.invalid {
  background-color: $alert-light !important;
}

.sing-in-form--btn {
  background-color: $dark;
  width: 80%;
  height: 4.8rem;
  font-weight: 500;
  border: none;
  color: #fff;
  border-radius: 3rem;
  margin: 1rem;
  font-size: 1.5rem;
  &:hover {
    transition-duration: 0.3s;
    box-shadow: 1px 1px 2px rgb(122, 122, 122);
  }
  &:active {
    transform: scale(0.98);
  }
}
</style>
