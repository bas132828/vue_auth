<template>
  <form class="sing-in-form" @submit.prevent="submitHandler">
    <div class="input-container">
      <label for="#name">Full name</label>
      <input
        v-model.trim="name"
        :class="{
          ['animate__animated animate__headShake invalid']:
            $v.name.$dirty && !$v.name.required,
        }"
        type="text"
        id="name"
      />
      <div class="error-text" v-if="$v.name.$dirty && !$v.name.required">
        Name required
      </div>
    </div>

    <div class="input-container">
      <label for="#email">E-mail</label>
      <input
        type="text"
        id="email"
        v-model.trim="email"
        :class="{
          ['animate__animated animate__headShake invalid']:
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email),
        }"
      />
      <div class="error-text" v-if="$v.email.$dirty && !$v.email.required">
        Email required
      </div>
      <div class="error-text" v-else-if="$v.email.$dirty && !$v.email.email">
        Enter valid email
      </div>
    </div>
    <div class="input-container">
      <label for="#password">Password</label>
      <input
        :type="visibility"
        v-model.trim="password"
        :class="{
          ['animate__animated animate__headShake invalid']:
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.hasSpecialChar) ||
            ($v.password.$dirty && !$v.password.hasUppercase),
        }"
        id="password"
      />
      <div
        class="error-text"
        v-if="$v.password.$dirty && !$v.password.required"
      >
        Password required
      </div>
      <div
        class="error-text"
        v-else-if="$v.password.$dirty && !$v.password.hasSpecialChar"
      >
        At least 1 special char required
      </div>
      <div
        class="error-text"
        v-else-if="$v.password.$dirty && !$v.password.hasUppercase"
      >
        At least 2 uppercase letters required
      </div>
      <div
        class="error-text"
        v-else-if="$v.password.$dirty && !$v.password.sameAs"
      >
        Passwords must match
      </div>
      <div
        class="error-text"
        v-else-if="$v.password.$dirty && !$v.password.minLength"
      >
        Wrong password (must be
        {{ $v.password.$params.minLength.min }} characters long, not
        {{ password.length }})
      </div>
      <img
        src="../images/eye-opened.svg"
        class="eye-opened"
        alt="eye-opened-logo"
        @click="(showPass = !showPass), showPassword()"
        v-show="!showPass"
      />
      <img
        src="../images/eye-closed.svg"
        alt="eye-closed-logo"
        @click="(showPass = !showPass), hidePassword()"
        v-show="showPass"
        class="eye-closed"
      />
      <img
        src="../images/question-mark.svg"
        alt="question-mark-logo"
        v-on:click="isInvisible = !isInvisible"
        class="question-mark"
      />
      <div class="dialog-window" :class="{ invisible: isInvisible }">
        <div class="dialog-window--message animate__animated animate__fadeIn">
          <div class="dialog-window--bottom"></div>
          Password must contain 8+ symbols, 1 special and 2 capital letters
        </div>
      </div>
    </div>
    <div class="input-container">
      <label for="#password-rep">Password</label>
      <input
        :type="visibility"
        v-model.trim="password_rep"
        :class="{
          ['animate__animated animate__headShake invalid']:
            ($v.password_rep.$dirty && !$v.password_rep.required) ||
            ($v.password_rep.$dirty && !$v.password_rep.minLength) ||
            ($v.password.$dirty && !$v.password.hasSpecialChar) ||
            ($v.password.$dirty && !$v.password.hasUppercase),
        }"
        id="password-rep"
      />
      <div
        class="error-text"
        v-if="$v.password_rep.$dirty && !$v.password_rep.required"
      >
        Password required
      </div>
      <div
        class="error-text"
        v-else-if="
          $v.password_rep.$dirty &&
            !$v.password_rep.minLength &&
            $v.password.sameAs
        "
      >
        Wrong password (must be
        {{ $v.password_rep.$params.minLength.min }} characters long, not
        {{ password_rep.length }})
      </div>
      <div
        class="error-text"
        v-else-if="$v.password_rep.$dirty && !$v.password_rep.hasSpecialChar"
      >
        At least 1 special char required
      </div>
      <div
        class="error-text"
        v-else-if="$v.password_rep.$dirty && !$v.password_rep.hasUppercase"
      >
        At least 2 uppercase letters required
      </div>
      <div
        class="error-text"
        v-else-if="$v.password.$dirty && !$v.password.sameAs"
      >
        Passwords must match
      </div>
      <img
        src="../images/eye-opened.svg"
        alt="eye-opened-logo"
        @click="(showPass = !showPass), showPassword()"
        v-show="!showPass"
        class="eye-opened"
      />
      <img
        src="../images/eye-closed.svg"
        alt="eye-closed-log"
        @click="(showPass = !showPass), hidePassword()"
        v-show="showPass"
        class="eye-closed"
      />
      <button type="submit" class="sing-up-form--btn">
        Sign up
      </button>
    </div>
  </form>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
import { hasSpecialChar, hasUppercase } from "@/functions/validators";

export default {
  name: "SignUpForm",
  data: () => ({
    name: "",
    email: "",
    password: "",
    password_rep: "",
    showPass: false,
    visibility: "password",
    isInvisible: true,
  }),
  validations: {
    email: { email, required },
    password: {
      required,
      minLength: minLength(8),
      sameAs: sameAs("password_rep"),
      hasSpecialChar,
      hasUppercase,
    },
    password_rep: {
      required,
      minLength: minLength(8),
      hasSpecialChar,
      hasUppercase,
    },
    name: { required },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log(formData);
      sessionStorage.setItem("name", formData.name);

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

.question-mark {
  position: absolute;
  top: 1.6rem;
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
  top: -9rem;
}
.dialog-window--bottom {
  background-color: #1e1a3e;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 20%;
  transform: rotate(45deg);
  position: absolute;
  top: 4rem;
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

.error-text {
  position: absolute;
  left: 4rem;
  top: 8rem;
  color: $alert;
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
    padding: 1.5rem;
    margin: 0 auto 1.5rem auto;
    font-size: 1.5rem;
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

.sing-up-form--btn {
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
    box-shadow: 1px 1px 2px rgb(253, 226, 226);
  }
  &:active {
    transform: scale(0.98);
  }
}
</style>
