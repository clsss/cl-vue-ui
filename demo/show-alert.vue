<template>
  <div class="show-alert">
    <h2 class="title-h3">提示-alert</h2>
    <!-- show -->
    <div class="row">
      <cl-alert title="成功提示的文案"
        type="success">
        文字说明文字说明文字说明文字说明
      </cl-alert>
      <cl-alert title="消息提示的文案"
        description="文字描述文字描述文字描述"
        type="info">
      </cl-alert>
      <cl-alert title="警告提示的文案"
        type="warning">
      </cl-alert>
      <cl-alert title="错误提示的文案"
        type="error">
      </cl-alert>
    </div>
    主题：light/dark
    <div class="row">
      <cl-alert title="成功提示的文案"
        type="success"
        effect="dark">
      </cl-alert>
      <cl-alert title="消息提示的文案"
        type="info"
        effect="dark">
      </cl-alert>
      <cl-alert title="警告提示的文案"
        type="warning"
        effect="dark">
      </cl-alert>
      <cl-alert title="错误提示的文案"
        type="error"
        effect="dark">
      </cl-alert>
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
  .show-alert {
    .row {
      padding: 10px 0;
      .cl-alert {
        margin-bottom: 5px;
      }
    }
    .cl-button {
      margin-right: 10px;
    }
  }
</style>
