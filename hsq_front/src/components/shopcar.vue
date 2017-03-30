<template>
	<div id="shopcar">
		<div class="Header">
			购物车
			<span class="edit" @click="editClick()">{{edit}}</span>
		</div>
		<div class="none" v-if="show">
			空空如也...
		</div>
		
		
		<div class="content" v-else>
			<dl v-for="(data,index) in datalist">
				<dt>
					<input type="checkbox" v-model="data.isChecked" @change="handleChange(data)"/><span>{{data.shopname}}</span><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				</dt>
				<dd v-for="(childdata,childindex) in data.children">
					<input type="checkbox" class="choose"   v-model="childdata.isChecked" @change="handleChildChange(data)"/>
					<div class="goodsdetail">
						<p class="imgp" @click="changePage">
							<img :src="childdata.goodsimg"/>
							<span>{{childdata.goodsname}}</span>
						</p>
						<p class="jisuanprice">
							<span class="nowprice">￥<b>{{childdata.newprice}}</b></span>
							<del>￥{{childdata.oldprice}}</del>
							<span class="shuliang" v-show="xianshi">
								<a @click="delnumber(childdata,childdata.goodsID)">-</a>
								<input type="text" v-model="childdata.number" ref="numberInput" @input="handleClick" class="numberInput"/>
								<a @click="addnumber(childdata,childdata.goodsID)">+</a>
							</span>
						</p>
						<p class="surplus">剩余{{childdata.overgoods}}件</p>
					</div>
				</dd>
			</dl>
			
			
		</div>
		
		
		
		<div class="bottom">
			<div class="allChoose">
				<input type="checkbox" @change="allChoose()" :checked="beixuan"/>
				<p>全选</p>
			</div>
			<div class="allPrice" v-show="xianshi">
				<p>合计:  <span>￥{{sum}}</span></p>
				<p>不包含运费</p>
			</div>
			<input type="button"  @click="delClick()" :value="gosum" class="gosum"/>
		</div>
	</div>
</template>


<script>
import Url from "../address"
import ShopcarFilter from "../shopcarFilter"
import ShopcarUnique from "../unique"
import $ from "jquery"
import router from "../router"
	export default {
		data(){
			return{
				datalist:[],
				show:false,
				xianshi:true,
				number:1,
				beixuan:false,
				arr:[],
				edit:"编辑",
				gosum:"去结算",
				status:"ok"
				
			}
		},
		methods:{
		
			editClick(){
				if(this.edit=="完成"){
					this.edit="编辑"
					this.gosum = "去结算"
					this.xianshi=true
				}else{
					this.edit="完成"
					this.gosum = "删除"
					this.xianshi=false
					
				}
				
			},
			handleClick(){
				console.log("00")
			},
			delClick(){
				
				if(this.gosum=="删除"){
					
					var newArr= []
					console.log(this.datalist)
					this.datalist.forEach((item)=>{
						 newArr =[...newArr,...item.children.filter(obj=>obj.isChecked==true)];
                		
					})
					var idArr= [];
					
					newArr.forEach((item)=>{
						idArr = [...idArr,item.goodsID]
					})
				    console.log(idArr)
				   
					this.$http.post("http://"+Url.url+"/php/delShopcar.php",{
					username:Cookie.getCookie("userID"),
					goodsID:idArr
					}).then(res=>{
						console.log(res)
						this.$http.post("http://"+Url.url+"/php/getShopcar.php",{
							username:sessionStorage.getItem("userID")
							}).then(res=>{
								console.log(res.body)
								var newRes= [];
								var quchonghArr = res.body.map(item=>item.shopname);
								var set = new Set(quchonghArr);
								quchonghArr = Array.from(set);
			
								
								quchonghArr.forEach((item,index)=>{
									newRes.push({shopname:item,isChecked:false,children:res.body.filter(obj=>obj.shopname==item)});
								})
								
								this.datalist=newRes;
								
							},error=>{
								
						})
						
					},error=>{
						
				})
				}
				
			},
			changePage(id){
				router.push(`index/detail/${id}`)
			},
			addnumber(data,id){
				data.number++
				//console.log(this.number)
				console.log(id)
				this.$http.post("http://"+Url.url+"/php/updateShopcar.php",{
					username:sessionStorage.getItem("userID"),
					goodsID:id,
					number:data.number
				}).then(res=>{
					console.log(res)
				},error=>{
					
				})
			},
			delnumber(data,id){
				if(data.number==1){
					return;
				}else{
					data.number--
					this.$http.post("http://"+Url.url+"/php/updateShopcar.php",{
					username:sessionStorage.getItem("userID"),
					goodsID:id,
					number:data.number
				}).then(res=>{
					console.log(res)
				},error=>{
					
				})
				}
			},
			allChoose(){
				if(this.beixuan==true){
					this.beixuan=false
					console.log(this.beixuan)
					this.datalist.forEach((item)=>{
					console.log(item)
					item.isChecked = false,
					item.children.forEach((childrenitem)=>{
						childrenitem.isChecked=false
					})
				})
				}else{
					this.beixuan=true
					console.log(this.beixuan)
				this.datalist.forEach((item)=>{
					console.log(item)
					item.isChecked = true,
					item.children.forEach((childrenitem)=>{
						childrenitem.isChecked=true
					})
				})
				}

				
			
			},
			
			
			handleChange(data){
				
				data.children.forEach((item)=>{
					item.isChecked = data.isChecked;
				})
				
				//console.log(data.children);
			},
			
			handleChildChange(data){
				var isChecked = data.children.every(item=>item.isChecked==true);
				
				data.isChecked = isChecked;
			}
		},	
		
		updated(){
			//console.log("kerwi");
		},
		
            computed:{
               
                sum:function(){
                	//console.log(11); 
                	
                	var allprice = 0;
                	this.datalist.forEach((item)=>{
                		var newarr = item.children.filter(obj=>obj.isChecked==true);
                		newarr.forEach((obj)=>{
                			allprice+=obj.newprice*obj.number;
                		})
                	})
                	
                	return allprice.toFixed(2);
                 	
                }
            },

		created(){
			if(Cookie.getCookie("userID")){
				$.post("http://"+Url.url+"/php/getShopcar.php",{
						username:sessionStorage.getItem("userID"),
				}).then(res=>{
					var arr=JSON.parse(res);
					arr.map((item)=>{
						item.isChecked = false;
					})
					console.log(arr)
					
					
					var newres=[
					
					];
//					var shopnameArr = []
//					for(var i=0;i<arr.length;i++){
//						shopnameArr.push(arr[i].shopname)
//						var quchonghouArr=[]
//						var json={};
//						for(var j=0;j<shopnameArr.length;j++){
//							if(!json[shopnameArr[j]]){
//								quchonghouArr.push(shopnameArr[j]);
//								json[shopnameArr[j]]=1
//							}
//						}
//						
//					}
//					console.log(shopnameArr)

				    var quchonghouArr = arr.map(item=>item.shopname);
					var set = new Set(quchonghouArr);
					quchonghouArr = Array.from(set);

					
					quchonghouArr.forEach((item,index)=>{
						newres.push({shopname:item,isChecked:false,children:arr.filter(obj=>obj.shopname==item)});
					})
					
					this.datalist=newres;
//					for(var i=0;i<arr.length;i++){
//						
//						if(arr.indexOf(arr[i].shopname)==-1){
//							//console.log(arr.indexOf(arr[i].shopname))
//							var obj={
//								shopname:"",
//								goods:[]
//							}
//							
//							obj.shopname=arr[i].shopname
//							obj.goods.push(arr[i])
//							res.push(obj);							
//						}else{
//							console.log(arr.indexOf(arr[i].shopname))
//							res[arr.indexOf(arr[i].shopname)].goods.push(arr[i])
//						}
//					}
					//console.log(res)
					
					
					
					
				
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
		/*width:120px;*/
		height:49px;
	}
</style>