<template>
  <div id="app">
   <b-navbar toggleable="lg" type="dark" variant="success">
    <div class="container">
    <b-navbar-brand href="#">Lucky Shop</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item >
            <router-link to="/" class="nav-link" href="#">Home</router-link>
          </b-nav-item>

          <b-nav-item >
            <router-link to="/item"  class="nav-link" href="#">Item</router-link>  
          </b-nav-item>

          <b-nav-item >
           <router-link to="/category" class="nav-link" href="#">Category</router-link>
         </b-nav-item>

         <b-nav-item >
          <router-link to="/brand" class="nav-link" href="#">Brand</router-link>  
        </b-nav-item>

        <b-nav-item>
         <router-link to="/subcategory"  class="nav-link" href="#" tabindex="-1" aria-disabled="true">Subcategory</router-link>  
       </b-nav-item>

       <b-nav-item >
        <router-link to="/about"  class="nav-link " href="#" tabindex="-1" aria-disabled="true">About</router-link></b-nav-item>
        <!-- </b-navbar-nav> -->

        <b-nav-item >
          <router-link to="/about"  class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item>
            <router-link class="nav-link" to="/cart">Cart <span class="badge badge-danger badge-pill" v-if="cartCount>0">{{cartCount}}</span></router-link>
          </b-nav-item>
          <div v-if="!loginState">
            <b-nav-item>
              <router-link class="nav-link" to="/login">Login </router-link>
            </b-nav-item>
            <b-nav-item v-if="!loginState">
              <router-link class="nav-link" to="/register">Register </router-link>
            </b-nav-item>
          </div>
    
        </b-navbar-nav>
      </b-collapse>
    </div>
    </b-navbar>

  <router-view/>
</div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        
      }
    },
    methods:{
    },
    computed:{
      cartCount(){
       this.$store.dispatch('setState')
        return this.$store.state.cart.reduce((a, c) => (a + c.qty),0)
      },
      loginState(){
        this.$store.dispatch('setToken')
        return this.$store.state.token?true:false
      }
    }
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
