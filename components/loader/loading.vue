<template>
  <div class="cl-loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'ClLoading',
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {}
  };
</script>

<style lang='scss' scoped>
  .cl-loading {
    width: 25px;
    height: 25px;
    position: relative;
    span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #abcdef;
      position: absolute;
      animation: load 1.04s ease infinite;
    }
    span:nth-child(1) {
      left: 0;
      top: 50%;
      margin-top: -2px;
      animation-delay: 0.13s;
    }
    span:nth-child(2) {
      left: 3.5px;
      top: 3.5px;
      animation-delay: 0.26s;
    }
    span:nth-child(3) {
      left: 50%;
      top: 0;
      margin-left: -2px;
      animation-delay: 0.39s;
    }
    span:nth-child(4) {
      top: 3.5px;
      right: 3.5px;
      animation-delay: 0.52s;
    }
    span:nth-child(5) {
      right: 0;
      top: 50%;
      margin-top: -2px;
      animation-delay: 0.65s;
    }
    span:nth-child(6) {
      right: 3.5px;
      bottom: 3.5px;
      animation-delay: 0.78s;
    }
    span:nth-child(7) {
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      animation-delay: 0.91s;
    }
    span:nth-child(8) {
      bottom: 3.5px;
      left: 3.5px;
      animation-delay: 1.04s;
    }
  }
  @keyframes load {
    0% {
      opacity: 1;
       -webkit-transform: scale(1.4);
    }
    100% {
      opacity: 0.5;
      -webkit-transform: scale(.3);
    }
  }
</style>
