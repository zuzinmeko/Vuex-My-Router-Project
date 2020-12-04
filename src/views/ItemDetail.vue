<template>
<div class="container">
<!-- <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img :src="item.photo" class="card-img" alt="img">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Products Detail</h5>
        <p class="card-text">{{item.name}}</p>
        <p class="card-text"><del>{{item.price}}</del></p>
        <p class="card-text">{{item.discount}}</p>
        <p class="card-text">{{item.details}}</p>
        <p class="card-text">{{item.codeno}}</p>
          <p class="card-text">{{item.brand.name}}</p>
            <p class="card-text">{{item.subcategory.category.name}} |{{item.subcategory.name}}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> -->
<div>
  <b-card no-body class="overflow-hidden my-3"  v-if="!loading">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="item.photo" alt="Image" class="rounded-0 my-3"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Detail Card">
          <b-card-text>
            <dl><dt>{{item.codeno}}</dt></dl>
            <dl><dt>{{item.name}}</dt></dl>
            <dl><dt>Price:{{item.price}} |Discount:{{item.discount}}</dt></dl>
            <dl><dt>{{item.details}}</dt></dl>
            <dl><dt>{{item.brand.name}} and {{item.subcategory.category.name}}  and {{item.subcategory.name}}</dt></dl>
            <b-card-text>
              <input type="number" class="form-control" min="1" v-model="qty">
            </b-card-text>
            <b-button variant="info" @click="AddToCart"><b-icon-cart-plus-fill></b-icon-cart-plus-fill> Add to Cart</b-button>
            <dl><dt><small class="text-muted">Last updated 3 mins ago</small></dt></dl>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</div>
</template>
<script type="text/javascript">
	import Service from '@/service/Service.js'
  export default{
    data(){
      return {
        qty:1,
        loading: true,
        item: Object
      }
    },
    // created(){
    //   let id = this.$route.params.id;
    //   Service.getItemDetail(id)
    //           .then(response => this.item = response.data.item)
    // },
    created(){
      let id = this.$route.params.id;
      Service.getItemDetail(id)
              .then(response => {
                this.item = response.data.item
                this.loading = false
              })
    },
    methods:{
      AddToCart(){
        console.log(this.item)
        let cartitem = {
          id: this.item.id,
          name: this.item.name,
          photo: this.item.photo,
          price: this.item.price,
          qty: this.qty
        }
        this.$store.dispatch('addToCart', cartitem)
      }
    }
  }
</script>
<style type="text/css">
	
</style>