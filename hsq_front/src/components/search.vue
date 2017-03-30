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
					  <li class="history_text" v-for="(data,index) in historyList" data-key="data.index">
					      <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
					      {{data}}
					  </li>
				   </ul>
			      	 	
			 
			   	   <li class="last" v-show="isshow">暂无搜索历史</li>
			      </ul>
			  </div>
			  
			</div>
			
			
		</div>
		
		
	<!------->
	
	</div>
</template>
<script>
	import Url from "../address"
	import router from "../router"
	export default {
		data(){
			return{
				hotList:[],
				searchText:"",
				info:[],
				item:"",
				infoList:[],
				isshow:true,
				itemList:"",
				historyList:[],
				a:""
			}
		},
		
		mounted(){
			this.$http.get("http://"+Url.url+":3000/listapi/hotsearch").then(res=>{

				this.hotList=res.body.data.list;
				
			},error=>{
				
			})
			
			//console.log(JSON.parse(localStorage.getItem("info")))
			this.historyList=[...JSON.parse(localStorage.getItem("info"))]
				//console.log(this.historyList)
			
			
		}, 
		
		methods:{
			backClick(){
				router.go(-1)
			},
			inputClick(){
				
			},
			searchClick(text){

				if(!localStorage.getItem("info")){
					localStorage.setItem("info",JSON.stringify([text]));
				}else{
					this.infoList=[...JSON.parse(localStorage.getItem("info"))]
					localStorage.setItem("info",JSON.stringify([...this.infoList,text]));
				}
				
				
				router.push(`/category/categorydetail/${text}`)

			},
			hotClick(clickvalue){
				//console.log(clickvalue);
				
				router.push(`/category/categorydetail/${clickvalue}`)
			}
		},

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
	.history-list{
		list-style: none;
		background: #fff;
   		border-top: 1.2px solid #e4e4e4;
	}
	.history_text{
		float: none;
	    width: 100%;
	    margin-left: 20px;
	    border-bottom: 1.2px solid #e4e4e4;
	    text-align: left;
	    color: #b4b4b4;
	   /* text-indent: -10px;*/
	}
	.history_text span{
		dispalay:block;
		float: left;
		margin-right: 5px;
	    color: #b4b4b4;
	    font-weight: 100;
	}
</style>
