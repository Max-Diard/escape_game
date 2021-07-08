<template>
    <div class="timer">
        <span>
            {{time_str}}
        </span>
    </div>
</template>

<script>

export default{
    props :["time"],
    computed:{
        time_str : function(){
            const seconds = this.time % 60 + "";
            const minutes = Math.floor(this.time / 60) + "";
            return minutes.padStart(2, "0") + ' : ' + seconds.padStart(2, "0");
        }
    }
}
</script>

<style scoped>
    .timer{
        @apply 
        p-4
        bg-gray-900
        rounded-xl
        text-white
        text-3xl;
    }
</style>