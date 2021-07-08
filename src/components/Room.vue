<template>
    <div class="room">
        <div class="room-title">
            Pièce
        </div>
        <ul class="item-list">
            <li class="item" v-for="(item, index) in items" :key="index">
                <div class="item-infos">
                    <img class="item-icon" :src="item.icon"/> {{item.name}} ({{item.status}}) 
                </div>
                <div class="item-actions">
                    <button @click="$emit('use', item)">
                        <img src="https://image.flaticon.com/icons/png/512/416/416255.png" alt="Utiliser" />
                    </button>
                    <button @click="$emit('take', item)">
                        <img src="https://image.flaticon.com/icons/png/512/2883/2883596.png" alt="Prendre" />
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    props: ['items']
    
}
</script>

<style scoped>

.room{
    @apply 
        bg-white
        rounded-xl
        shadow-xl
        my-5
        overflow-hidden;;
}

.room-title{
    @apply 
        bg-blue-500
        text-white
        text-center
        text-lg
        p-3
}

.item-icon{
    @apply 
        h-8;
}

.item-list{
    

}

.item{
    @apply 
        flex 
        border-b
        p-4
        justify-between
        items-center;
}

.item-actions button{
    @apply
        mx-2
}

.item-actions img{
    @apply 
        h-8;
}

</style>