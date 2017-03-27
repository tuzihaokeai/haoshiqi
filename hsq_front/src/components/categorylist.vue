<template>
	<div id="categorylist">
		<div class="header" style="height: 44px;">
			<div class="search" @click="handelSearch()">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				<input type="text" placeholder="搜索您想找的商品"/>
			</div>
		</div>
		
		<!------categorylist----->
		<div class="list_content">  
		    <div class="category_div"  v-for="(categoryitem,categoryindex) in categorylist">
		      <h4 class="category_h4" @click="handelClick()">
		      	<i class="dot"></i>
		      	{{categoryitem.name}}
		      </h4>
		      <ul class="category_ul">
		    
		          <li class="category_li" v-for="(item,index) in goodsList[categoryindex]">{{item.name}}</li>
		    
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
				categorylist:[],
				goodsList:[]
			}
		},
		mounted(){
			this.$http.get("http://localhost:3000/listapi/category").then(res=>{

			this.categorylist=res.body.data.list;
//			this.goodsList=res.body.data.list
			console.log(this.categorylist);
			for(var i=0;i<res.body.data.list.length;i++){
				this.goodsList.push(res.body.data.list[i].subCategories)
			}
				console.log(this.goodsList)
				
			},error=>{
				
			})
		},  
		methods:{
			handelClick(){
				router.push("/category/categorydetail")
			},
			handelSearch(){
				router.push("/category/search")
			}
		},
		
		
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