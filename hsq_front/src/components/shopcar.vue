<template>
	<div id="shopcar">
		<div class="Header">
			购物车
			<span class="edit">编辑</span>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
*{
	padding:0;
	margin:0;
}
	#shopcar{
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.Header{
		height:44px;
		color: #914e07;
		background: yellow;
	}
	.Header .edit{
		font-size: 18px;
		position: absolute;
		right:0;
	}
	
</style>