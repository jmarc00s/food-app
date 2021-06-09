<template>
    <span class="badge">
        {{value}}
    </span>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style scoped>
    .badge {
        @apply ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full;
    }
</style>