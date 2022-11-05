<script setup>
const props = defineProps({
  head: {
    type: Array,
    required: false,
  },
  columnTemplate: {
    type: String,
    required: false,
  }
})

const emit = defineEmits(['sorting'])
const clickOnHead = (name) => {
  emit('sorting', name.toLowerCase())
}
</script>

<template>
  <div class="table__wrapper">
    <div class="table">
      <div class="table__head table-head"
           :style="{'grid-template-columns': columnTemplate}"
      >
        <div class="table-head__name"
             v-for="(element, i) of head"
             :key="i"
             @click="clickOnHead(element)"
        >
          {{ element }}
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  background-color: #fff;
  width: 100%;
  margin-bottom: 40px;
  margin-top: 15px;

  &__wrapper {
    display: flex;
    justify-content: center;
  }

  &__head {
    display: grid;
    padding: 5px 16px;
    column-gap: 10px;
    align-items: center;
    border-bottom: 2px solid #EEEFF4;
    background-color: #fff;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .table-head {
    &__name {
      display: flex;
      justify-content: flex-start;
      color: #999;
      cursor: pointer;
    }
  }
}
</style>