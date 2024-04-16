<template>
    <li>
        <span :class="dropdownItemTextClass">
            <slot/>
        </span>
    </li>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    class: {
        type: [String, Array, Object]
    }
});

const dropdownItemTextClass = computed(() => {
    return [
        'dropdown-item-text'
    ]
})
</script>

<style lang="scss">
.dropdown-item-text {
    font-weight: 300;
}
</style>
