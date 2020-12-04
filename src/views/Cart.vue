<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-success my-3">This is cart page</h1>
      </div>
    </div>
    <section v-if="orderStatus">
      <h3 class="text-danger text-center">Dear Customers,Your order successfully!<span style='font-size:30px;'>&#128525;</span></h3>
    </section>
    <section v-else>
      <div class="row">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col"> Product Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,index) in items" :key="index">
              <th scope="row">{{index}}</th>
              <td>
                {{row.name}}
                <img :src="row.photo" class="img-fluid" width="50">
              </td>
              <td>{{row.price}}</td>
              <td>
                <button @click="increasement(row.id)" class="btn btn-outline-info"> + </button>
                {{row.qty}}
                <button @click="decreasement(row.id)" class="btn btn-outline-danger"> - </button>
              </td>
              <td>{{row.qty*row.price}}</td>
            </tr>
            <tr>
              <td colspan="4">Total Price</td>
              <td>{{total}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <textarea class="form-control" placeholder="Please Note Here..." v-model="notes"></textarea>
          </div>
        </div>

        <div class="col-md-12">
          <router-link class="btn btn-outline-info float-left" to="/item">Continue Shopping
          </router-link>
          <button class="btn btn-outline-danger float-right" @click="checkout">Buy Now</button>
        </div>
      </div>
    </section>
  </div>
  
</template>

<script type="text/javascript">
  import Service from '@/service/Service.js'
  export default{
    data(){
      return {
       notes:"",
       orderStatus: false,
      }
    },
    methods:{
      increasement(itemId) {
        this.$store.dispatch('increasement', itemId)
      },
      decreasement(itemId) {
        this.$store.dispatch('decreasement', itemId)
      },
       checkout(){
        //alert('ok')
        let notes=this.notes
        let ls=JSON.stringify(this.$store.state.cart)
        let user_id=1
        Service.order(ls,notes,user_id)
          .then(response=>{
            console.log(response)
            localStorage.removeItem('cart')
            // this.orderDone=1;
            this.$store.dispatch('setState')
            this.orderStatus=true
            //this.$router.push({name: 'Home'})
          })
      }
    },
    computed:{
      items(){
        //this.$store.dispatch('setState')
        return this.$store.state.cart
      },
      total(){
        //this.$store.dispatch('setState')
        return this.$store.state.cart.reduce((a, c) => (a + (c.price*c.qty)),0)
      }
    }
  }
</script>

<style type="text/css"></style>