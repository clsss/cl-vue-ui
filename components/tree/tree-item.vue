<template>
  <div class="tree-item">
    <div class="f-content"
      :class="{bold: isFolder}"
      @click="toggle"
      @dblclick="makeFolder">
      <!-- 收起/展开 -->
      <span v-if="isFolder">
        {{ isOpen ? '▼' : '➤' }}
      </span>
      <!-- 标题 -->
      <span> {{ item.title }} </span>
      <!-- 新增/编辑 -->
      <strong class="fr"
        @click.stop="onAdd(item)"
        type="text">✚</strong>
    </div>
    <ul v-show="isOpen"
      v-if="isFolder">
      <cl-tree-item v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"></cl-tree-item>
      <!-- <li class="add"
        @click="$emit('add-item', item)">+</li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ClTreeItem',
    props: {
      item: Object
    },
    data() {
      return {
        isOpen: false,
      }
    },
    computed: {
      isFolder: function () {
        return this.item.children && this.item.children.length;
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.isOpen = !this.isOpen;
        }
      },
      makeFolder: function () {
        if (!this.isFolder) {
          this.$emit("make-folder", this.item);
          this.isOpen = true;
        }
      },
      onAdd(item) {
        console.log('新增')
      }
    }
  }
</script>

<style lang="scss">
  .tree-item {
    list-style-type: none;
    cursor: pointer;
    margin: 10px;
    padding: 0px 5px;
    ul {
      padding-left: 1em;
      line-height: 1.2em;
      list-style-type: none;
      transition: all 1s;
    }
  }
</style>
