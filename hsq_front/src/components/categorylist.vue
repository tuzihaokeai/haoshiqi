<template>
	<div id="categorylist">
		<div class="header" style="height: 44px;">
			<div class="search">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				<input type="text" placeholder="搜索您想找的商品"/>
			</div>
		</div>
		
		<!------categorylist----->
		<div class="list_content">  
		    <div class="category_div">
		      <h4 class="category_h4" @click="handelClick()">
		      	<i class="dot"></i>
		      	休闲零食 
		      	<!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
		      </h4>
		      <ul class="category_ul">
		        
		          <li class="category_li">饼干糕点</li>
		        
		          <li class="category_li">坚果炒货</li>
		        
		          <li class="category_li">糖果巧克力</li>
		        
		          <li class="category_li">膨化食品</li>
		        
		          <li class="category_li">肉脯干卤味</li>
		        
		      </ul>
		    </div>
		    
		    <div class="category_div">
		      <h4 class="category_h4">饮料冲调<i class="dot"></i></h4>
		      <ul class="category_ul">
		        
		          <li class="category_li">咖啡茶饮</li>
		        
		          <li class="category_li">水/饮料</li>
		        
		          <li class="category_li">含乳饮品</li>
		        
		          <li class="category_li">果蔬汁/蜂蜜冲饮</li>
		        
		          <li class="category_li">酒</li>
		        
		      </ul>
		    </div>
		    
		    <div class="category_div">
		      <h4 class="category_h4">速食调味 <i class="iconfont icon-link fr"></i></h4>
		      <ul class="category_ul">
		        
		          <li class="category_li">罐头速食</li>
		        
		          <li class="category_li">调味酱料</li>
		        
		          <li class="category_li">粮油</li>
		        
		      </ul>
		    </div>
		</div>
		<!---->		
		
	</div>
</template>
<script>
	import css from '../bootstrap/css/bootstrap.css';
	import router from "../router"
	export default {
		data(){
			return{
				
			}
		},   
		methods:{
			handelClick(){
				router.push("/category/categorydetail")
			}
		}
		
	}
</script>
<style scoped>
	body{
		background:#f8f8f8;
	}
	.header{
		position: fixed;
	    z-index: 100;
	    top: 0;
	    left: 0;
	    width: 100%;
	    background-color: rgba(255,238,17,.9);
    	color: #914e07;
	}
	.search{
		position: relative;
	    height: 28px;
	    width: 90%;
	    margin: 7px auto;
	    background:#FFFFFF;
	    border-radius: 2%;
	}
	.search input{
		border:none;
		height: 28px;
		line-height:28px;
	    width: 85%;
	    color: #b4b4b4;
	}
	.search span{
		display:block;
		float:left;
		height: 28px;
		line-height:26px;
	    width: 5%;
	    margin-left:3%;
	    color: #b4b4b4;
	}
	.list_content{
		margin-top: 50px;  
	}
	.category_div{
		background:#FFFFFF;
	}
	
    .category_h4{
    	float: left;
    	height:35px;
    	width: 100%;
    	line-height: 35px;
	    font-weight: 400;
	    font-size: 14px;
	    background: #fff;
	    color: #252525;
	    margin-top: 0px;
	    border-bottom: 1px solid #ccc;
    }
     .category_h4 i{
     	display: block;
     	float: left;
     	width:5px;
     	height:5px;
     	border-radius: 50%;
     	background: #FF6600;
     	margin-left: 5%;
     	margin-right: 3%;
     	margin-top: 15px;
     }
     .category_h4 span{
     	display: block;
     	float: left;
     	width:20%;
     	height:35px;
     	line-height:35px;
     	margin-left: 35%;
     	margin-right: 3%;
     	color:#CCCCCC;
     	font-weight: 10;
     }
     .category_ul{
     	padding: 0px 0 0 5px;
    	margin-bottom: 5px;
    	list-style: none;
    	display:flex;
     }
     .category_ul li{
     	/*flex: 1;*/
    	list-style: none;
    	width: auto;
	    height: auto;
	    line-height: 14px;
	    padding: 5px;
	    margin: 0 5px 5px 0;
	    border: 1px solid #e4e4e4;
	    border-radius: 2px;
	    font-size: 12px;
     }
</style>