<template>
	<div id="list">
			<div class="portal-header">
      <span  class="portal-logo"></span><input type="text" placeholder="搜索您想要找的商品" class="search"/>
      <div class="portal-location">上海市<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
    	</div>
    	<div class="banner"></div>
    	<div class="protal-icon">
    		<ul>
    		<li v-for="(data,index) in iconlist" :key="index">
    			<img :src="imgpath[index]" />
    			<p>{{data.label}}</p>
    		</li>
    		</ul>
    	</div>
    	<ul class="extension-item">
    		<li><img src="../assets/1.jpg"/></li>
    		<li><img src="../assets/2.jpg"/></li>
    		<li><img src="../assets/3.jpg"/></li>
    		<li><img src="../assets/4.jpg"/></li>
    		<li><img src="../assets/5.jpg"/></li>
    	</ul>
    	<ul class="index_list">
    		<li>
    			<img src="../assets/list1.jpg"/>
    			<div class="index_text">
				<h3>秒杀 马来西亚桂格燕麦饼干一盒162g口味随机</h3>
				<p>
					<span class="tag" style="background: #FF5555;">4.7折</span>
				  <dfn class="index_price">¥ <span class="price_box">7.80</span></dfn>
				  <del class="del_price">8.90</del>
				</p>
					<p class="shopcar"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></p>
				<p>

				  </p>
  				</div>
    		</li>
    		<li>
    			<img src="../assets/list1.jpg"/>
    			<div class="index_text">
				<h3>秒杀 马来西亚桂格燕麦饼干一盒162g口味随机</h3>
				<p>
					<span class="tag" style="background: #FF5555;">4.7折</span>
				  <dfn class="index_price">¥ <span class="price_box">7.80</span></dfn>
				  <del class="del_price">8.90</del>
				</p>
					<p class="shopcar"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></p>
				<p>

				  </p>
  				</div>
    		</li>
    		<li>
    			<img src="../assets/list1.jpg"/>
    			<div class="index_text">
				<h3>秒杀 马来西亚桂格燕麦饼干一盒162g口味随机</h3>
				<p>
					<span class="tag" style="background: #FF5555;">4.7折</span>
				  <dfn class="index_price">¥ <span class="price_box">7.80</span></dfn>
				  <del class="del_price">8.90</del>
				  <p class="shopcar"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></p>
				</p>
  				</div>
    		</li>
    	</ul>
	</div>
</template>
<script>
import router from '../router'
import css from '../bootstrap/css/bootstrap.css'

	export default {
		data(){
			return{
				iconlist:[],
				imgpath:[]
			}
		},
		mounted(){
			this.$http.get("http://localhost:3000/homeapi/icon").then(res=>{
			
			//console.log(res.body)
			this.iconlist=res.body.data.subButtonList;
			for(var i=0;i<res.body.data.subButtonList.length;i++){
				this.imgpath.push(res.body.data.subButtonList[i].icon)
			}
			//console.log(this.imgpath)
			
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
	.portal-header{
	height: 50px;
    padding:10px 80px;
    background: #fe1;
	}
	.portal-logo{
	position: absolute;
    top: 15px;
    left: 5px;
    width: 70px;
    height: 22px;
    background: url(../assets/logo.png) top left no-repeat;
    background-size: auto 100%;
	}
	.search{
	display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    line-height: 30px;
    border: none;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
	}
	.portal-location{
	position: absolute;
    top: 15px;
    right: 15px;
    color: #914e07;
    font-weight: 700;
    z-index: 1000
	}
	.banner{
		background: url(../assets/banner.jpg) center no-repeat;
		height: 210px;
		background-size: 100%;
	}
	.protal-icon{

	}
	.protal-icon li{
	float: left;
    width: 20%;
    padding: 10px 0;
    list-style: none;
    text-align: center;
    border-bottom: 3px solid lightgrey;
	} 
	.protal-icon li img{
		width: 40px;
		height: 40px;
		display: block;
	border: 0;
    position: relative;
    left: 22%;
    margin-bottom: 10px;
	}
	.extension-item li img{
		height: 175px;
		width: 100%;
		border-bottom: 3px solid lightgrey;
	}
	.index_list li{
	border-bottom: 5px solid #f1f1f1;
    overflow: hidden;
    padding: 10px;
    position: relative;
	}
	.index_list li img{
		float: left;
		width: 100px;
		height: 100px;
		margin-right: 10px;
	}
	.index_list li .index_text{
		overflow: hidden;
	    font-size: 14px;
	    color: #959595;
	}
	.index_text h3{
		overflow: hidden;
	    font-size: 14px;
	    color: #252525;
	    margin-bottom: 20px;
	}
	.tag {
	    padding: 0 3px;
	    margin-right: 3px;
	    border-radius: 2px;
	    color: #fff;
	    vertical-align: 3px;
	}
	.index_price {
	    min-width: 70px;
	    white-space: nowrap;
	    display: inline-block;
	    font-style: normal;
	    font-size: 20px;
	    color: #f55;
	}
	.index_list li .del_price{
    color: #b4b4b4;
   	font-size: 12px;
	}
	.shopcar{
		position: absolute;
	    right: 15px;
	    bottom: 5px;
	    width: 32px;
	    height: 32px;
	    box-sizing: content-box;   
	}
	.shopcar span{
		display: block;
	    width: 100%;
	    height: 100%;
	    line-height: 32px;
	    background: #f55;
	    border-radius: 50%;
	    color: #fff;
	    font-size: 16px;
	    text-align: center; 
	}
	
</style>