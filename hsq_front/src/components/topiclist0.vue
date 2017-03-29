<template>
	<div id="topiclist0">
	<div class="topiclist0_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="title">专题</div>
  			<span class="glyphicon glyphicon-home" aria-hidden="true" id="home" @click="homeClick()"></span>
	</div>
	<div class="top10_banner">
    <h3>精选Top 10件</h3>
    <p>我们花时间，替您省钱又Hold住品质，您只需要<br>买买买！</p>
  	</div>
	</div>
</template>
<script>
	import css from '../bootstrap/css/bootstrap.css';
	import router from "../router"
	export default {
		data(){
			return{
				status:''
			}
		},
		methods:{
			
		},
		mounted(){		
			this.$http.get("http://localhost:3000/homeapi/topiclist").then(res=>{
			
			console.log(res.body)
			
		},error=>{
			
		})
		}
	}
</script>
<style scoped>
	
</style>