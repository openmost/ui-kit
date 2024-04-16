<template>
    <div class="form-object">
        <div class="table-responsive">
            <table class="table table-sm table-borderless">
                <thead>
                <tr>
                    <th v-for="field in fields"
                        :key="field.key"
                        :class="field.thClass"
                        :style="field.thStyle"
                    >{{ field.label }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="modelValue">
                    <template v-for="field in fields" :key="field.key">
                        <td :class="field.tdClass" :style="field.tdStyle">
                            <FormInputAdapter
                                v-model="modelValue[field.key]"
                                :field="field"
                                :size="size"
                                :disabled="disabled || field.disabled"

                                @update:modelValue="onInput"
                                @change="onChange"
                            />
                        </td>
                    </template>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script setup>
import FormInputAdapter from "./FormInputAdapter.vue";

const emit = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    fields: {
        type: Array,
        default: []
    },
    modelValue: Object,
    size: String
});

function onInput(value) {
    emit('update:modelValue', props.modelValue);
}

function onChange(value) {
    emit('change', props.modelValue);
}
</script>
