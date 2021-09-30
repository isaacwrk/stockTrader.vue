<template>
 <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
 </v-layout>
</template>

<script>
import Stock from './Stock.vue'
export default {
    components:{Stock},
    data(){
        return{
            stocks:[
                {id:1, name:'IBM', price:280},
                {id:2, name:'Apple', price:500},
                {id:3, name:'Google', price:450},
                {id:4, name:'Twitter', price:330},
            ]
        }
    }
}
</script>

<style>

</style>