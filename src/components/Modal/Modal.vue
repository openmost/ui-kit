<template>

  <slot name="trigger">
    <Button :variant="triggerVariant" :class="triggerClass" :size="triggerSize" :disabled="triggerDisabled"
            data-bs-toggle="modal" :data-bs-target="`#${id}`">
      <template #icon v-if="triggerIcon">
        <component :is="triggerIcon"/>
      </template>
      {{ triggerText }}
    </Button>
  </slot>

  <div ref="modal"
       :class="modalModalClass"
       :id="id"
       tabindex="-1"
       :aria-labelledby="`${id}-label`"
       aria-hidden="true">

    <div :class="modalDialogClass">
      <div :class="modalContentClass">
        <div v-if="!hideHeader" :class="modalHeaderClass">
          <slot name="modal-header">
            <slot name="modal-title">
              <span :class="modalTitleClass" :id="`${id}-label`">
                {{ title }}
              </span>
            </slot>

            <template v-if="!hideHeaderClose">
              <slot name="modal-header-close">
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
              </slot>
            </template>
          </slot>
        </div>
        <div :class="modalBodyClass">
          <slot/>
        </div>
        <div v-if="!hideFooter" :class="modalFooterClass">
          <slot name="modal-footer">
            <Button
                type="button"
                :class="modalCancelClass"
                data-bs-dismiss="modal"
                :disabled="cancelDisabled">
              {{ cancelTitle }}
            </Button>
            <slot name="modal-ok">
              <Button
                  type="button"
                  :variant="okVariant"
                  @click="onOk">
                {{ okTitle }}
              </Button>
            </slot>
          </slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import Modal from 'bootstrap/js/dist/modal';
import {computed, onMounted, ref, nextTick} from "vue";
import Button from "../Button/Button.vue";

const modal = ref();
const emit = defineEmits(['ok', 'validate', 'success']);
const props = defineProps({
  bodyClass: {
    type: Array, Object, String,
  },
  cancelDisabled: {
    type: Boolean,
    default: false,
  },
  cancelTitle: {
    type: String,
    default: 'Cancel',
  },
  cancelVariant: {
    type: String,
    default: 'secondary',
  },
  centered: {
    type: Boolean,
    default: false,
  },
  contentClass: {
    type: Array, Object, String,
  },
  dialogClass: {
    type: Array, Object, String,
  },
  footerClass: {
    type: Array, Object, String,
  },
  headerClass: {
    type: Array, Object, String,
  },
  hideBackdrop: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  hideHeader: {
    type: Boolean,
    default: false,
  },
  hideHeaderClose: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'modal-id'
  },
  modalClass: {
    type: Array, Object, String,
  },
  okTitle: {
    type: String,
    default: 'Validate'
  },
  okVariant: {
    type: String,
    default: 'primary'
  },
  scrollable: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  show: {
    type: Boolean,
    default: false,
  },
  static: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: 'Modal title',
  },
  titleClass: {
    type: Array, Object, String,
  },
  triggerClass: {
    type: [String, Array, Object],
    default: '',
  },
  triggerDisabled: {
    type: Boolean,
  },
  triggerIcon: {
    type: Object,
  },
  triggerSize: {
    type: String,
  },
  triggerText: {
    type: String,
    default: 'Click me',
  },
  triggerVariant: {
    type: String,
    default: 'outline-primary',
  },
});


const modalBodyClass = computed(() => {
  return [
    'modal-body',
    props.bodyClass,
  ]
});

const modalCancelClass = computed(() => {
  return [
    'btn',
    `btn-${props.cancelVariant}`
  ]
});

const modalContentClass = computed(() => {
  return [
    'modal-content',
    props.contentClass,
  ]
});

const modalDialogClass = computed(() => {
  return [
    'modal-dialog',
    props.dialogClass,
    props.centered ? 'modal-dialog-centered' : null,
    props.scrollable ? 'modal-dialog-scrollable' : null,
    props.size ? `modal-${props.size}` : null,
  ]
});

const modalFooterClass = computed(() => {
  return [
    'modal-footer',
    props.footerClass,
  ]
});

const modalHeaderClass = computed(() => {
  return [
    'modal-header',
    props.headerClass,
  ]
});

const modalModalClass = computed(() => {
  return [
    'modal fade',
    props.modalClass,
    props.show ? '' : 'show',
  ]
});

const modalTitleClass = computed(() => {
  return [
    'modal-title fs-5',
    props.titleClass
  ]
})

onMounted(() => {
  modal.value = new Modal(modal.value)
});

async function hide() {
  await nextTick();
  modal.value.hide();
}

async function show() {
  await nextTick();
  modal.value.show();
}

async function toggle() {
  await nextTick();
  modal.value.toggle();
}

function onOk() {
  emit('ok');
  emit('validate');
  emit('success');
  hide();
}
</script>
