<template>
	<div id="detail">
		<div class="Header">
			<span class="back">返回</span>
			商品详情
			
			<span></span>
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
				<p>送至:<span>上海市<i></i></span></p>
				<span>岑商品马爱一件包邮</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>


<style scoped>
	#detail{
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
	/*background: white;*/
	margin-top:10px;
}
.send .sendaddress{
	padding:10px;
	height:30px;
}
</style>