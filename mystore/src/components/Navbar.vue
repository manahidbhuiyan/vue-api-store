<template>
  <b-navbar type="light" variant="dark" class="navbar">
    <router-link :to="{name: 'Inventory'}" class="logo">MyStore</router-link>
    <b-nav-form class="form" @submit.prevent="getSearch()">
      <b-form-input class="mr-sm-2" placeholder="Search" v-model="keyword"></b-form-input>
      <b-button variant="outline-success" class="my-2 my-sm-0 search-button" type="submit">Search</b-button>
    </b-nav-form>
  </b-navbar>
</template>

<script>
import axios from "axios";
// import data from "@/data";
export default {
  // eslint-disable-next-line
  name: "Navbar",
  data(){
    return{
      keyword : ''
    }
  },
  methods:{
    // search(){
    //   this.$emit('search',this.keyword)
    // }
    getSearch(){
      var self = this
      axios.get('http://localhost:3000/search/'+ this.keyword).then(response => {
        self.$store.commit('setInventory',response.data)
        self.keyword = ''
      })
    }
  }
}
</script>

<style scoped>
.navbar{
  padding:10px 20px ;
}
.logo{
  color: white !important;
  font-size: 20px;
  text-decoration: none;
  margin: 0 10px;
}
.form-inline{
  display: flex;
}
.search-button{
  margin-left: 10px;
}
</style>