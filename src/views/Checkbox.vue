<script setup>
import {ref} from 'vue';
import Checkbox from '@/components/Checkbox/Checkbox.vue';
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const isCheckboxDisabled = ref(true);

const listOfHeroes = ref([
  {name: 'Spider man', id: 'h1'},
  {name: 'Batmen', id: 'h2'},
  {name: 'Tor', id: 'h3'},
  {name: 'loki', id: 'h4'},
])
const selectedHeroes = ref(['h1', 'h3']);
const switchProfessional = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>

  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>

  <h2 class="heading-2">Checkbox disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="isCheckboxDisabled"
      v-model:checked="checkboxDisabled"
    />
  </div>

  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line--block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <checkbox-group
      :options="listOfHeroes"
      v-model:value="selectedHeroes"
      name="heroes"
    />
  </div>

  <h2 class="heading-2">Switch</h2>
  <div class="line">
    <checkbox
      label="I'm a professional"
      id="switch"
      name="switch"
      value="I'm a professional "
      type="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>
