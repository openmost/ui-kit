<template>
    <div class="form-array">
        <div class="table-responsive mb-2" v-if="items.length">
            <table class="table table-sm table-borderless">
                <tr v-for="(item, index) in items">
                    <td>
                        <FormInputGroup>
                            <FormInputAdapter
                                :field="field"
                                v-model="items[index]"
                                :size="size"
                                :disabled="isDisabled"

                                @update:modelValue="onInput"
                                @change="onChange"
                            />

                            <template v-if="!isDisabled" #append>
                                <Button variant="outline-danger" :size="size" @click="onRemove(index)">
                                    <template #icon>
                                        <IconClose/>
                                    </template>
                                </Button>
                            </template>
                        </FormInputGroup>
                    </td>
                </tr>
            </table>
        </div>
        <div v-if="!isDisabled" class="text-end">
            <Button variant="outline-primary" :size="size" @click="onAdd">
                <template #icon>
                    <IconPlus/>
                </template>
                Add
            </Button>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";
import FormInputGroup from "./FormInputGroup.vue";
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
    field: {
        type: Object,
        required: true,
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
const isDisabled = computed(() => props.disabled || props.field.disabled);

function onInput(value) {
    emit('update:modelValue', props.modelValue);
}

function onChange(value) {
    emit('change', props.modelValue);
}

function onAdd() {
    items.value.push('');
}

function onRemove(index) {
    items.value.splice(index, 1);
    emit('update:modelValue', props.modelValue);
    emit('change', props.modelValue);
}
</script>

<style lang="scss">
.form-array .table-sm {
    tr {

        td {
            padding: 0;
        }

        &:first-child > td > * {
            padding-top: 0;
        }

        > td > * {
            padding-left: 0;
            padding-right: 0;
        }
    }
}
</style>
