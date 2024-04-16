<template>
    <div :class="badgeClass">
        {{ variant ? variant.label : modelValue }}
    </div>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean],
    },
    variants: {
        type: Array,
        default: []
    },
    disabled: Boolean,
});

const variant = computed(() => {
    if (props.variants.length) {
        const array = props.variants.filter(variant => variant.key === props.modelValue);

        if (array.length) {
            return array[0];
        }
    }

    return {label: props.modelValue, variant: 'secondary'};
})

const badgeClass = computed(() => {
    return [
        'badge',
        'form-badge',
        `text-bg-${variant.value.variant}`,
    ]
})
</script>

<style lang="scss">
.form-badge {
    margin-top: 6.5px;
}
</style>
