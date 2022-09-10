<script setup>
import Button from '@/components/Button.vue';

const eventForButton = () => {
    alert('You click danger button')
}
</script>

<template>
    <h1 class="heading-1">Button</h1>
    <h2 class="heading-2">Colors</h2>
    <div class="line">
        <Button label="Primary" color="primary"/>
        <Button label="Secondary" color="second"/>
        <Button label="Success" color="success"/>
        <Button label="info" color="info"/>
        <Button label="Warning" color="warning"/>
        <Button label="Danger" color="danger"/>
    </div>
    <h2 class="heading-2">Icons</h2>
    <div class="line">
        <Button icon="heart" color="primary" outlined/>
        <Button icon="hand" color="second"/>
        <Button icon="address-book" color="success" outlined/>
        <Button icon="credit-card" color="info"/>
        <Button icon="lemon" color="warning" outlined/>
        <Button icon="hourglass" color="danger"/>
    </div>
    <h2 class="heading-2">Rounded</h2>
    <div class="line">
        <Button label="Primary" color="primary" rounded/>
        <Button label="Secondary" color="second" rounded/>
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line">
        <Button label="Primary" color="primary" disabled/>
        <Button label="Secondary" color="second" disabled/>
    </div>
    <h2 class="heading-2">Outlined</h2>
    <div class="line">
        <Button label="Primary" color="primary" outlined/>
        <Button label="Secondary" color="second" outlined/>
    </div>
    <h2 class="heading-2">Size</h2>
    <div class="line">
        <Button label="Normal" color="primary"/>
        <Button label="Large" color="second" size="large"/>
    </div>
    <h2 class="heading-2">Event</h2>
    <div class="line">
        <Button label="Click me" color="danger" @click="eventForButton"/>
    </div>
</template>

<style lang="scss" scoped>
.line {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
</style>
