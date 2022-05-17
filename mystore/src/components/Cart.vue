<template>
  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name"> <b>Item Name</b> </span>
      <span class="item-price float-end"> <b>Price</b> </span>
    </li>
    <li class="list-group-item list-group-item-list" v-for="(item,index) in property" :key="index">
      <span class="item-name"> {{ item.title }} </span>
      <span class="item-price float-end"> $ {{ item.price }}  <span class="cross" @click="removeItem(index)"> &#10060;  </span> </span>
      <span class="item-price float-end"> </span>
    </li>
    <li class="list-group-item">
      <span class="item-name"> <b>Total Price</b> </span>
      <span class="item-price float-end"> $ {{ total_price }} </span>
    </li>
    <li class="list-group-item" v-if="property.length > 0 "  >
      <router-link :to="{name: 'Form'}"><button class="btn btn-success checkout" > Check Out </button></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Cart",
  // props:['property'],
  data(){
    return{
      check : true
    }
  },
  methods:{
    removeItem(index){
      this.$store.commit('removeItem',index)
    },
    // checkout(){
    //  if (confirm("Are You sure to checkout")){
    //    this.$store.commit('removeCart')
    //  }
    // }
  },
computed : {
  total_price() {
    let total  = 0;
    this.property.forEach(item =>{
      total += parseFloat((item.price))
    })
    return total.toFixed(2)
  },
  property(){
      return this.$store.getters.getCart
  }
}
}
</script>

<style scoped>
.list-group-item:first-child{
  margin: 10px 0 10px 0;
}
.list-group-item + .list-group-item{
  border-top-width: 1px;

}
.list-group-item:last-child {
  border-top-width: 1px;
  margin: 10px 0 0 0;
}

.cross{
  color: red;
  padding: 0 5px;
  cursor: pointer;
}
.checkout{
  width: 100%;
}

</style>