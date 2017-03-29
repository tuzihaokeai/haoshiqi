<template>
	<div id="list">
			<div class="portal-header">
      <span  class="portal-logo"></span><input type="text" placeholder="搜索您想要找的商品" class="search" @click="handelSearch()"/>
      <div class="portal-location">上海市<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span></div>
    	</div>
    	<div class="banner"></div>
    	<div class="protal-icon">
    		<ul>
    		<li v-for="(data,index) in iconlist" :key="index">
    			<img :src="imgpath[index]" />
    			<p>{{data.label}}</p>
    		</li>
    		</ul>
    	</div>
    	<ul class="extension-item">
    		<li><img src="../assets/1.jpg"/></li>
    		<li><img src="../assets/2.jpg"/></li>
    		<li><img src="../assets/3.jpg"/></li>
    		<li><img src="../assets/4.jpg"/></li>
    		<li><img src="../assets/5.jpg"/></li>
    	</ul>
    	<mt-loadmore :bottom-method="loadBottom"  ref="loadmore">
    	<ul class="index_list">
    		<li v-for="(data,index) in indexlist" >
    			<img :src="imagepath[index]" @click="handleChange(index)"/>
    			<div class="index_text" >
				<h3 @click="handleChange(index)">{{data.name}}</h3>
				<p @click="handleChange(index)">
					<span class="tag" style="background: #FF5555;" :class="discount[index]==10.0?'activeclass':''">{{discount[index]}}折</span>
				  <dfn class="index_price">¥ <span class="price_box">{{priceArr[index]}}</span></dfn>
				  <del class="del_price">{{oldArr[index]}}</del>
				</p>
					<p class="shopcar" @click="addShopcar(index)"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></p>
				<p>

				  </p>
  				</div>
    		</li>

    	</ul>
    	</mt-loadmore>
	</div>
</template>
<script>
import Vue from 'vue'
import router from '../router'
import css from '../bootstrap/css/bootstrap.css';
import VueNumeric from 'vue-numeric';

	export default {
		data(){
			return{
				show:true,
				iconlist:[],
				imgpath:[],
				indexlist:[],
				imagepath:[],
				a:1,
				num:'',
				priceArray:[],
				priceArr:[],
				oldprice:'',
				oldArray:[],
				oldArr:[],
				goodsId:[],
				Number:1,
				name:[],
				today_discount:[],
				discount:[]
			}
		},

		methods:{
			handelSearch(){
				router.push("/index/search")
			},
			loadBottom() {
				
				this.a=++this.a;
				//console.log(this.a)
			//this.allLoaded = true;// 若数据已全部获取完毕
			this.$refs.loadmore.onBottomLoaded();
			this.loadingmore(this.a);
			  
			},
			loadingmore(index){
					console.log(index)
				this.$http.get("http://localhost:3000/homeapi/product",{
					params:{
						num:index
					}
				}).then(res=>{
			
			console.log(res.body.data.list)
			this.indexlist=[...this.indexlist,...res.body.data.list]

			//this.price=res.body.data.list.lowest_price
			
			res.body.data.list.map(item=>{
				this.name.push(item.name)
				this.priceArray.push(item.lowest_price)
				this.oldArray.push(item.market_price)
				this.today_discount.push(item.today_discount)
				//item.lowest_price
				
		
			})
			console.log(this.priceArray)
			for(var x=0;x<this.priceArray.length;x++){
				var a=this.priceArray[x];
				var b=a.toString();
				var c=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
				//console.log(c)
				this.priceArr.push(c)
				
			}
			for(var y=0;y<this.oldArray.length;y++){
				var a=this.oldArray[y];
				var b=a.toString();
				var c=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
				//console.log(c)
				this.oldArr.push(c)
				
			}
				for(var x=0;x<this.today_discount.length;x++){
				var a=this.today_discount[x];
				var b=a.toString();
				var c=b.substring(0,b.length-1)+"."+b.substring(b.length-1,b.length)
				//console.log(c)
				this.discount.push(c)
			}

				//console.log(this.priceArr)
			for(var i=0;i<res.body.data.list.length;i++){
				this.goodsId.push(res.body.data.list[i].skuInfo.skuId)
				this.imagepath.push(res.body.data.list[i].skuInfo.skuPic)
			}
		},error=>{
			
			
		})
			},
			handleChange(index){
				console.log(this.indexlist[index].skuInfo.id)
				router.push(`/index/detail/${this.indexlist[index].skuInfo.id}`)
//				router.push({name:'detail',params:{id:goodsId}})
			},
			addShopcar(index){
			
			if(Cookie.getCookie("userID")){
				this.$http.post("http://localhost/php/addShopcar.php",{
						username:Cookie.getCookie("userID"),
						//shopname:,
						goodsname:this.name[index],
						newprice:this.priceArr[index],
						oldprice:this.oldArr[index],
						number:Number,
						//overgoods:,
						//goodsimg:
						
				}).then(res=>{
					
					console.log(res)
				},error=>{
					console.log(error)
				})
			}else{
				router.push("/wode/login")
			}

		}

		},
		mounted(){		
			this.$http.get("http://localhost:3000/homeapi/icon").then(res=>{
			
			//console.log(res.body)
			this.iconlist=res.body.data.subButtonList;
			for(var i=0;i<res.body.data.subButtonList.length;i++){
				this.imgpath.push(res.body.data.subButtonList[i].icon)
			}
		},error=>{
			
		}),
		this.$http.get("http://localhost:3000/homeapi/product",{num:index}).then(res=>{
			
			console.log(res.body.data.list)
			this.indexlist=res.body.data.list
			res.body.data.list.map(item=>{
				this.name.push(item.name)
				this.priceArray.push(item.lowest_price)
				this.oldArray.push(item.market_price)
				this.today_discount.push(item.today_discount)
		
			})
			//console.log(this.priceArray)
			for(var x=0;x<this.priceArray.length;x++){
				var a=this.priceArray[x];
				var b=a.toString();
				var c=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
				//console.log(c)
				this.priceArr.push(c)				
			}
			for(var y=0;y<this.oldArray.length;y++){
				var a=this.oldArray[y];
				var b=a.toString();
				var c=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
				//console.log(c)
				this.oldArr.push(c)
			}	
			
			
			for(var x=0;x<this.today_discount.length;x++){
				var a=this.today_discount[x];
				var b=a.toString();
				var c=b.substring(0,b.length-1)+"."+b.substring(b.length-1,b.length)
				//console.log(c)
				this.discount.push(c)
				
	
			}
			console.log(this.discount)
			

			for(var i=0;i<res.body.data.list.length;i++){
				this.imagepath.push(res.body.data.list[i].skuInfo.skuPic)
			}
		},error=>{
			
		})

	},
	
	components:{
		VueNumeric
	}
	}
</script>
<style scoped>
.activeclass{
	display: none;
}
	*{
		margin: 0;
		padding: 0;
	}
	.portal-header{
	height: 50px;
    padding:10px 80px;
    background: #fe1;
	}
	.portal-logo{
	position: absolute;
    top: 15px;
    left: 5px;
    width: 70px;
    height: 22px;
    background: url(../assets/logo.png) top left no-repeat;
    background-size: auto 100%;
	}
	.search{
	display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
    line-height: 30px;
    border: none;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
	}
	.portal-location{
	position: absolute;
    top: 15px;
    right: 15px;
    color: #914e07;
    font-weight: 700;
    z-index: 1000
	}
	.banner{
		background: url(../assets/banner.jpg) center no-repeat;
		height: 210px;
		background-size: 100%;
	}
	.protal-icon{

	}
	.protal-icon li{
	float: left;
    width: 20%;
    padding: 10px 0;
    list-style: none;
    text-align: center;
    border-bottom: 3px solid lightgrey;
	} 
	.protal-icon li img{
		width: 40px;
		height: 40px;
		display: block;
	border: 0;
    position: relative;
    left: 22%;
    margin-bottom: 10px;
	}
	.extension-item li img{
		height: 175px;
		width: 100%;
		border-bottom: 3px solid lightgrey;
	}
	.index_list li{
	border-bottom: 5px solid #f1f1f1;
    overflow: hidden;
    padding: 10px;
    position: relative;
	}
	.index_list li img{
		float: left;
		width: 100px;
		height: 100px;
		margin-right: 10px;
	}
	.index_list li .index_text{
		overflow: hidden;
	    font-size: 14px;
	    color: #959595;
	}
	.index_text h3{
		overflow: hidden;
	    font-size: 14px;
	    color: #252525;
	    margin-bottom: 20px;
	}
	.tag {
	    padding: 0 3px;
	    margin-right: 3px;
	    border-radius: 2px;
	    color: #fff;
	    vertical-align: 3px;
	}
	.index_price {
	    min-width: 70px;
	    white-space: nowrap;
	    display: inline-block;
	    font-style: normal;
	    font-size: 20px;
	    color: #f55;
	}
	.index_list li .del_price{
    color: #b4b4b4;
   	font-size: 12px;
	}
	.shopcar{
		position: absolute;
	    right: 15px;
	    bottom: 5px;
	    width: 32px;
	    height: 32px;
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