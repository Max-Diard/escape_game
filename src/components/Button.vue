<template>
    <button :disabled="disabled" @click="$emit('click')" :class="[size, type]">
        <img v-if="icon" :src="icon">
        <span><slot/></span>
    </button>
</template>

<script>

export default {
    props :["icon", "disabled", "size", "type"]
}
</script>

<style scoped>
    button{
        @apply
            flex
            bg-green-500
            items-center
            px-4
            rounded-full
            shadow
            w-full
            text-white
            text-lg
            p-2;
    }

    button.small{
        @apply  
            p-1
            px-8
            text-base;
    }

    button.danger{
        @apply
            bg-red-500;
    }

    button img{
        @apply
            h-5;
    }

    button[disabled]{
        opacity: 0.5;
    }

    button span{
        @apply
            flex-1
            text-center;
    }
</style>