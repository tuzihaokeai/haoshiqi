<template>
	<div id="detail">
		<div class="Header" style="position: fixed;top: 0;left: 0;">
			<span class="back"  @click="backClick()">返回</span>
			商品详情
			
			<span class="glyphicon glyphicon-home" aria-hidden="true" id="home" @click="homeClick()"></span>
		</div>
		
		<div class="img">
			<img v-for="(data,index) in imgpath" :src="imgpath[index]" />
		</div>
		<div class="goodsinfo">
			<div class="goodsname">
				{{name}}
			</div>
			<div class="goodsprice">
				<strong>￥<span>{{lowest_price}}</span></strong>
				<span class="spanprice">价格￥<del>{{market_price}}</del></span>
				<span class="spannum">库存<b>2000</b>件</span>
			</div>
			<p class="getcoupons">
					
					<span>领券:</span>
					<span class="r">123846516</span>
					<span class="r"></span>
			</p>
			<p class="alreadychoose">
					
					已选:
					<span class="r">123846516</span>
					<span class="r"></span>
			</p>
		</div>
		
		<div class="send">
			<div class="sendaddress">
				<p>送至   : <span>上海市<i></i></span></p>
				<span class="baoyou"></span>
			</div>
			<span class="ib-label">
				<img class="icon-label" :src="labels.icon"> 
				{{labels.text}}
			</span>
			<ul class="baozheng">
				<li v-for="(data,index) in baozhengList">
					<img :src="data.icon" />
					<p>{{data.text}}</p>
				</li>
			</ul>
		</div>
		<div class="dian">
			
	      <img :src="logo" :alt="shopname">
	      <div class="l">
		      <h5>{{shopname}}</h5>
		      <p>{{province}}&nbsp;{{city}}</p>
	      </div>
	      <span class="go_shop">进店逛逛</span>
	      
	        <p class="merchant-notice"><label for="">店铺公告：</label>{{notice}}</p>
	      
  
		
			
		</div>
		<div class="detailserver">
			<ul>
				<li data-index="0" @click="lichangeClick('0')" :class="currentIndex==0?'active':''">图片详情</li>
				<li data-index="1" @click="lichangeClick('1')" :class="currentIndex==1?'active':''">服务保障</li>
			</ul>
		</div>
		<div id="content1" :class="currentIndex==0?'':'contentactive'">
		<img v-for="(data,index) in imgpath" :src="imgpath[index+1]" />
		</div>
		<div id="content2" :class="currentIndex==1?'':'contentactive'">
			<ul class="detail-service">
				<li>
					<b>100%正品</b>
					<span>所有商家均经过严格资质审核，请放心购买；</span>
				</li>
				<li>
					<b>售后保障</b>
					<span>商品存在质量问题，可以在确认收货后申请退款，并且不用退货；
						<br>质量问题包括：过期，食品损坏、变质，包装损坏等</span>
				</li>
				<li>
					<b>发货承诺</b>
					<span>每个商家发货时间不同，具体请看商品详情页内的承诺时间，超过承诺时间未发货可取消订单。
					</span>
				</li>
				<li>
					<b>PICC安全保障</b>
					<span>您购买的每一件商品都由中国人民保险集团股份有限公司（PICC）为您承保。</span>
				</li>
				<li>
					<b>标示价格说明</b>
					<span>被划去的“价格”指国内大陆地区知名的主流电商平台，同品牌同种等量规格商品，在本商品上架同时的标示价格，或厂家、供应商指导价，商品实际售价为本平台实时销售价格。</span>
				</li>
			</ul>
		</div>
		<!------->
		<div class="fixed_footer">
		    <ul class="order-buy">
		      <li class="minli" active-class="liAcitive"><span class="glyphicon glyphicon-info-sign" aria-hidden="true" style="color:dodgerblue"></span>客服</li>
		      <li class="minli" active-class="liAcitive"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>收藏</li>
		      <li class="minli" active-class="liAcitive"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>购物车</li>
		      <li class="addshopcar" @click="addShopcar">加入购物车</li>
		    </ul>
		</div>
		<!------->
	</div>
</template>  

<script>
	import router from "../router"
	export default {
		data(){
			return{
				currentIndex:0,
				id:this.$route.params.id,
				imgpath:[],
				name:"",
				lowest_price:"",
				baozhengList:[],
				labels:{},
				city:'',
				province:'',
				shopname:'',
				logo:'',
				notice:'',
				pic:'',
				Number:1,
				over:1200
			}
		},
		mounted(){
			console.log(this.$route.params);
			this.$http.get("http://localhost:3000/detailapi/goodsdetail",{
					params:{
						goodsID:this.id
					}
					
				}).then(res=>{
		
					var a=res.body.data.market_price;
					var c=res.body.data.lowest_price;
					var b=a.toString();		
					var d=c.toString();
					console.log(res.body.data);
					this.imgpath=res.body.data.pics;
					this.name=res.body.data.name;			
					this.city=res.body.data.merchantInfo.city;
					this.logo=res.body.data.merchantInfo.logo;
					this.province=res.body.data.province;
					this.shopname=res.body.data.merchantInfo.name ;
					this.baozhengList=res.body.data.labels;
					this.labels=res.body.data.merchantInfo.labels[0];
					this.notice=res.body.data.merchantInfo.notice;
					
					this.market_price=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
					this.lowest_price=d.substring(0,d.length-2)+"."+d.substring(d.length-2,d.length)
//					router.push("/category/categorydetail")
//					this.goodsLi=res.body.data.list
				},error=>{
					
				})
		
		},
		methods:{
			lichangeClick(index){
				this.currentIndex=index
			},
			backClick(){
				router.go(-1)
			},
			homeClick(){
				router.push("/index")
			},
			addShopcar(){
			
			if(Cookie.getCookie("userID")){
				this.$http.post("http://localhost/php/addShopcar.php",{
						username:Cookie.getCookie("userID"),
						shopname:this.shopname,
						goodsname:this.name,
						newprice:this.lowest_price,
						oldprice:this.market_price,
						number:this.Number,
						overgoods:this.over,
						goodsimg:this.imgpath[0]
						
				}).then(res=>{
					console.log("22")
					console.log(res)
				},error=>{
					console.log(error)
				})
			}else{
				router.push("/wode/login")
			}

		}
		},
	
		beforeRouteEnter(to,from,next){
			console.log(11);
			document.body.scrollTop = 0;
			next();
		}
	}
</script>


<style scoped>

.contentactive{
	display: none;
}
	#detail{
		margin-bottom: 44px;
		/*height:20000px;*/
		background: #f8f8f8;
		overflow: auto;
	}
	.Header{
		position: relative;
		background: white;
		text-align: center;
		width: 100%;
		line-height:44px;
		height:44px;
		color: #914e07;
		background: rgba(255,238,17,.9);
		font-size: 18px;
		margin-bottom: 44px;
	}
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
.img{
	width: 100%;
	height: 360px;
	overflow: hidden;
}
.img img{
	width:100%;
	height: 100%;
}
.goodsinfo{
	background: white;
	overflow: hidden;
	
}
.goodsinfo .goodsname{
	height:56px;
	padding:10px 10px;
}
.goodsinfo .goodsprice{
	height:35px;
	width:100%;
	padding:0 10px;
	position: relative;
	border-bottom: 1px solid #CCCCCC;
}
.goodsinfo .goodsprice strong{
	font-size: 18px;
	color:#FF5555;
	font-weight: 100;
}
.goodsinfo .goodsprice .spanprice{
	margin-left: 35px;
	font-size: 10px;
	color: #aaa!important;
	line-height: 19px;
}
.goodsinfo .goodsprice .spannum{
	font-size: 10px;
	color: #aaa!important;
	line-height: 19px;
	position: absolute;
	right:6px;
	top:5px;
}
.goodsinfo .detaildes{
	border-bottom: 1px solid #ccc;
	padding:10px;
	font-size: 14px;
	line-height: 18px;
	color:#ccc;
}
.goodsinfo p{
		border-bottom: 1px solid #ccc;
		height:40px;
		padding:8px 16px;
		line-height:24px;
		margin-bottom: 0;
	}
.send{
	background: white;
	margin-top:10px;
}
.send .sendaddress{
	/*word-spacing: 5px;*/
	position: relative;
	padding:5px;
	line-height: 30px;
}
.send .sendaddress p{
-webkit-margin-after:0;	
}

.send .sendaddress .baoyou{
	position: absolute;
	top:30px;
	left:60px;
}
.send ul{
	height:71px;
	padding:10px;
	list-style: none;
	background: #F8F8F8;
	color: #b4b4b4;
	display: flex;
	margin-bottom: 0;
}
.send ul li{
	flex: 1;
	height:100%;
}
.dian{
	background: white;
	margin-top:10px;
}
/*进店逛逛*/
.dian {
	position: relative;
}
.go_shop{
	position: absolute;
    right: 10px;
    top: 10px;
    padding: 0 2px;
    border: 1px solid #959595;
    border-radius: 4px;
}
.dian img{
	float: left;
	width:50px;
	height:50px;
	padding:10px 5px 5px 10px;
}
.dian div.l{
	overflow: hidden;
}
.dian p.merchant-notice{
	margin-top:50px;
	display: block;
	width:100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.detailserver{
	height:43px;
	display: flex;
	margin-top:10px;
	background: white;
}
.detailserver ul{
	width:100%;
	margin-bottom: 0;
	display: flex;
	list-style: none;
}
.detailserver ul li{
	width: 50%;
	flex: 1;
	line-height: 43px;
	text-align: center;
	font-size: 14px;
}
#content1,#content2{
	margin-top:10px;
}
#content1 img{
	width:100%;
}
.active{
	color:#FF5555;
	border-bottom: 2px solid #FF5555;
	box-sizing: border-box;
}#content2 .detail-service{
	background: #fff;
    border-top: 10px solid #f1f1f1;
    list-style: none;
    padding-left: 0;
    clear: both;
    margin-bottom: 0px;
}
#content2 .detail-service li{
	    position: relative;
    padding: 10px;
    padding-left: 15px;
    border-top: 1px solid #dbdbdb;
}

.detail-service li b {
    display: block;
    padding-bottom: 5px;
    color: #373737;

}
.detail-service li span{
	 color: #acacac;
    font-size: 12px;
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
.fixed_footer{
	background: #f1f1f1;
	z-index: 100;
	width: 100%;
	height:44px;
	position: fixed;
	bottom: 40px;
	left: 0;
	text-align: center;
	line-height: 44px;
	box-shadow: 0 -3px 5px -1px rgba(0,0,0,.1);
} 
.order-buy{
	list-style: none;
	text-align: center;
	width: 100%;
	height: 100%;
	display: flex;
	box-sizing: content-box;
}
.minli{
	flex: 1;
	padding-top: 8px;
    line-height: 14px;
    font-size: 12px;
    color: #959595;
    background: #FFFFFF;
    box-sizing: border-box;
}
.minli span{
	display: block;
	font-size: 16px;
}
.addshopcar{
	flex: 2;
	background: #f55;
    color: #fff;
    font-size: 20px;
}
.liAcitive{
	color:white!important;
    background:yellow!important;
}
.baozheng{
	background: #f7f8fa;
    color: #959595;
    font-size: .625rem;
    text-align: center;
}
.baozheng li{
    width: 25%;
    float: left;
    margin-right: 0;
    text-align: center;
    color: #b4b4b4;
}
.baozheng li img{
	width: 30px;
    height: 30px;
    margin-top: -2px;
    vertical-align: middle;
}
.baozheng li p{
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
}
.ib-label{
	display: inline-block;
    margin-right: 10px;
    margin-left: 44px;
    line-height: 30px;
}
.icon-label{
	width: 15px;
	height: 15px;
	margin-top: -2px;
    vertical-align: middle;
    display: inline-block;
}
</style>