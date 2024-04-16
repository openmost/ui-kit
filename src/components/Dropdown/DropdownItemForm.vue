<template>
    <form @submit="onSubmit">
        <slot/>
    </form>
</template>

<script setup>
const emit = defineEmits(['submit']);

function onSubmit(event){
    emit('submit', event)
}
</script>

<style lang="scss">
.dropdown-item {
    font-size: .875rem;
}
</style>
