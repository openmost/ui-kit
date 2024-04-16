<template>
  <div>
    <h1>Openmost UI Kit</h1>
    <Alert variant="danger" show>Test</Alert>
    <Button type="submit" data-bs-target="#test" data-bs-toggle="modal">trigger</Button>
    <Modal id="test">Test</Modal>
  </div>
</template>

<script setup lang="ts">
import Alert from "./components/Alert/Alert.vue";
import Modal from "./components/Modal/Modal.vue";
import Button from "./components/Button/Button.vue";
</script>
