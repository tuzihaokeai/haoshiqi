<template>
	<div id="index">
		<div class="portal-header">
      <div class="portal-logo"></div>
      <input type="text" placeholder="搜索您想要找的商品">
      <div class="portal-location J_go_city">上海市<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
    	</div>
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
	.iconfont{
		width: 10px;
		height: 10px;
		color: #000000;	
	}
</style>