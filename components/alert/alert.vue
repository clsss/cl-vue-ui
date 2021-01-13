<template>
  <transition name="cl-alert-fade">
    <div class="cl-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert">
      <!-- <i class="cl-alert__icon"
        :class="[ iconClass, isBigIcon ]"
        v-if="showIcon"></i> -->
      <div class="cl-alert__content">
        <span class="cl-alert__title"
          :class="[ isBoldTitle ]"
          v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="cl-alert__description"
          v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="cl-alert__description"
          v-if="description && !$slots.default">{{ description }}</p>
        <i class="cl-alert__closebtn"
          :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }"
          v-show="closable"
          @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  // const TYPE_CLASSES_MAP = {
  //   success: 'el-icon-success',
  //   warning: 'el-icon-warning',
  //   error: 'el-icon-error'
  // };
  export default {
    name: 'ClAlert',
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean,
      effect: {
        type: String,
        default: 'light',
        validator: function (value) {
          return ['light', 'dark'].indexOf(value) !== -1;
        }
      }
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },
    computed: {
      typeClass() {
        return `cl-alert--${this.type}`;
      },
      // iconClass() {
      //   return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
      // },
      // isBigIcon() {
      //   return this.description || this.$slots.default ? 'is-big' : '';
      // },
      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>

<style lang="scss" scoped>
  // 颜色映射
  $colors: (
    info: $c-info,
    info-down: $c-info-dimness10,
    success: $c-success,
    success-down: $c-success-dimness10,
    warning: $c-warning,
    warning-down: $c-warning-dimness10,
    error: $c-error,
    error-down: $c-error-dimness10,
  );
  // 定义类型
  $types: ("info", "success", "warning", "error");

  @each $v in $types {
    .cl-alert--#{$v} {
      padding: 5px 10px;
      border-radius: 4px;
      background: map-get($colors, #{$v + "-down"});
      .cl-alert__title {
        font-size: 14px;
        color: map-get($colors, $v);
        display: inline-block;
      }
      .cl-alert__description {
        margin-left: 20px;
        display: inline-block;
        font-size: 12px;
        color: #99999f;
      }
    }
  }
</style>
