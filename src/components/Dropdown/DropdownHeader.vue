<template>
    <li>
        <component :is="tag" :class="dropdownHeaderClass">
            <slot/>
        </component>
    </li>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    tag: {
        type: String,
        default: 'h6',
    },
    class: {
        type: [String, Array, Object]
    }
});

const dropdownHeaderClass = computed(() => {
    return [
        'dropdown-header'
    ]
})
</script>

<style lang="scss">
.dropdown-header {
    font-size: .75rem;
    font-weight: 300;
}
</style>
