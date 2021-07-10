<template>
  <div class="home">
    <div class="home-container">
      <h1>Ready for a great <br />User experience?</h1>
      <h2>Bring your media to the next <br />level!</h2>
      <div class="home-container__wrapper-btn">
        <router-link to="/sign-up">
          <button class="btn-sign">Sing up</button>
        </router-link>
        <router-link to="/sign-up">
          <button class="btn-arrow">
            <img
              class="btn-arrow--arrow"
              src="../images/btn-arrow.svg"
              alt=""
            />
          </button>
        </router-link>
      </div>
    </div>
    <img
      src="../images/lady-enter.svg"
      class="lady-enter"
      alt="-enter-enter_vector"
    />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
$dark: #181c43;

.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.lady-enter {
  height: 40rem;
  bottom: 0;

  position: absolute;
}
button {
  color: $dark;
}

h1,
h2 {
  color: $dark;
  display: inline-block;
  width: 22rem;
  text-align: center;
}

h1 {
  font-weight: 800;
}
h2 {
  font-weight: 400;
}

.home-container {
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.home-container__wrapper-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 19rem;
}

.btn-sign {
  background-color: #fff;
  width: 12rem;
  height: 4.8rem;
  font-weight: 500;
  border: none;
  color: #000;
  border-radius: 3rem;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 5px rgb(122, 122, 122);
    transition-duration: 0.5s;
  }
}

.btn-arrow {
  background-color: $dark;
  width: 4.8rem;
  height: 4.8rem;
  font-weight: 500;
  border: none;
  color: #fff;
  border-radius: 50%;
  &:hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 5px rgb(122, 122, 122);
    transition-duration: 1s;
  }
}
.btn-arrow--arrow {
  width: 1.5rem;
}
</style>
