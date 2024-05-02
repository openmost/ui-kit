<template>
  <main class="py-5">
    <PageView title="Demo">

      <Modal
          id="bulk-delete"
          trigger-text="Delete"
          trigger-variant="outline-danger"
          :trigger-icon="IconDelete"
          title="Bulk delete"
          ok-variant="danger"
          ok-title="Delete"
          @ok="onOk"
          centered
      >
        Are you sure you want to delete the selected items? You can export the data to save it before
        deleting it permanently.
      </Modal>

    </PageView>
  </main>
</template>

<script setup lang="ts">
import PageView from "./components/Page/PageView.vue";
import Modal from "./components/Modal/Modal.vue";
import {ref} from "vue";
import IconDelete from "./components/Icon/IconDelete.vue";

const state = ref(false);

function onOk() {
  state.value = true;
}
</script>
