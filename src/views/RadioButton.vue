<script setup>
import {ref} from 'vue'
import RadioButton from '@/components/RadioButton.vue'

const footballClubs = ref([
  {name: 'CSKA Moscow', id: 'f1'},
  {name: 'Spartak Moscow', id: 'f2'},
  {name: 'Real Madrid', id: 'f3'},
  {name: 'Milan', id: 'f4'},
])

const selectedClub = ref('')
const disabledRadio = ref(true)
const disabledRadioChecked = ref('RadioButton Disabled')
</script>

<template>
  <h1 class="heading-1">Radio Button</h1>

  <h2 class="heading-2">Basic</h2>
  <div class="line line--block">
    <p>Selected club: {{selectedClub}}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <radio-button
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedClub"
      />
    </div>
  </div>

  <h2 class="heading-2">Disabled</h2>
  <div class="line">
      <radio-button
        value="RadioButton Disabled"
        label="RadioButton Disabled"
        id="RadioButtonDisabled"
        name="RadioButtonDisabled"
        :disabled="disabledRadio"
        v-model:checkedValue="disabledRadioChecked"
      />
  </div>
</template>
