<template>
  <div>
    <h1>Openmost UI Kit</h1>
    <Alert variant="danger" show>Test</Alert>
    <Button type="submit" data-bs-target="#test" data-bs-toggle="modal">trigger</Button>
    <Modal id="test">Test</Modal>

    <Dropdown text="Click dropdown">
      <DropdownItem href="https://test.com" external>Test</DropdownItem>
    </Dropdown>

    <Button href="https://coucou.fr">Test</Button>
    <Button href="https://coucou.fr" is="div">Test</Button>
    <Button>Test</Button>
    <Button href="https://coucou.fr" :is="Link">Test</Button>

  </div>
</template>

<script setup lang="ts">
import {Link} from "@inertiajs/vue3";
import Alert from "./components/Alert/Alert.vue";
import Modal from "./components/Modal/Modal.vue";
import Button from "./components/Button/Button.vue";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import DropdownItem from "./components/Dropdown/DropdownItem.vue";
</script>
