<template>
	<div class="card">
		<img :src="row.photo" class="card-img-top">
		<div class="card-body">
			<h4 class="card-title">{{row.name}}</h4>
			<p class="card-text">{{row.price}}</p>
			<p class="card-text">{{row.description}}</p>
			<router-link :to="{name: 'ItemDetail', params:{id: row.id}}" class="btn btn-success mx-2 my-2">Detail...
			</router-link>
			  <b-button variant="info" @click="AddToCart"><b-icon-cart-plus-fill></b-icon-cart-plus-fill> Add to Cart</b-button>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			row: Object
		},
		methods:{
			AddToCart(){
				console.log(this.row)
				let cartitem = {
					id: this.row.id,
					name: this.row.name,
					photo: this.row.photo,
					price: this.row.price,
					qty: 1
				}
				this.$store.dispatch('addToCart', cartitem)
			}
		}
  }
</script>
<style type="text/css">
	
</style>