<template>
    <div>
        <FormCheckbox switch class="form-boolean" :model-value="booleanValue" :disabled="disabled" @update:modelValue="onInput" @change="onChange">
            {{ booleanValue ? 'Yes' : 'No' }}
        </FormCheckbox>
    </div>
</template>

<script setup>
import {computed} from "vue";
import FormCheckbox from "./FormCheckbox.vue";

const emit = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
    modelValue: {
        type: [Boolean, Number, String],
    },
    format: {
        type: String,
        default: 'boolean'
    },
    disabled: {
        type: Boolean,
        defaut: false,
    },
});

const booleanValue = computed(() => +props.modelValue);

function getValueWithFormat(value) {

    if (props.format === 'number') {
        return value ? 1 : 0;
    }

    if (props.format === 'string') {
        return value ? '1' : '0'
    }

    return value;
}

function onInput(v){
    let value = getValueWithFormat(v)
    emit('update:modelValue', value);
}

function onChange(v) {
    let value = getValueWithFormat(v)
    emit('change', value);
}
</script>
