<template>
	<div id="shopcar">
		<div class="Header">
			购物车
			<span class="edit">编辑</span>
		</div>
		
		
		
		<div class="content">
			<dl>
				<dt>
					<input type="checkbox"  /><span>密我食谱</span><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				</dt>
				<dd>
					<input type="checkbox" class="choose"/>
					<div class="goodsdetail">
						<p class="imgp">
							<img />
							<span>你不是佛入农夫人口卡萨诺富没法打死了贩卖人口酷狗</span>
						</p>
						<p class="jisuanprice">
							<span class="nowprice">￥<b>200.00</b></span>
							<del>￥300</del>
							<span class="shuliang">
								<a>-</a>
								<input type="text"  />
								<a>+</a>
							</span>
						</p>
						<p class="surplus">剩余1345件</p>
					</div>
				</dd>
			</dl>
			
			<dl>
				<dt>
					<input type="checkbox"  /><span>密我食谱</span><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				</dt>
				<dd>
					<input type="checkbox" class="choose"/>
					<div class="goodsdetail">
						<p class="imgp">
							<img />
							<span>你不是佛入农夫人口卡萨诺富没法打死了贩卖人口酷狗</span>
						</p>
						<p class="jisuanprice">
							<span class="nowprice">￥<b>200.00</b></span>
							<del>￥300</del>
							<span class="shuliang">
								<a>-</a>
								<input type="text"  />
								<a>+</a>
							</span>
						</p>
						<p class="surplus">剩余1345件</p>
					</div>
				</dd>
			</dl>
		</div>
		
		
		
		<div class="bottom">
			<div class="allChoose">
				<input type="checkbox"  />
				<p>全选</p>
			</div>
			<div class="allPrice">
				<p>合计:  <span>￥98</span></p>
				<p>不包含运费</p>
			</div>
			<input type="button" value="去结算" class="gosum"/>
		</div>
	</div>
</template>


<script>
import $ from "jquery"
import router from "../router"
	export default {
		data(){
			return{
				
			}
		},
		created(){
			if(Cookie.getCookie("userID")){
				$.post("http://localhost/php/getShopcar.php",{
						username:"liudi",
				}).then(res=>{
					console.log(res)
				},error=>{
					console.log(error)
				})
			}else{
				router.push("/wode/login")
			}
		},
		addShopcar(){
			
			if(Cookie.getCookie("userID")){
//				this.$http.post("http://localhost/php/addShopcar.php",{
//						username:,
//						shopname:,
//						goodsname:,
//						newprice:,
//						oldprice:,
//						number:,
//						overgoods:,
//						goodsimg:
//						
//				}).then(res=>{
//					console.log(res)
//				},error=>{
//					console.log(error)
//				})
			}else{
				alert("您还没有登录")
			}

		}
	}
</script>


<style scoped>
html,body{
	height:100%;
	width:100%;
}
*{
	padding:0;
	margin:0;
}
	#shopcar{
		height:100%;
		display: flex;
		flex-direction: column;
		
	}
	.Header{
		text-align: center;
		line-height:44px;
		height:44px;
		color: #914e07;
		background: rgba(255,238,17,.9);
		font-size: 18px;
	}
	.Header .edit{
		font-size: 14px;
		position: absolute;
		right:10px;
		top:0px
	}
	.content{
		background: #f8f8f8;
		flex: 1;
		
		
	}
	.content dl{
		overflow: hidden;
		padding:0 10px;
		background: white;
		margin-top:10px;
		border-bottom:1px solid #ccc;
	}
	.content dl dt{
		border-bottom:1px solid #ccc;
		height:40px;
		line-height: 40px;
		font-weight: 100;
	}
	.content dl dt span{
		margin:0 5px
	}
	.content dl dd{
		position: relative;
		float: right;
		width:92%;
		height:106px;
		
		margin:10px 0;
		
	}
	.content dl dd input.choose{
		position: absolute;
		top:6%;
		left:-8%;
	}
	.content dl dd .goodsdetail{}
	.content dl dd .goodsdetail .imgp{
		overflow: hidden;
		height:50px;
		
	}
	.content dl dd .goodsdetail .imgp img{
		float: left;
		width:50px;
		height:50px;
		margin-right: 8px;
	}
	.content dl dd .goodsdetail .imgp span{
		height:;
		line-height:;
		
	}
	.content dl dd .goodsdetail .jisuanprice{
		height:30px;
		margin-top:5px;
		overflow: hidden;
	}
	.content dl dd .goodsdetail .jisuanprice .nowprice{
		color: #f55;
		font-size: 20px;
		margin-right: 5px;
		float: left;
	}
	.content dl dd .goodsdetail .jisuanprice .nowprice del{
		color: #ccc;
		
		
	}
	.content dl dd .goodsdetail .jisuanprice .shuliang{
		line-height: 24px;
		overflow: hidden;
		float: right;
	}
	.content dl dd .goodsdetail .jisuanprice .shuliang a{
		display: inline-block;
		width:38px;
		height:23px;
		text-align: center;
		font-size: 26px;
	}
	.content dl dd .goodsdetail .jisuanprice .shuliang a:last-child{
		color:#f55;
	}
	.content dl dd .goodsdetail .jisuanprice .shuliang input{
		width:38px;
		height:23px;
		border: 1px solid #ccc;
	}
	.bottom{
		background: white;
		width:100%;
		display: flex;
		position: absolute;
		bottom:44px;
		height:49px;
		padding-left:10px
	}
	.bottom .allChoose{
		text-align: center;
		flex: 1;
	}
	.bottom .allPrice{
		position: relative;
		flex: 5;
	}
	.bottom .allPrice span{
		color:#f55;
		font-size: 22px;
	}
	.bottom .allPrice p{
		/*margin-left: 100px;*/
		position: absolute;
	}
	.bottom .allPrice p:first-child{
		right:5px;
		top:0
	}
	.bottom .allPrice p:last-child{
		right:5px;
		bottom:0
	}
	.bottom .gosum{
		border: none;
		color:white;
		flex: 3;
		background: #f55;
		width:120px;
		height:49px;
	}
</style>