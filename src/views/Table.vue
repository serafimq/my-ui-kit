<script setup>
import BaseTable from '@/components/Table/BaseTable.vue';
import TableRow from '@/components/Table/TableRow.vue';
import TableColumn from '@/components/Table/TableColumn.vue';
import Button from '@/components/Button.vue';
import {ref, computed} from "vue";

const tableHeads = ['Id', 'Author', 'Title', 'Cover', ''];
const tableSizeColumns = '50px 1fr 2fr 150px 140px';

const books = ref([
  {
    id: 1,
    author: 'John Davidson',
    title: 'Name book #1',
    image: 'https://images-na.ssl-images-amazon.com/images/I/A1K8gGCO2yL._AC_UL254_SR254,254_.jpg',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Name book #2',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81ZkvDcuCzL._AC_UL381_SR381,381_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'John Rowling',
    title: 'Name book #3',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL381_SR381,381_.jpg',
    bg: '#FFA26B'
  },
]);

const sortField = ref('id');
const typeSort = ref('asc');

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1;
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    if (a[sortField.value] === b[sortField.value]) return 0;
  })
})

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <base-table
      :head="tableHeads"
      :columnTemplate="tableSizeColumns"
      @sorting="setSort"
  >
    <table-row
        v-for="book of booksSorting"
        :key="book.id"
        :columnTemplate="tableSizeColumns"
        :bgRow="book.bg"
    >
      <table-column :columnTitle="tableHeads[0]">{{ book.id }}</table-column>
      <table-column :columnTitle="tableHeads[1]">{{ book.author }}</table-column>
      <table-column :columnTitle="tableHeads[2]">{{ book.title }}</table-column>
      <table-column image :srcImage="book.image"/>
      <table-column>
        <Button level="Read Online"/>
      </table-column>
    </table-row>
  </base-table>
</template>