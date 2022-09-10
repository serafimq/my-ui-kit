<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    color: {
        type: String,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        required: false,
    },
    rounded: {
        type: Boolean,
        required: false,
    },
    outlined: {
        type: Boolean,
        required: false,
    },
    icon: {
        type: String,
        required: false,
    },
    size: {
        type: String,
        default: 'normal',
    }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
    emit('click')
}
</script>

<template>
    <button
        :class="['btn', `btn--${color}`, {'btn--rounded': rounded}, {'btn--outlined': outlined}, {'btn--icon': icon}, {'btn--large': size === 'large'}]"
        :disabled="disabled"
        @click="clickOnButton"
    >
        <span v-if="icon">
            <font-awesome-icon :icon="`fa-regular fa-${icon}`"/>
        </span>
       <span v-else>{{ label }}</span>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 20px;
    height: 40px;
    color: #fff;
    border-radius: 7px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;
    &--primary {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        &:enabled:hover {
            background-color: var(--primary-hover);
        }
    }
    &--second {
        background-color: var(--second);
        border: 1px solid var(--second);
        &:enabled:hover {
            background-color: var(--second-hover);
        }
    }
    &--success {
        background-color: var(--success);
        border: 1px solid var(--success);
        &:enabled:hover {
            background-color: var(--success-hover);
        }
    }
    &--info {
        background-color: var(--info);
        border: 1px solid var(--info);
        &:enabled:hover {
            background-color: var(--info-hover);
        }
    }
    &--warning {
        background-color: var(--warning);
        border: 1px solid var(--warning);
        &:enabled:hover {
            background-color: var(--warning-hover);
        }
    }
    &:disabled {
        opacity: .6;
        cursor: default;
    }
    &--danger {
        background-color: var(--danger);
        border: 1px solid var(--danger);
        &:enabled:hover {
            background-color: var(--danger-hover);
        }
    }
    &--rounded {
        border-radius: 15px;
    }
    &--outlined {
        background-color: transparent;
        color: #000;
        &:hover {
            color: #fff;
        }
    }
    &--icon {
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    &--large {
        height: 48px;
        padding: 0 30px;
    }
}
</style>
