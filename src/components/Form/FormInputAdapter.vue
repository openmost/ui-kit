<template>

    <FormBadge v-if="field.type === 'badge'"
               :model-value="modelValue"
               :variants="field.variants"
               :disabled="isDisabled"
    />

    <FormBoolean v-else-if="field.type === 'boolean'"
                 :model-value="modelValue"
                 :format="field.format"
                 :disabled="isDisabled"
                 @update:modelValue="onInput"
                 @change="onChange"
    />

    <FormArray v-else-if="field.type === 'array'"
               :model-value="modelValue"
               :field="field.field"
               :disabled="isDisabled"
               :size="size"
               @update:modelValue="onInput"
               @change="onChange"
    />

    <FormObject v-else-if="field.type === 'object'"
                :model-value="modelValue"
                :fields="field.fields"
                :disabled="isDisabled"
                :size="size"
                @update:modelValue="onInput"
                @change="onChange"

    />

    <FormCollection v-else-if="field.type === 'collection'"
                    :model-value="modelValue"
                    :editable="field.editable"
                    :fields="field.fields"
                    :disabled="isDisabled"
                    :size="size"
                    @update:modelValue="onInput"
                    @change="onChange"

    />

    <FormSelect v-else-if="field.type === 'select'"
                :model-value="modelValue"
                :disabled="isDisabled"
                :size="size"
                :options="field.options"
                @update:modelValue="onInput"
                @change="onChange"
    />

    <FormInput v-else
               :model-value="modelValue"
               :type="field.type"
               :disabled="isDisabled"
               :size="size"
               @update:modelValue="onInput"
               @change="onChange"
    />

</template>

<script setup>
import {computed} from "vue";
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";
import FormArray from "./FormArray.vue";
import FormObject from "./FormObject.vue";
import FormCollection from "./FormCollection.vue";
import FormBoolean from "./FormBoolean.vue";
import FormBadge from "./FormBadge.vue";

const emit = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    field: {
        type: Object,
        required: true,
    },
    size: {
        type: String,
    },
    modelValue: {
        type: [String, Number, Boolean, Array, Object]
    }
})

const isDisabled = computed(() => props.disabled || props.field.disabled);

function onInput(value) {
    emit('update:modelValue', value);
}

function onChange(value) {
    emit('change', value);
}
</script>
