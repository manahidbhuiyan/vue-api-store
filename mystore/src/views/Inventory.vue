<template>
  <div class="row" v-if="!loading">

    <div class="card" style="width: 13rem;" v-for="(item,index) in items" :key="index">
      <router-link :to="{ path: '/item/' + item.id }" class="link-router">
      <img :src="item.photo" class="card-img-top" alt="...">
      <div class="card-body">
            <h5 class="card-title"> {{ item.title }} </h5>
      </div>
      </router-link>
        <div class="card-footer">
          <span class="price"> {{ item.price }} </span>
          <a href="#" class="btn btn-primary float-end" @click="addToCart(item)">Add Cart</a>
        </div>
    </div>
  </div>
  <h3 v-else> Loading.. </h3>
</template>

<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line
  name: "Inventory",
  data(){
    return{
      loading: true,
    }
  },
  computed:{
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInventory()
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart',item)
      // this.$emit('addCart',item)
    },
    fetchInventory(){
      var self = this
      axios.get('http://localhost:3000/items').then(response => {
        self.$store.commit('setInventory',response.data)
          self.loading = false
      })
    }
  },
}
</script>

<style scoped>
.card{
  margin: 10px !important;
  padding: 0;
}
.link-router{
  color: black;
  text-decoration: none;
}
</style>
