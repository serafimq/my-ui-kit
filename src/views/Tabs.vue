<script setup>
import Tabs from '@/components/Tabs.vue';
import {ref} from 'vue';

const tabs = [
  {name: 'About', label: 'О проекте'},
  {name: 'Vue', label: 'Про Vue'},
  {name: 'React', label: 'Про React'},
]
const selectedTab = ref('Vue')

const changeTab = (tabName) => {
  selectedTab.value = tabName;
}
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs
    :names="tabs"
    :selectedTab="selectedTab"
    @changeTab="changeTab"
  >
    <div v-if="selectedTab === 'About'">About Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, natus?</div>
    <div v-if="selectedTab === 'Vue'">Vue Lorem ipsum dolor sit amet.</div>
    <div v-if="selectedTab === 'React'">React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos, expedita harum hic molestiae quia!</div>
  </Tabs>
</template>
