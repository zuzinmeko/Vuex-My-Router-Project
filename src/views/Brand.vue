<template>
  <div class="about">
    <h1>This is an brand page</h1>
    {{titile}}
 		<ul>
			<li v-for="(row,index) in brands" :key="index">{{row.name}}</li>
		</ul>
  </div>
</template>
<script type="text/javascript">
	import Service from '@/service/Service.js'
	export default{
		props:{
			title:String
		},
		data(){
			return{
			brands:null
		}
		},
		created(){
			Service.getBrands()
				.then(response=>{
				this.brands=response.data.brands
			})
		}
	}
</script>
<style type="text/css"></style>