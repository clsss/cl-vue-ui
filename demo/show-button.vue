<template>
  <div class="show-button">
    <h2 class="title-h3">按钮-button</h2>
    <!-- show -->
    <div class="row">
      <cl-button type="dashed"
        @click="onClick">按钮</cl-button>
      <cl-button>按钮</cl-button>
      <cl-button type="success">按钮</cl-button>
      <cl-button type="info">按钮</cl-button>
      <cl-button type="warning">按钮</cl-button>
    </div>
    <div class="row">
      <cl-button plain
        type="dashed">按钮</cl-button>
      <cl-button plain
        type="primary">按钮</cl-button>
      <cl-button plain
        type="success">按钮</cl-button>
      <cl-button plain
        type="info">按钮</cl-button>
      <cl-button plain
        type="warning">按钮</cl-button>
    </div>
    <div class="row">
      <cl-button plain
        type="dashed"
        disabled>按钮</cl-button>
      <cl-button plain
        type="primary"
        disabled>按钮</cl-button>
      <cl-button plain
        type="success"
        disabled>按钮</cl-button>
      <cl-button plain
        type="info"
        disabled>按钮</cl-button>
      <cl-button plain
        type="warning"
        disabled>按钮</cl-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        console.log('onClick');
      },
    }
  }
</script>

<style lang="scss" scoped>
  .show-button {
    .row {
      padding: 10px 0;
    }
    .cl-button {
      margin-right: 10px;
    }
  }
</style>
