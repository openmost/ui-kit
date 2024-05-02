<template>

  <slot name="trigger">
    <Button
        :variant="triggerVariant"
        :class="triggerClass"
        :size="triggerSize"
        :disabled="triggerDisabled"
        @click="show()"
    >
      <template #icon v-if="triggerIcon">
        <component :is="triggerIcon"/>
      </template>
      {{ triggerText }}
    </Button>
  </slot>

  <div
      ref="modalEl"
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
                    aria-label="Close"
                    @click="close()"
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
                :disabled="cancelDisabled"
                @click="close()"
            >
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
import {computed, onMounted, ref} from "vue";
import Button from "../Button/Button.vue";

const modalEl = ref();
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
  noHideOnOk: {
    type: Boolean,
    default: false,
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
    props.show ? 'show' : '',
  ]
});

const modalTitleClass = computed(() => {
  return [
    'modal-title fs-5',
    props.titleClass
  ]
})

onMounted(() => {
  modal.value = new Modal(modalEl.value);
});

function show() {
  modal.value.show();
}


function hide() {
  modal.value.hide();
}


function toggle() {
  modal.value.toggle();
}

function onOk() {
  emit('ok');
  emit('validate');
  emit('success');

  if(!props.noHideOnOk){
    modal.value.hide()
  }
}
</script>
