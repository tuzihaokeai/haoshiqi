<template>
	<div id="index">
		<div class="portal-header">
      <span  class="portal-logo"></span><input type="text" placeholder="搜索您想要找的商品" class="search"/>
      <div class="portal-location">上海市<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
    	</div>
    	<div class="banner"></div>
		<router-view></router-view>
	</div>
</template>
<script>
import css from '../bootstrap/css/bootstrap.css'

	export default {
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
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
</style>