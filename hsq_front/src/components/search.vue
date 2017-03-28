<template>
	<div id="categorydetail">
		<div class="detail_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="search" @click="inputClick()">
				<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
				<input type="text" placeholder="搜索您想找的商品" v-model="searchText"/>
			</div>
  			<p id="home" @click="searchClick(searchText)">搜索</p>
		</div>
		<!------->
		<div class="search_content">
			
			<div class="page-search">
			      <h4>热门搜索</h4>
			      <ul class="hotsearch">
			          <li class="text_li" v-for="(data,index) in hotList" @click="hotClick(data.value)">{{data.value}}</li>
			      </ul>
			  </div>
			  
			  <div class="app_history">
			      <h4>最近搜过</h4>
			      <ul class="history-list">
			      	 <li class="history_text"></li>
			         <li class="last">暂无搜索历史</li>
			        <!-- <p>{{searchText}}</p>-->
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
				hotList:[],
				searchText:""
			}
		},
		mounted(){
			this.$http.get("http://localhost:3000/listapi/hotsearch").then(res=>{

				this.hotList=res.body.data.list;
////			this.goodsList=res.body.data.list
//			console.log(this.categorylist);
//			for(var i=0;i<res.body.data.list.length;i++){
//				this.goodsList.push(res.body.data.list[i].subCategories)
//			}
				console.log(res.body.data.list)
				
			},error=>{
				
			})
		},  
		methods:{
			backClick(){
				router.go(-1)
			},
			inputClick(){
				
			},
			searchClick(text){
//					console.log(text)
				router.push(`/category/categorydetail/${text}`)

			},
			hotClick(clickvalue){
				console.log(clickvalue);
				router.push(`/category/categorydetail/${clickvalue}`)
			}
		}
	}
//	searchtag%3D%E8%8A%92%E6%9E%9C%26backLevel%3D-2%26channel_id%3Dh5&searchTag=%E8%8A%92%E6%9E%9C&q=%E8%8A%92%E6%9E%9C&
//	searchtag%3D%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F%26backLevel%3D-2%26channel_id%3Dh5&searchTag=%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F&q=%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F&
//	searchtag=芒果&backLevel=-2&channel_id=h5&searchTag=芒果&q=芒果&"
//	searchtag=提拉米苏&backLevel=-2&channel_id=h5&searchTag=提拉米苏&q=提拉米苏&"
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
    	/*display: flex;*/
    	width:100%;
	}
	.text_li{
		position: relative;
	    float: left;
	    width: 33%;
	    height: 40px;
	    line-height: 40px;
	    list-style: none;
	    text-align: center;
	    border-bottom: 1.2px solid #e4e4e4;
	}
	.app_history{
		margin-top: 85px;
	}
	.app_history h4{
		padding: .625rem;
	    margin-bottom: 0;
	    font-weight: 400;
	    color: #b4b4b4;
	}
	.last{
		list-style: none;
		width: 100%;
		height: 40px;
	    line-height: 40px;
	    list-style: none;
	    text-align: center;
	}
	/*.history_text{
		position: relative;
	    float: left;
	    width: 33%;
	    height: 40px;
	    line-height: 40px;
	    list-style: none;
	    text-align: center;
	    border-bottom: 1.2px solid #e4e4e4;
	}*/
</style>