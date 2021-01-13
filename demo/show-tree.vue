<template>
  <div class="show-tree">
    <cl-tree-item :item="treeData"
      @make-folder="makeFolder"
      @add-item="addItem">
    </cl-tree-item>
  </div>
</template>

<script>
  export default {
    props: {
      menus: {
        type: Object
      }
    },
    data() {
      return {
        treeData: {
          title: "目录",
          children: [
            { title: "目录1" },
            { title: "目录2" },
            {
              title: "目录3",
              children: [
                { title: "目录3-1" },
                { title: "目录3-2" },
              ]
            },
          ]
        },
      }
    },
    watch: {
      menus: {
        handler: function (val, oldVal) {
          this.treeData = val
        },
        deep: true
      }
    },
    created() {
      this.treeData = this.menus;
    },
    methods: {
      makeFolder: function (item) {
        Vue.set(item, "children", []);
        this.addItem(item);
      },
      addItem: function (item) {
        item.children.push({
          title: "新建"
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .show-tree {
    border: 1px solid #abcdef;
    min-height: calc(100vh - 100px);
  }
</style>
