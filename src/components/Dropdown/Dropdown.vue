<template>
    <div :class="dropdownClass">
        <slot name="trigger">
            <Button :variant="variant" :class="dropdownToggleClass" data-bs-toggle="dropdown" aria-expanded="false">

                <template #icon v-if="$slots['trigger-icon']">
                    <slot name="trigger-icon"/>
                </template>

                <slot name="trigger-text">
                    {{ text }}
                </slot>

            </Button>
        </slot>
        <ul :class="dropdownMenuClass">
            <slot/>
        </ul>
    </div>
</template>

<script setup>
import {Dropdown} from "bootstrap"; // Conserve this line !
import {computed} from "vue";
import Button from "../Button/Button.vue";

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    end: {
        type: Boolean,
        default: false,
    },
    menuClass: {
        type: [String, Array, Object],
    },
    size: {
        type: String,
    },
    text: {
        type: String,
        default: 'Dropdown Button'
    },
    variant: {
        type: String,
        default: 'secondary',
    }
});

const dropdownClass = computed(() => {
    return [
        'dropdown'
    ]
});

const dropdownMenuClass = computed(() => {
    return [
        'dropdown-menu',
        props.menuClass,
        props.end ? 'dropdown-menu-end' : null,
    ]
});

const dropdownToggleClass = computed(() => {
    return [
        'dropdown-toggle',
        props.size ? `btn-${props.size}` : null,
    ]
})
</script>

<style lang="scss">
.dropdown-menu {
    overflow: hidden;

  .trigger-text {
    flex-grow: 1;
  }
}
</style>
