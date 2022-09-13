<script setup>
import {ref, computed} from 'vue'
import useVuelidate from '@vuelidate/core'
import {helpers, minLength, email, maxLength, numeric, sameAs} from '@vuelidate/validators'

import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели не верный email', email)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(passwordField.value))
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(2)),
    numeric: helpers.withMessage(`Вы можете ввести только цифры`, numeric),
  },
  frontendField: {
    frontendField: helpers.withMessage(`Строка должна содержать слово frontend`, mustBeFrontend)
  }
}))

const v = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = () => {
  v.value.$touch()
  if (v.value.$error) return;
  console.log('submit form data');
}
</script>

<template>
  <h1 class="heading-1">Inputs</h1>
  <h2 class="heading-2">Input</h2>
  <div class="line"></div>
  <form @submit.prevent>
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      :error="v.nameField.$errors"
      v-model:value="v.nameField.$model"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      :error="v.emailField.$errors"
      v-model:value="v.emailField.$model"
    />
    <Input
      label="Your lucky number"
      name="lucky"
      placeholder="Input your lucky number"
      :error="v.luckyField.$errors"
      v-model:value="v.luckyField.$model"
    />

    <Input
      label="Your password"
      name="password"
      type="password"
      placeholder="Please input your password"
      v-model:value="passwordField"
    />
    <Input
      label="Confirm your password"
      name="confirm_password"
      type="password"
      placeholder="Input your password again"
      :error="v.confirmPasswordField.$errors"
      v-model:value="v.confirmPasswordField.$model"
    />

    <Input
      label="Frontend field"
      name="frontend"
      placeholder="Input frontend"
      :error="v.frontendField.$errors"
      v-model:value="v.frontendField.$model"
    />

    <Button label="submit" color="primary" @click="submitForm" />
  </form>
</template>
