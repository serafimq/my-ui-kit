<script setup>
import {ref} from 'vue';

const props = defineProps({
    openSidebar: {
        type: Boolean,
        required: true,
    }
})

const links = ref([
    {name: 'Typography', href: '/typography'},
    {name: 'Button', href: '/button'},
    {name: 'Checkbox', href: '/checkbox'},
    {name: 'RadioButton', href: '/radioButton'},
    {name: 'Progress', href: '/progress'},
])
</script>

<template>
    <div :class="['sidebar', {'sidebar--isopen': openSidebar}]">
        <router-link
            v-for="link in links"
            :key="link.name"
            class="sidebar__link"
            :to="link.href">{{ link.name }}
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.sidebar {
    left: 0;
    top: 62px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    width: 250px;
    padding: 20px;
    transition: .2s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    transform: translateX(-250px);

    &--isopen {
        transform: translateX(0px);
    }

    &__link {
        display: block;
        border-radius: 12px;
        border: 2px solid #fff;
        transition: .2s;
        font-weight: bold;
        margin-bottom: 10px;
        &:hover {
            color: var(--primary);
        }
    }
}
</style>
