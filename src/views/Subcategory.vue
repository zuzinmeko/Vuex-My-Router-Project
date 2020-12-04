<template>
  <div class="about">
    <h1>This is an subcategory page</h1>
     {{titile}}
 		<ul>
			<li v-for="(row,index) in subcategories" :key="index">{{row.name}}</li>
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
			subcategories:null
		}
		},
		created(){
			Service.getSubcategories()
				.then(response=>{
				this.subcategories=response.data.subcategories
			})
		}
	}
</script>
<style type="text/css"></style>

