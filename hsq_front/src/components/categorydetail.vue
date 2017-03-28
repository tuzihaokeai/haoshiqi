<template>
	<div id="categorydetail">
		<div class="detail_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="title"> {{searchText}}</div>
  			<span class="glyphicon glyphicon-home" aria-hidden="true" id="home" @click="homeClick()"></span>
		</div>
		<!------->
		<div class="list_div">
			<mt-loadmore :bottom-method="loadBottom"  ref="loadmore">
			<ul class="list_ul">
				<li class="list_li" v-for="(data,index) in goodsLi" @click="handleChange(data.main_sku)">
					<div class="item">
					  <div class="img">
					  	<img :src="data.main_sku_pic"/>
					  </div>
					  <div class="text">
					    <h3>{{data.name}}</h3>
					    <p class="price_p">   
					      <span class="tag" style="background:#FF5555;">{{data.tags[0]?data.tags[0].text:''}}</span>
					      <span class="price">¥ <span class="price_num J_price_box">{{data.price}}</span></span>
					      <del class="old_price">{{data.market_price}}</del>
					    </p>
					    <p class="shopcar"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></p>
					  </div>
					</div>
<!------------------------------->
				</li>
				
			</ul>
			</mt-loadmore>
		</div>
		
		
	<!------->
	</div>
</template>
<script>
	import css from '../bootstrap/css/bootstrap.css';
	import router from "../router"
	export default {
		data(){
			return{
				searchText:this.$route.params.searchItem,
				goodsLi:[],
				imagepath:[],
				a:1
			}
		},
		mounted(){
			console.log(this.searchText);
			this.$http.get("http://localhost:3000/listapi/itemssearch",{
					params:{
						searchKey:this.searchText
					}
					
				}).then(res=>{
					console.log(111);
					console.log(res.body);
//					router.push("/category/categorydetail")
					this.goodsLi=res.body.data.list
				},error=>{
					
				})
		},
		methods:{
			backClick(){
				router.push("/category/categorylist")
			},
			homeClick(){
				router.push("/index")
			},
			handleChange(goodsID){
				console.log(goodsID)
//				router.push(`/category/detail/${goodsID}`)
				router.push(`/category/detail/${goodsID}`)
			},
			loadBottom() {
				
				this.a=++this.a;
				//console.log(this.a)
			//this.allLoaded = true;// 若数据已全部获取完毕
			this.$refs.loadmore.onBottomLoaded();
			this.loadingMore(this.a);
			  
			},
			loadingMore(num){
					console.log(num)
				this.$http.get("http://localhost:3000/listapi/itemssearch",{
					params:{
						searchKey:this.searchText,
						index:num
					}
				}).then(res=>{
			
				console.log(res.body.data)
//					this.indexlist=res.body.data.list
	
				
				},error=>{
					
				})
			}
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
		padding: 0 10px;
		cursor: pointer;
	}
	#home{
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		width: 44px;
	    height: 44px;
	    line-height: 44px;
	    display: inline-block;
	    text-align: center;
	    font-size: 18px;
	}
	.title{
		font-size: 18px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    height: 44px;
	    line-height: 44px;
	    position: absolute;
	    left: 88px;
	    right: 88px;
	}
	.list_div{
		margin-top: 50px;
	}
	.item{
		border-bottom: 4px solid #f1f1f1;
    	overflow: hidden;
    	position: relative;
	    padding: 12px;
	    background: #fff;
	}
	.img{
		float: left;
	    position: relative;
	    display: inline;
	    overflow: hidden;
	    margin-right: 12px;
	    width: 100px;
	    height: 100px;
	}
	.img img{
		width: 100%;
	    height: 100%;
	    margin: 0;
	    border: 0;
    	vertical-align: middle;
	}
	.text{
		overflow: hidden;
	    font-size: 14px;
	    color: #959595;
	}
	.text h3{
		overflow: hidden;
	    margin-bottom: 20px;
	    height: 35px;
	    font-size: 14px;
	    font-weight: 400;
	   /* line-height: 1.2;*/
	    color: #252525;
	    margin:0;
	}
	.price_p{
		margin-top: 20px;
		float: left;
	}
	.tag {
	    padding: 0 3px;
	    margin-right: 3px;
	    border-radius: 2px;
	    color: #fff;
	    vertical-align: 3px;
	}
	.price {
	    min-width: 70px;
	    white-space: nowrap;
	    display: inline-block;
	    font-style: normal;
	    font-size: 20px;
	    color: #f55;
	}
	.price i {
	    font-size: 14px;
	    font-style: normal;
	}
	.old_price{
		color: #b4b4b4;
		text-decoration: line-through;
		font-size: 12px;
	}
	.shopcar{
		float: right;
		position: absolute;
	    right: 3px;
	    bottom: 0;
	    width: 32px;
	    height: 32px;
	    /*border: .625rem solid transparent;
	    -webkit-box-sizing: content-box;*/
	    box-sizing: content-box;   
	}
	.shopcar span{
		display: block;
	    width: 100%;
	    height: 100%;
	    line-height: 32px;
	    background: #f55;
	    border-radius: 50%;
	    color: #fff;
	    font-size: 16px;
	    text-align: center;
	}
</style>