<template>
    <div class="form-collection">
        <div class="table-responsive" v-if="items.length">
            <table class="table table-sm table-borderless">
                <thead>
                <tr>
                    <th :class="field.thClass" :style="field.thStyle" v-for="field in fields">
                        {{ field.label }}
                    </th>
                    <th v-if="!disabled"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in items">
                    <td :class="field.tdClass" :style="field.tdStyle" v-for="field in fields" :key="field.key">
                        <FormInputAdapter
                            v-model="item[field.key]"
                            :field="field"
                            :size="size"
                            :disabled="disabled || field.disabled"

                            @update:modelValue="onInput"
                            @change="onChange"
                        />
                    </td>
                    <td class="text-end" v-if="!disabled">
                        <Button variant="outline-danger" :size="size" @click="onRemove(index)">
                            <IconClose/>
                        </Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="text-end" v-if="!disabled">
            <Button variant="outline-primary" :size="size" @click="onAdd">
                <IconPlus/>
                Add
            </Button>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import FormInputAdapter from "./FormInputAdapter.vue";
import Button from "../Button/Button.vue";
import IconClose from "../Icon/IconClose.vue";
import IconPlus from "../Icon/IconPlus.vue";

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
    modelValue: {
        type: [Array, Object],
        default: []
    },
    size: {
        type: String
    }
});

const items = computed(() => props.modelValue);

function onInput(value) {
    emit('update:modelValue', props.modelValue);
}

function onChange(value) {
    emit('change', props.modelValue);
}

function onAdd() {
    items.value.push({});
}

function onRemove(index) {
    items.value.splice(index, 1);
    emit('update:modelValue', props.modelValue);
    emit('change', props.modelValue);
}
</script>
