<template>
	<div id="mine">
		<div class="Header">
			个人中心
			
		</div>
		<div class="person" @click="changePage()">
			<img src="http://img.haoshiqi.net/avatar/avatar_default.png@120w_120h_90Q" />
			<div class="tel">135845655</div>
			<p class="addressmanage">账户、收货地址管理  ></p>
		</div>
		
		<div class="dingdan">
			<div class="wodedingdan">
				
				<span></span>
				<span>我的订单</span>
				<span>查看全部订单  ></span>
			</div>
			<ul>
				<li>
					<span></span>
					<p>待付款</p>
				</li>
				<li>
					<span></span>
					<p>待收货</p>
				</li>
				<li>
					<span></span>
					<p>待评价</p>
				</li>
				<li>
					<span></span>
					<p>售后</p>
				</li>
			</ul>
			
		</div>
		<div class="activity">
				<p class="coupon">
					<span></span>
					我的优惠卷
					<span></span>
				</p>
				<p class="tour">
					<span></span>
					我的拼团
					<span></span>
				</p>
				<p class="praise">
					<span></span>
					我的抽奖
					<span></span>
				</p>
			</div>
			
			<div class="service">
				<p class="cellct">
					<span></span>
					我的收藏
					<span></span>
				</p>
				<p class="server">
					<span></span>
					好食期的客服
					<span></span>
				</p>
				
			</div>
	</div>
</template>
<script>

import router from "../router"
	export default {
		data(){
			return{
				
			}
		},
		mounted(){
			
		},
		methods:{
			changePage(){
				console.log("pp")
				router.push("/wode/userinfo")
			}
		}
	}
</script>
<style scoped>
#mine{
		background: #f8f8f8;
		
	}
	.Header{
		background: white;
		text-align: center;
		line-height:44px;
		height:44px;
		color: #914e07;
		background: rgba(255,238,17,.9);
		font-size: 18px;
	}
	.person{
		background: white;
		border-bottom: 1px solid #ccc;
		position: relative;
		height:96px;
		width:100%;
		padding:10px 16px;
		
		vertical-align: middle;
	}
	.person img{
		width:60px;
		height:60px;
		border-radius: 50%;
		    border: 0;
    	display: inline-block;
	}
	.person .tel{
		display: inline-block;
		    color: #252525;
		    padding:8px;
		    font-size: 18px;
	}
	.person .addressmanage{
		position: absolute;
		bottom: 0;
		right:16px;
	}
	.dingdan{
		background: white;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		margin-top:10px;
	}
	.dingdan .wodedingdan{
		height:48px;
		width: 100%;
		padding:8px 10px;
		border-bottom: 1px solid #ccc;
		line-height:32px;
		font-size: 15px;
	}
	.dingdan .wodedingdan span:last-child{
		float: right;
	}
	.dingdan ul{
		margin-bottom: 0px;
		overflow: hidden;
		display: flex;
		padding:0 16px;
		height:83px;
	}
	.dingdan ul li{
		list-style: none;
		flex: 1;
		text-align: center;
	}
	.activity,.service{
		background: white;
		margin-top:10px;
		overflow: hidden;
		border-top: 1px solid #ccc;
	}
	.activity p,.service p{
		border-bottom: 1px solid #ccc;
		height:40px;
		padding:8px 16px;
		line-height:24px;
		margin-bottom: 0;
	}
</style>