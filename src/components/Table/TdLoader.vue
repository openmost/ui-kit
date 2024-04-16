<template>
    <td>
        <input class="form-control form-control-sm td-loader" disabled/>
    </td>
</template>

<script setup>
const props = defineProps({
    field: Object,
})
</script>

<style lang="scss">
.td-loader {
    width: 100%;
    border: 1px solid transparent;
    background: linear-gradient(90deg, rgba(255, 255, 255, .03) 33%, rgba(255, 255, 255, .1) 50%, rgba(255, 255, 255, .03) 66%);
    background-size: 300% 100%;
    animation: tdLoading 1s infinite linear;
}

@keyframes tdLoading {
    0% {
        background-position: right
    }
}
</style>
