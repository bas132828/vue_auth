<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$background: #faf3f3;
$dark: #181c43;

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  align-content: center;
  font-family: "Inter", sans-serif;
  background: $background;
}

#app {
  width: 100vw;
  height: 100vh;
  background: $background;
}

@media only screen and (max-width: 270px) {
  html {
    font-size: 46%;
  }
}
@media only screen and (max-width: 300px) {
  html {
    font-size: 50%;
  }
}
@media only screen and (max-width: 320px) {
  html {
    font-size: 54%;
  }
}

@media only screen and (min-width: 370px) {
  html {
    font-size: 64%;
  }
}
@media only screen and (min-width: 400px) {
  html {
    font-size: 70%;
  }
}

@media only screen and (min-width: 500px) {
  html {
    font-size: 72%;
  }
}
@media only screen and (min-width: 600px) {
  html {
    font-size: 75%;
  }
}
</style>
