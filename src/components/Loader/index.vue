<template>
  <div class="loader">
    <div class="loader__overlay"></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

.loader {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
}

.loader ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}
.loader ul li {
  list-style: none;
  width: 25px;
  height: 25px;
  animation: animate 5s infinite linear;
}
.loader ul li:nth-child(2n + 1) {
  float: left;
}
.loader ul li:nth-child(2n) {
  float: right;
}
.loader ul li:nth-child(1),
.loader ul li:nth-child(4) {
  background: #3f51b5;
}
.loader ul li:nth-child(2),
.loader ul li:nth-child(3) {
  background: #00bcd4;
}
.loader ul li:nth-child(1),
.loader ul li:nth-child(2) {
  margin-bottom: 10px;
}

@keyframes animate {
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }
  20% {
    transform: perspective(1000px) rotateX(180deg);
  }
  40% {
    transform: perspective(1000px) rotateX(360deg);
  }
  60% {
    transform: perspective(1000px) rotateY(0deg);
  }
  80% {
    transform: perspective(1000px) rotateY(180deg);
  }
  90% {
    transform: perspective(1000px) rotateY(360deg);
  }
  100% {
    transform: perspective(1000px) rotateY(540deg);
  }
}

.loader ul li:nth-child(1) {
  animation-delay: 0.2s;
}
.loader ul li:nth-child(2) {
  animation-delay: 0.4s;
}
.loader ul li:nth-child(3) {
  animation-delay: 0.6s;
}
.loader ul li:nth-child(4) {
  animation-delay: 0.8s;
}

.loader__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
}
</style>
