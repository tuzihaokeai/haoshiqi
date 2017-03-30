<template>
	
	<div id="login">
		<div class="Header">
			<span class="back" @click="backClick()">返回</span>
			登录/注册	
		</div>
		
		<div class="title">
			
			<h3>好食期——专做食品特卖</h3>
			
		</div>
		<ul class="tab">
				<li data-index="0" @click="changeModule('0')" :class="currentIndex==0?'active':''">登录</li>
				<li data-index="1" @click="changeModule('1')" :class="currentIndex==1?'active':''">注册</li>
		</ul>
		<div id="content1" v-if="show">
			<p>账号      :<input type="text" placeholder="请输入账号" v-model="username"/></p>
			<p>密码      :<input type="password" placeholder="请输入密码" v-model="password"/></p>
			<p><button @click="login()">登录</button></p>
		</div>
		<div id="content2" v-else>
			<p>账号       :<input type="text" placeholder="请输入手机号或邮箱" v-model="zhanghao"/></p>
			<p>密码       :<input type="password" placeholder="请输入密码" v-model="mima"/></p>
			<p>确认密码:<input type="password" placeholder="请确认输入密码" v-model="querenmima"/></p>
			<p><button @click="register()">注册</button></p>
		</div>
	</div>
</template>


<script>
import Url from "../address"
import $ from "jquery"
import css from '../bootstrap/css/bootstrap.css'
import router from "../router"
	export default {
		data(){
			return{
				currentIndex:0,
				show:true,
				username:"",
				password:"",
				zhanghao:"",
				mima:"",
				querenmima:""
			}
		},
		
		mounted(){
			
		},
	
		methods:{
		
			changeModule(index){
				
				this.currentIndex = index;
				if(index==0){
					this.show=true
					
				}else{
					this.show=false
					
				}
				
			},
			backClick(){
				router.push("/wode/mine")
			},
			register(){
				$.ajax({
					url:"http://"+Url.url+"/php/register.php",
					data:{
						tel:this.zhanghao,
						psw:this.mima
					},
					type:"post",
					success:(res)=>{
						console.log(res)
						
					}
				})
//				this.$http.post("http://localhost/php/register.php",{
//						tel:this.zhanghao,
//						psw:this.mima					
//				}).then(res=>{
//					console.log(res)
//				},error=>{
//					console.log(error)
//				})
			},
			login(){
				$.ajax({
					
					url:"http://"+Url.url+"/php/login.php",
					data:{
						tel:this.username,
						psw:this.password
					},
					type:"post",
					success:(res)=>{
						console.log(res)
						if(res==0){
							console.log("iii")
						}else{
							Cookie.setCookie("userID",this.username,5)
							router.push("/index/list")
							
						}
						
					},
					error:(res)=>{
						
					}
				})
//				this.$http.post("http://localhost/php/login.php",{
//						tel:this.username,
//						psw:this.password					
//				}).then(res=>{
//					console.log(res)
//				},error=>{
//					console.log(error)
//				})
		},

    	
		}
	}
	//kianger
	
</script>


<style scoped>
	html,body{
	height:100%;
	width:100%;
}
*{
	padding:0;
	margin:0;
}
	#login{
		height:100%;
		display: flex;
		flex-direction: column;
		
	}
	.Header{
		text-align: center;
		line-height:44px;
		height:44px;
		color: #914e07;
		background: rgba(255,238,17,.9);
		font-size: 18px;
	}
	.Header .back{
		font-size: 14px;
		position: absolute;
		left:10px;
		top:0px
	}

	#login .title{
		width:100%;
		height:152px;
		background:#ccc;
	}
	#login .title h3{
		color:white;
		line-height: 152px;
		text-align: center;
	}
	#login .tab{
		display: flex;
		width: 100%;
	}
	#login .tab li{
		font-size: 16px;
		list-style: none;
		height:40px;
		line-height: 40px;
		flex: 1;
		width: 50%;
		text-align: center;
	}
	#login .tab li.active{
		color:#FF5555;
		border-bottom: 2px solid  #FF5555;
	}
	#login #content1 p,#login #content2 p{
		width:100%;
		height:56px;
		padding:8px 30px;
		font-size: 18px;
		overflow: hidden;
	}
	#login #content1 p input,#login #content2 p input{
		width:70%;
		border:1px solid #ccc;
		float: right;
	}
	#login #content1 p:last-child,#login #content2 p:last-child{
		text-align: center;
	}
	#login #content1 p:last-child button,#login #content2 p:last-child button{
		width:100%;
		border:0;
		height:40px;
		background: #FF5555;color: white;
	}
</style>