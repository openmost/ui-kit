<template>
    <div class="table-responsive">

        <table :class="tableClass">
            <caption v-if="caption">
                <slot name="table-caption">
                    {{ caption }}
                </slot>
            </caption>
            <Thead :class="theadClass" v-if="computedFields.length">
            <slot name="thead-top"/>
            <Tr scope="col" :class="theadTrClass">
                <Th
                    v-for="(field, index) in computedFields"
                    :key="field.key"
                    :aria-colindex="index + 1"
                    :sortable="field.sortable"
                    :class="field.class"
                    :variant="field.variant"
                    :thStyle="field.thStyle"
                    :thClass="field.thClass"
                    :headerAbbr="field.headerAbbr"
                    :headerTitle="field.headerTitle"
                    :colspan="field.colspan"
                    :rowspan="field.rowspan"
                >

                    <template v-if="field.key === 'selected' && selectable">
                        <FormCheckbox v-model="checkAll" id="select-all" name="select-all" @change="onToggleSelectAll"/>
                    </template>

                    <slot :name="`head(${field.key ?? field})`"
                          :field="field"
                          :index="index"
                          :value="field.label ?? field ">
                        {{ field.label ?? field }}
                    </slot>
                </Th>
            </Tr>
            </Thead>
            <slot name="empty"/>
            <slot name="empty-filtered"/>

            <Tbody v-if="loading && !items.length">
            <slot name="loading"/>
            </Tbody>

            <Tbody :class="tbodyClass" v-if="items.length || !loading">
            <slot name="top-row"/>
            <Tr :class="tbodyTrClass" v-for="(item, index) in items" :key="index">
                <Td
                    :aria-colindex="index + 1"
                    v-for="(field, index) in computedFields"
                    :key="field.key"
                    :class="field.class"
                    :tdClass="field.tdClass"
                    :variant="item.variant"
                    :colspan="item.colspan"
                    :rowspan="item.rowspan"
                >
                    <slot :name="`cell(${field.key ?? field})`"
                          :field="field"
                          :index="index"
                          :item="item"
                          :value="item[field.key ?? field]">
                        {{ item[field.key ?? field] }}
                    </slot>
                </Td>
            </Tr>
            <slot name="bottom-row"/>
            </Tbody>

            <slot/>
            <Tfoot :class="tfootClass" v-if="computedFields.length && footClone">
            <Tr :class="tfootTrClass">
                <Th
                    v-for="(field, index) in computedFields"
                    :key="field.key"
                    :aria-colindex="index + 1"
                    :sortable="field.sortable"
                    :class="field.class"
                    :variant="field.variant"
                    :style="field.thStyle"
                    :thClass="field.thClass"
                    :headerAbbr="field.headerAbbr"
                    :headerTitle="field.headerTitle"
                    :colspan="field.colspan"
                    :rowspan="field.rowspan"
                >
                    <slot :name="`foot(${field.key ?? field})`"
                          :field="field"
                          :index="index"
                          :value="field.label ?? field ">
                        {{ field.label ?? field }}
                    </slot>
                </Th>
            </Tr>
            </Tfoot>
        </table>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import Thead from "./Thead.vue";
import Tr from "./Tr.vue";
import Th from "./Th.vue";
import Td from "./Td.vue";
import Tbody from "./Tbody.vue";
import Tfoot from "./Tfoot.vue";
import FormCheckbox from "../Form/FormCheckbox.vue";


const emit = defineEmits(['input'])
const props = defineProps({
    borderless: {
        type: Boolean,
        default: false,
    },
    bordered: {
        type: Boolean,
        default: false,
    },
    caption: {
        type: String,
    },
    captionTop: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
    },
    fields: {
        type: Array,
        default: [],
    },
    filter: {
        type: [Array, Object, String],
    },
    fixed: {
        type: Boolean,
        default: false,
    },
    footClone: {
        type: Boolean,
        default: false,
    },
    groupDivider: {
        type: Boolean,
        default: false,
    },
    hover: {
        type: Boolean,
        default: false,
    },
    id: {
        type: String,
    },
    items: {
        type: [Array, Function],
        default: []
    },
    loading: {
        type: Boolean,
        default: false,
    },
    perPage: {
        type: [Number, String],
        default: 0,
    },
    responsive: {
        type: [Boolean, String],
        default: false,
    },
    selectable: {
        type: Boolean,
        default: false,
    },
    small: {
        type: Boolean,
        default: false,
    },
    sortBy: {
        type: String,
    },
    striped: {
        type: Boolean,
        default: false,
    },
    tbodyClass: {
        type: [Array, String],
    },
    tbodyTrClass: {
        type: [Array, String],
    },
    tfootClass: {
        type: [Array, String],
    },
    tfootTrClass: {
        type: [Array, String],
    },
    theadClass: {
        type: [Array, String],
    },
    theadTrClass: {
        type: [Array, String],
    },
    variant: {
        type: String,
    },
    modelValue: {
        type: Array,
        default: []
    }
})

const tableClass = computed(() => {
    return [
        'table',
        props.class,
        props.bordered ? 'table-bordered' : null,
        props.borderless ? 'table-borderless' : null,
        props.striped ? 'table-striped' : null,
        props.hover ? 'table-hover' : null,
        props.small ? 'table-sm' : null,
        props.variant ? `table-${props.variant}` : null,
        props.captionTop ? 'caption-top' : null,
    ]
})

const tbodyClass = computed(() => {
    return [
        props.tbodyClass,
        props.groupDivider ? 'table-group-divider' : null,
    ]
})

const computedFields = computed(() => {
    return props.fields.length === 0 && props.items.length ? Object.keys(props.items[0]).map(field => ({
        key: field,
        label: field
    })) : props.fields;
})

const checkAll = ref(false);

function onToggleSelectAll() {
    props.items.map(item => item.selected = checkAll.value)
}
</script>


<style lang="scss">
.table {
    margin-bottom: 0;
    line-height: normal;
    font-weight: 300;

    &:not(.table-sm) > thead {

        tr {
            background-color: rgba(255, 255, 255, 0.03);

            th {
                padding-top: 1.125rem;
                padding-bottom: 1.125rem;
                white-space: pre;
            }
        }
    }

    tbody {
        th {
            background-color: rgba(255, 255, 255, 0.03);
        }
    }

    td, th {
        font-size: 14px;
        max-width: 300px;
        //vertical-align: middle;
    }

    .form-check-inline {
        margin-bottom: 0;
    }

    .text-code .form-control {
        height: 31px;
        font-size: 0.875em;
        color: var(--bs-code-color);
    }
}
</style>
