<template>
  <main class="py-5">
    <PageView title="Demo">

      {{ state ? 'OUI' : 'NON' }}

      <hr>

      <Modal
          trigger-variant="outline-danger"
          trigger-text="Hey"
          :trigger-icon="IconDanger"
          @ok="onOk"
      >Test
      </Modal>

    </PageView>
  </main>
</template>

<script setup lang="ts">
import PageView from "./components/Page/PageView.vue";
import Modal from "./components/Modal/Modal.vue";
import IconDanger from "./components/Icon/IconDanger.vue";
import {ref} from "vue";

const state = ref(false);

function onOk() {
  state.value = true;
}
</script>
