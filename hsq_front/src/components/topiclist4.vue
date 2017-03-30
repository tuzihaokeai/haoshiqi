<template>
	<div id="topiclist4">
		<div class="topiclist4_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="title">
  				
  			</div>
		</div>
	</div>
</template>
<script>
	
	export default {
		data(){
			return{
				status:''
			}
		},
		mounted(){
			//console.log(this.searchText);
			this.$http.get("http://"+Url.url+":3000/homeapi/topiclist4").then(res=>{
				console.log(res)
				//console.log(res.data);
					//console.log(res.body);
//					router.push("/category/categorydetail")
					//this.goodsLi=res.body.data.list
				},error=>{
					
				})
				
				
				
		},
		methods:{
			backClick(){
				router.go(-1)
			},
		}
	}
</script>
<style scoped>
	
</style>