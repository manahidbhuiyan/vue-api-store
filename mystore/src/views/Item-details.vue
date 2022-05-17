<template>
<!--  <h1>details {{  $route.params.id  }} </h1>-->
<div>
<div class="card" v-if="item">
  <div class="row">
    <div class="col-6">
      <img :src="item.photo" alt=""><br>
      <button class="btn btn-primary cart-add-btn" @click="addToCart(item)" > add to cart </button>
    </div>
    <div class="col-6">
      <h3>Title: {{ item.title }} </h3>
      <h5>Price: {{ item.price }} </h5>
      <p><b>Details:</b> {{ item.description }} </p>
    </div>
  </div>
</div>
  <h3 v-else> Loading... </h3>

</div>


</template>

<script>
import axios from "axios";

export default {
  name: "Item-details",
  data(){
    return{
      item : null
    }
  },
  mounted() {
    this.fetchItem()
  },
  methods:{
    fetchItem(){
      var self = this
      axios.get('http://localhost:3000/item/'+this.$route.params.id).then(response =>{
        self.item = response.data
      })
    },
    addToCart(item) {
      this.$store.commit('addToCart',item)
      // this.$emit('addCart',item)
    },
  }
}
</script>

<style scoped>
.card{
  padding: 10px;
  border: 1px solid #787070;
  margin: 10px 0;
}
.cart-add-btn{
  width: 250px;
  margin: 10px 0;
}

</style>

