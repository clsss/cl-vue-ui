<template>
  <div class="show-dialog">
    <h2 class="title-h3">弹窗-dialog</h2>
    <!-- show -->
    <cl-dialog :show="showDialog"
      @callConfirm="confirm"
      @callCancel="cancel"
      :showCancel="true"
      width="400"
      :title="'弹窗'"
      :confirmText="`知道了`"
      :cancelText="`关闭`">
      <!-- 内容 -->
      <p class="mg-20 text-center">这是一个自定义弹窗，通过slot插槽展示内容</p>
    </cl-dialog>
    <!-- 控制弹窗 -->
    <cl-button plain
      @click="toggleDialog">自定义弹窗</cl-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showDialog: false
      }
    },
    methods: {
      toggleDialog() {
        this.showDialog = !this.showDialog
      },
      confirm(val) {
        this.showDialog = val
      },
      cancel(val) {
        this.showDialog = val
      },
    }
  }
</script>

<style lang="scss" scoped>
</style>
