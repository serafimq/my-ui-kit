<script setup>
const props = defineProps({
  maxWidth: {
    type: String,
    default: '300px'
  },
  percent: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <div class="progress__container" :style="{'max-width': maxWidth}">
    <span class="progress__percent" :style="[{'color': `var(--${color}`}]">{{percent}}%</span>
    <div class="progress" :style="[{'background': `var(--${color}-hover`}]">
      <div class="progress__bar" :style="[{'width': `${percent}%`}, {'background': `var(--${color}`}]">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .progress {
    height: 10px;
    border-radius: 4px;
    &__container {
      margin-bottom: 20px;
      overflow: hidden;
    }
    &__bar {
      height: 100%;
      border-radius: 4px;
      transition: .5s;
    }
    &__percent {
      display: block;
      text-align: center;
      font-weight: bold;
      font-size: 17px;
      margin-bottom: 10px;
    }
  }
</style>
