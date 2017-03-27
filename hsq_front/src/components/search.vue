<template>
	<div id="categorydetail">
		<div class="detail_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="search" @click="searchClick()">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				<input type="text" placeholder="搜索您想找的商品"/>
			</div>
  			<p id="home" @click="homeClick()">搜索</p>
		</div>
		<!------->
		<div class="search_content">
			
			<div class="page-search">
			      <h4>热门搜索</h4>
			      <ul class="hotsearch">
			          <li class="text_li">芒果</li>
	
			          <li class="text_li">提拉米苏</li>
			       
			          <li class="text_li">牛奶</li>
			          
			          <li class="text_li">蛋糕</li>
			          
			          <li class="text_li" >罐头</li>
			          
			          <li class="text_li">丽芝士</li>
			      </ul>
			  </div>
			  
			  <div class="app_history">
			      <h4>最近搜过</h4>
			      <ul class="history-list">
			         <li class="last">暂无搜索历史</li>
			      </ul>
			  </div>
			  
			</div>
			
			
		</div>
		
		
	<!------->
	
	</div>
</template>
<script>
	
	import router from "../router"
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.detail_header{
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
		cursor: pointer;
		flex:1;
	}
	#home{
	    height: 44px;
	    line-height: 44px;
	    display: inline-block;
	    text-align: center;
	    font-size: 18px;
	    flex:1;
	    color:#914e07;
	    font-size: 14px;
	    margin-left: 4%;
	}
	.search{
		position: relative;
	    height: 28px;
	    flex: 4;
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
	    position: absolute;
	    left:20%;
	    top: 0;
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
	.search_content{
		margin-top: 40px;
	}
	.page-search h4{
		padding: 12px;
	    margin-bottom: 0;
	    font-weight: 400;
	    color: #b4b4b4;
	}
	.hotsearch{
		background: #fff;
    	border-top: 1.2px solid #e4e4e4;
    	display: flex;
	}
	
</style>