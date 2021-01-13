<template>
  <div id="app">
    <header class="app-header">
      <strong>collin 自定义组件1</strong>
    </header>
    <div class="app-content">
      <div class="menu">
        <show-tree :menus="menus"></show-tree>
      </div>
      <div class="main">
        <div class="mb-10">
          <show-alert></show-alert>
        </div>
        <div class="mb-10">
          <show-button></show-button>
        </div>
        <div class="mb-10">
          <show-dialog></show-dialog>
        </div>
        <div class="mb-10">
          <show-loader></show-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ShowTree from './show-tree'
  import ShowAlert from './show-alert'
  import ShowButton from './show-button'
  import ShowDialog from './show-dialog'
  import ShowLoader from './show-loader'
  export default {
    name: 'app',
    components: {
      ShowTree,
      ShowAlert,
      ShowButton,
      ShowDialog,
      ShowLoader,
    },
    data() {
      return {
        menus: {
          title: '组件目录',
          children: [
            { title: '按钮', type: 'button' },
            { title: '弹窗', type: 'dialog' },
          ]
        }
      }
    },
  }
</script>

<style lang="scss">
  #app {
    .app-header {
      height: 60px;
      line-height: 60px;
      text-align: center;
      box-shadow:  5px 10px 50px #ddd;
    }
    .app-content {
      padding: 10px;
      display: flex;
      overflow-y: scroll;
      height: calc(100vh - 60px);
      // 滚动条
      &::-webkit-scrollbar {
        width: 6px;
        height: 1px;
      }
      // 滑块
      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.1);
      }
      // 轨道背景
      &::-webkit-scrollbar-track {
        border-radius: 6px;
        background: #eee;
      }
      .menu {
        flex: 0 0 260px;
        width: 260px;
      }
      .main {
        padding-left: 30px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
