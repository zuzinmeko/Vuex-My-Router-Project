<template>
  <div class="container">
  	<div class="row">
  		<div class="col-3 my-4">
  			<div class="card" style="color: blue">
  				<ul class="list-group list-group-flush">
  					<li class="list-group-item" v-for="(row,index) in categories" :key="index">
  						{{row.name}}
  					</li>
  					
  				</ul>
  			</div>
  		</div>
  		<div class="col-9 my-3"> 
  			<div>
          <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
        </div>
		</div>
  	</div>
  	
  	<div class="row my-3">
  		<div class="col-md-3 my-4" v-for="(row,index) in items" :key="index">
  			<SingleItem :row="row"></SingleItem>
  		</div>
  	</div>
  	<!-- <div class="inner-content">
  		<p>Copyright © 2020 zuzin: <a href="https://www.meko.com/">zuzinmeko.com</a></p>
  	</div> -->
        <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
  				<p>Copyright © 2020 zuzin: <a href="https://www.meko.com/">zuzinmeko.com</a></p>
            </div>
          </div>
        </div>
      </div>
 </div>


     
      
        
            
   
    

</template>
<script type="text/javascript">
	import Service from '@/service/Service.js'
	import SingleItem from '@/components/SingleItem.vue'
	export default{
		components:{
			SingleItem
		},
		data(){
			return{
			categories:null,
			items:[]
		}
		},
		created(){
			Service.getItems()
				.then(response=>{
				this.items=response.data.items
			})
			Service.getCategories()
				.then(response=>{
				this.categories=response.data.categories
			})	
		}
	}
</script>
<style type="text/css"></style>