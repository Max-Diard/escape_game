<template>
    <div class="craft-container">
        <div class="craft-items">
            <div class="craft-item">
                <img v-if="firstItem" :src="firstItem.icon" />
                <button v-if="firstItem" @click="$emit('onRemoveItem', firstItem)" >X</button>
            </div>
            <div class="craft-item">
                <img v-if="secondItem" :src="secondItem.icon" />
                <button v-if="secondItem" @click="$emit('onRemoveItem', secondItem)">X</button>
            </div>
        </div>
        <Button @click="$emit('onCombine')" size="small" :disabled="!firstItem || !secondItem">Combiner</Button>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
    props: [
        "firstItem", 
        "secondItem"
    ],
    components :{
        Button
    }
}
</script>

<style scoped>
    .craft-items{
        @apply
            flex
            bg-gray-200
            rounded-lg
            drop-shadow-sm
            mb-2;
    }
    .craft-item{
        @apply
            rounded-full
            w-20
            h-20
            m-2
            p-4
            bg-gray-500
            shadow
            shadow-lg;
        box-shadow: inset 0px 5px 3px rgba(0,0,0,0.1);
    }

    .craft-item img{
        @apply
            h-full
            w-full
    }
</style>