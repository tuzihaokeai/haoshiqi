<template>
	<div id="shopcar">
		<div class="Header">
			购物车
			<span class="edit">编辑</span>
		</div>
		<div class="none" v-if="show">
			空空如也...
		</div>
		
		
		<div class="content" v-else>
			<dl v-for="(data,index) in datalist">
				<dt>
					<input type="checkbox" v-model="flag" /><span>{{data.shopname}}</span><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				</dt>
				<dd>
					<input type="checkbox" class="choose" :value="data" checked v-model="arr"/>
					<div class="goodsdetail">
						<p class="imgp" @click="changePage">
							<img :src="data.goodsimg"/>
							<span>{{data.goodsname}}</span>
						</p>
						<p class="jisuanprice">
							<span class="nowprice">￥<b>{{data.newprice}}</b></span>
							<del>￥{{data.oldprice}}</del>
							<span class="shuliang">
								<a @click="delnumber">-</a>
								<input type="text" v-model="number" class="numberInput"/>
								<a @click="addnumber">+</a>
							</span>
						</p>
						<p class="surplus">剩余{{data.overgoods}}件</p>
					</div>
				</dd>
			</dl>
			
			
		</div>
		
		
		
		<div class="bottom">
			<div class="allChoose">
				<input type="checkbox" @click="allChoose()" ref="allchooseInput" v-model="flag"/>
				<p>全选</p>
			</div>
			<div class="allPrice">
				<p>合计:  <span>￥{{sum}}</span></p>
				<p>不包含运费</p>
			</div>
			<input type="button" value="去结算" class="gosum"/>
		</div>
	</div>
</template>


<script>
import ShopcarFilter from "../shopcarFilter"
import ShopcarUnique from "../unique"
import $ from "jquery"
import router from "../router"
	export default {
		data(){
			return{
				datalist:[],
				show:false,
				number:1,
				flag:true,
				arr:[]
				
			}
		},
		methods:{
			changePage(id){
				router.push(`index/detail/${id}`)
			},
			addnumber(){
				this.number++
			},
			delnumber(){
				if(this.number==1){
					return
				}else{
					this.number--
				}
			},
			allChoose(){
				console.log(this.$refs.allchooseInput)
				if(this.flag){
					this.flag=false
				}else{
					this.flag=true
				}
				
			
			
			}
		},
		
            computed:{
               
                sum:function(){
                    var pricezhi=0
				for(var i=0;i<this.arr.length;i++){
					pricezhi+=parseFloat(this.arr[i].newprice)	
				}
				pricezhi = ShopcarFilter(pricezhi)
				
				return pricezhi
                }
            },

		created(){
			if(Cookie.getCookie("userID")){
				$.post("http://localhost/php/getShopcar.php",{
						username:Cookie.getCookie("userID"),
				}).then(res=>{
//					var arr=JSON.parse(res)
//					var res=[
//						//{shopname:"",goods:[]}
//					];
//					var json={};
//					//this.datalist=JSON.parse(res)
//					//console.log(JSON.parse(res))
//					for(var i=0;i<arr.length;i++){
//
//						
//						if(!json[arr[i].shopname){
//							var obj={}
//							obj.shopname=
//							res.push(arr[i]);
//							json[arr[i]]=1
//						}
//					}
//					console.log(arr)
					
				
					if(this.datalist.length){
						this.show=false
						
					}else{
						this.show=true
					}
					
				},error=>{
					console.log(error)
				})
			}else{
				router.push("/wode/login")
			}
		}

	}
</script>


<style scoped>
.numberInput{
	text-align: center;
}
.none{
	height:200px;
	width:100%;
	text-align: center;
	line-height:200px;
}
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
		z-index: 1;
		position: fixed;
		top:0;
		left:0;
		width:100%;
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
		margin-top:44px;
		background: #f8f8f8;
		flex: 1;
		margin-bottom: 90px;
		
		
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
		position: fixed;
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