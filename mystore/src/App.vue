<template>
  <div>
<Navbar />

    <div class="container">
      <div class="row">
        <div class="col-9">

          <router-view></router-view>
<!--          <Inventory @addCart="addCartItem" :property="items" />-->
        </div>
        <div class="col-3">

          <Cart  />
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
// import Inventory from "@/views/Inventory";
import Cart from "@/components/Cart";
import data from "@/data";
export default {
  name: 'App',
  components: {
    Cart,
    // Inventory,
    Navbar,
  },
  data(){
    return{
      items:[],
      cart: [ ],
    }
  },
  mounted() {
    this.items = data
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    // removeItem(index){
    //   this.cart.splice(index,1)
    // },
    // searchIn(keyword) {
    //   this.items = data.filter( item => {
    //    return item.title.toLowerCase().indexOf( keyword.toLowerCase() ) !== -1
    //   })
    // }
  }
}
</script>

<style>


</style>
