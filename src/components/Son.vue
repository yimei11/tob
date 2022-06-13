<template>
    <div>
        son
        <button @click="fn">子传父</button>
    </div>
</template>
<script>
export default {
    name:"Son",
    props:["mes"],
    setup(props,context) {
        console.log(props);     // 接收父组件传的值
        // console.log(context);
        let hello = "22222222222";
        function fn(){
            context.emit("sonvalue",hello);     // 向父组件传值
        }
        return {
            hello,
            fn
        }
    },
}
</script>
<style scoped>

</style>