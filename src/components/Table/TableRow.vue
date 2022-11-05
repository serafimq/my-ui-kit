<script setup>
const props = defineProps({
  columnTemplate: {
    type: String,
    required: false,
  },
  bgRow: {
    type: String,
    required: false,
  },
})

</script>

<template>
  <div
      class="table__row"
      :style="{
        'grid-template-columns': columnTemplate,
        'background-color': bgRow,
  }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.table {
  &__row {
    border-bottom: 2px solid #EEEFF4;
    position: relative;
    display: grid;
    padding: 0 16px;
    column-gap: 10px;
    @media screen and (max-width: 767px) {
      display: block;
    }
    &:last-child {
      border-bottom: none;
    }
    &--items-center {
      justify-items: center;
    }
  }
}
</style>