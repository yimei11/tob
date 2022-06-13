<template>
    <div>
        <h3>拖拽</h3>
        <!-- 第一个拖拽框 -->
        <div>
            <h3>第一个拖拽框</h3>
            <draggable 
            v-model="myArray" 
            group="people" 
            @start="drag=true" 
            @end="drag=false" 
            item-key="id">
                <template #item="{element}">
                    <div>{{element.name}}</div>
                </template>
            </draggable>
        </div>
        <!-- 第二个拖拽框 -->
        <div>
            <h3>第二个拖拽框</h3>
            <draggable 
            v-model="lists" 
            group="people" 
            @start="drag=true" 
            @end="drag=false" 
            item-key="id">
                <template #item="{element}">
                    <div>{{element.name}}</div>
                </template>
            </draggable>
        </div>
        
        
    </div>
</template>
<script>

import draggable from 'vuedraggable'
export default {
    name: "Drage",
    components: {
        draggable
    },
    setup(props, context){
        let drag = false
        let myArray = [
            {name: "张三 0", id: 0},
            {name: "里斯 1", id: 1},
            {name: "王五 2", id: 2}
        ]
        let lists = [
            {name: "塞军", id: 0},
            {name: "小泉", id: 1},
            {name: "文茵", id: 2}
        ]

        

        return {
            drag,
            myArray,
            lists
        }
    }
}
</script>
<style lang = "scss" scoped>

</style>