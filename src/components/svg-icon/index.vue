<template>
  <svg class="svg-icon" aria-hidden="true" :width="fontSize" :height="fontSize" :fill="color">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default{
  props: {
    iconClass: {
      type: String,
      required: true
    },
    fontSize: {
      default: 16
    },
    color: {
      type: String,
      default: "#666666"
    }
  },
  data(){
    return {}
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>