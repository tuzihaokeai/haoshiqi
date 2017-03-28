<template>
	<div id="mine">
		<div class="Header">
			<span class="back" @click="backClick()">返回</span>
			我的账户
			
		</div>
		<div class="person">
			<div class="tel">头像</div>
			<span class="r">></span>
			<img class="r" src="http://img.haoshiqi.net/avatar/avatar_default.png@120w_120h_90Q" />
	
		</div>
		
		
		<div class="userInfo">
				<p class="name">
					
					昵称
					<span class="r">{{status}}</span>
					<span class="r"></span>
				</p>
				<p class="brith">
					
					生日
					<span></span>
				</p>
				<p class="telphone">
					
					手机号
					<span class="r"></span>
					<span class="r">{{status}}</span>
				</p>
			</div>
			
			<div class="safe">
				<p class="address">
					地址管理
					<span></span>
					
					<span></span>
				</p>
				<p class="account">
					账户安全
					<span class="r"></span>
					
					<span class="r">可设置密码</span>
				</p>
				
			</div>
	</div>
</template>

<script>
import css from '../bootstrap/css/bootstrap.css'
import router from "../router"
	export default {
		data(){
			return{
				status:''
			}
		},
		created(){
			if(Cookie.getCookie("userID")){
				this.status=Cookie.getCookie("userID")
			}else{
				
			}
		},
		methods:{
			backClick(){
				router.push("/wode/mine")
			}
		}
	}
</script>
<style scoped>
.l{
	float: left;
}
.r{
	float: right;
}
.back{
	position: absolute;
	top:2px;
	left:10px
}
#mine{
		background: #f8f8f8;
		
	}
	.Header{
		position: relative;
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
	
	.userInfo,.safe{
		background: white;
		margin-top:10px;
		overflow: hidden;
		border-top: 1px solid #ccc;
	}
	
	.userInfo p,.safe p{
		border-bottom: 1px solid #ccc;
		height:40px;
		padding:8px 16px;
		line-height:24px;
		margin-bottom: 0;
	}
</style>