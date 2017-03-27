<template>
	<div id="detail">
		<div class="Header">
			<span class="back"  @click="backClick()">返回</span>
			商品详情
			
			<span class="glyphicon glyphicon-home" aria-hidden="true" id="home" @click="homeClick()"></span>
		</div>
		<div class="img">
			<img src="http://img.haoshiqi.net/merchantadmin/image20170321/mae0236bcbbb2ab581e44b759c8ed5a338@420w_420h_90Q.jpg" />
		</div>
		<div class="goodsinfo">
			<div class="goodsname">
				刊名长沙理工惹什么事科技日思考凯瑞甘rise立方米ser的公开两方面
			</div>
			<div class="goodsprice">
				<strong>￥<span>200</span></strong>
				<span class="spanprice">价格￥<del>366</del></span>
				<span class="spannum">库存<b>2000</b>件</span>
			</div>
			<div class="detaildes">
				打开森GVorIE两个人是人工耳塞
			</div>
			<p class="alreadychoose">
					
					已选:
					<span class="r">123846516</span>
					<span class="r"></span>
			</p>
		</div>
		
		<div class="send">
			<div class="sendaddress">
				<p>送至   : <span>上海市<i></i></span></p>
				<span class="baoyou">岑商品马爱一件包邮</span>
			</div>
			<ul>
				<li>
					<span></span>
					<p>正品保证</p>
				</li>
				<li>
					<span></span>
					<p>PICC承保</p>
				</li>
				<li>
					<span></span>
					<p>72小时内发货</p>
				</li>
				<li>
					<span></span>
					<p>售后保障</p>
				</li>
			</ul>
		</div>
		<div class="dian">
			
	      <img src="http://img.haoshiqi.net/merchantadmin/image20170313/ma581f1d5587df34d5f3214c0ba96e3106@200w_200h_90Q.jpg" alt="八鲜桥官方旗舰店">
	      <div class="l">
		      <h5>八鲜桥官方旗舰店</h5>
		      <p>上海市&nbsp;上海市</p>
	      </div>
	      <span>进店逛逛</span>
	      
	        <p class="merchant-notice"><label for="">店铺公告：</label>八鲜桥品牌：是一家集有机水产品与绿色农产品种养殖、生产、冷冻、存储、连锁经营、电子商务为一体的综合性、生态化综合服务。其主打品牌“八鲜桥”，立足中高端，我们要努力改变中国人的餐桌，为城市精英的餐饮生活奉献“舌尖上的优质健康美味”。 </p>
	      
  
		
			
		</div>
		<div class="detailserver">
			<ul>
				<li data-index="0" @click="lichangeClick('0')" :class="currentIndex==0?'active':''">图片详情</li>
				<li data-index="1" @click="lichangeClick('1')" :class="currentIndex==1?'active':''">服务保障</li>
			</ul>
		</div>
		<div id="content1" :class="currentIndex==0?'':'contentactive'">
			<img src="http://img.haoshiqi.net/merchantadmin/image20170321/ma4c7eb690db7e37f57983538d3e5c32a5" />
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
		      <li class="addshopcar">加入购物车</li>
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
				currentIndex:0
			}
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
			}
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
		line-height:44px;
		height:44px;
		color: #914e07;
		background: rgba(255,238,17,.9);
		font-size: 18px;
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
	width:100%;
}
.img img{
	width:100%;
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
	height:19px;
	width:100%;
	padding:0 10px
}
.goodsinfo .goodsprice strong{
	font-size: 18px;
	color:#FF5555;
	font-weight: 100;
}
.goodsinfo .goodsprice .spanprice{
	font-size: 10px;
	color: #aaa!important;
	line-height: 19px;
}
.goodsinfo .goodsprice .spannum{
	font-size: 10px;
	color: #aaa!important;
	line-height: 19px;
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
	word-spacing: 5px;
	position: relative;
	padding:10px;
	height:60px;
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
</style>