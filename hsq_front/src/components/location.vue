<template>
	<div id="location">
	<div class="location_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="title">城市选择</div>
	</div>
	<ul class="select-city">
		<li class="city_title">定位地址</li>
		<li class="city_text" @click="getcity">点击获取</li>
		<li class="city_title">省份列表</li>
		<li v-for="(data,index) in citylist" class="city_text" ref="city"  @click="cityClick(index)">{{data.province}}</li>
	</ul>
	</div>
</template>
<script>
import router from '../router'
	import Url from "../address"
	export default {
		data(){
			return{
				status:'',
				citylist:[],
				getLatitude:"",
				getLongitude:""
			}
		},
		methods:{
			backClick(){
				router.go(-1)
			},
			cityClick(index){
				router.push(`/index?id=${this.$refs.city[index].innerHTML}`)
				console.log(this.$refs.city[index].innerHTML)
			},
			getcity(){
				// 使用百度地图地位模块获取位置信息
				plus.geolocation.getCurrentPosition( function ( p ) {
					alert( "Geolocation\nLatitude:" + p.coords.latitude + "\nLongitude:" + p.coords.longitude + "\nAltitude:" + p.coords.altitude );
					console.log(p.coords.latitude)
					console.log(p.coords.longitude)
				}, function ( e ) {
					alert( "Geolocation error: " + e.message );
				},{provider:'baidu'});
			}
		},
		mounted(){	
			
			this.$http.get("http://"+Url.url+":3000/homeapi/city").then(res=>{
			this.citylist=res.body.data.list;

			//console.log(res.body.data.list)
			
		},error=>{
			
		})
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	body,html{
		width: 100%;
		height: 100%;
		background: #f1f1f1;
	}
	.location_header{
		background-color: rgba(255,238,17,.9);
    	color: #914e07;
    	width: 100%;
    	position: fixed;
	    right: 0;
	    top: 0;
	    height: 44px;
	    line-height: 44px;
	    text-align: center;
	    z-index: 960;
	    display: flex;
	}
	.back-btn{
		display:block;
		padding: 0 10px;
		cursor: pointer;
	}	
	.title{
	position: absolute;
    left: 88px;
    right: 88px;
    font-size: 20px;
	}
	.select-city{
	margin-top: 44px;	
	}
	.select-city li {	
    display: inline-block;
    width: 100%;
    padding: 10px 15px;
	}	
	.city_title {
    color: #959595;
    background: #e4e4e4;
	}
	.city_text{
	color: #252525;
    border-bottom: 1px solid #e4e4e4;	
	}
	
</style>