<template>
    <div :class="datatableClass">

        <div class="datatable-body">

            <Table :items="filteredItems" :fields="fields" :loading="loading" borderless selectable responsive>

                <template #loading>
                    <tr v-for="i in 100" :key="i">
                        <TdLoader v-for="field in fields" :field="field"/>
                    </tr>
                </template>

                <template v-for="(_, name) in $slots" v-slot:[name]="slotData" :key="name">

                    <slot :name="name" v-bind="slotData"/>

                </template>

            </Table>

        </div>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import Table from "../Table/Table.vue";
import TdLoader from "../Table/TdLoader.vue";

const emit = defineEmits(['change']);
const props = defineProps({
    items: {
        type: Array,
        default: []
    },
    fields: {
        type: Array,
        default: []
    },
    loading: {
        type: Boolean,
        default: false
    }
});

const filter = ref('');
const filteredItems = computed(() => props.items.filter(item => {
    return Object.values(item).toString().toLowerCase().includes(filter.value.toLowerCase());
}))

const datatableClass = computed(() => {
    return [
        'datatable',
        props.loading ? 'datatable-loading' : null,
    ]
})

function onChange(item) {
    emit('change', item);
}
</script>

<style lang="scss">
.datatable {
    border-radius: 1rem;
    background-color: var(--component-bg);

    .form-control,
    .form-select,
    .form-check-input {
        background-color: var(--component-bg);
    }

    .form-control:disabled,
    .form-select:disabled,
    .form-control:disabled {
        border-color: transparent;
    }

    .datatable-header {
        padding: 1rem;
    }

    .datatable-body {

        .table {
            margin-bottom: 0;

            td .form-check {
                margin-top: 3.5px;

                .form-check-label {
                    margin-top: 4px;
                }
            }

            .table-th-sticky-left {
                background-color: #232647;
                z-index: 5;
                position: sticky;
                left: 0;
            }

            .table-td-sticky-left {
                z-index: 5;
                background-color: var(--component-bg);
                position: sticky;
                left: 0;
            }

            .table-th-sticky-right {
                background-color: #232647;
                z-index: 5;
                position: sticky;
                right: 0;
            }

            .table-td-sticky-right {
                z-index: 5;
                background-color: var(--component-bg);
                position: sticky;
                right: 0;
            }
        }
    }
}
</style>
