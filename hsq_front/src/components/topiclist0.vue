<template>
	<div id="topiclist0">
	<div class="topiclist0_header">
      		<span class="back-btn" @click="backClick()">返回</span>
  			<div class="title">专题</div>
	</div>
	<div class="top10_banner">
    <h3>精选Top 10件</h3>
    <p>我们花时间，替您省钱又Hold住品质，您只需要<br>买买买！</p>
  	</div>
  	
  	<div class="top10_card" v-for="(data,index) in cardlist">
      <div class="banner" >
        <img class="lazy" :src="picpath[index]" alt="" />
        <div class="text">
          <h1>{{data.title}}</h1>
          <p>{{data.sub_title}}</p>
          <span class="date">08月23日</span>
        </div>
      </div>
      <div class="intro">{{data.description}}</div>
      <div class="link-detail border-top-line">查看详情</div>
    </div>
	</div>
</template>
<script>
	import css from '../bootstrap/css/bootstrap.css';
	import router from "../router"
	import Url from "../address"
	export default {
		data(){
			return{
				cardlist:[],
				picpath:[]
			}
		},
		methods:{
			backClick(){
				router.go(-1)
			}
		},
		mounted(){	
			
			this.$http.get("http://"+Url.url+":3000/homeapi/topiclist").then(res=>{
			this.cardlist=res.body.data.list;
			for(var i=0;i<res.body.data.list.length;i++){
				this.picpath.push(res.body.data.list[i].main_pic)
			}
			console.log(res.body.data.list)
			//console.log(this.picpath)
		},error=>{
			
		})
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	body,html{
		width: 100%;
		height: 100%;
		background: #f1f1f1;
	}
	.topiclist0_header{
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
	.title{
	position: absolute;
    left: 88px;
    right: 88px;
    font-size: 20px;
	}
	.top10_banner{
		margin-top: 44px;
		overflow: hidden;
	    padding: 15px 0 0;
	    text-align: center;
	    color: #252525;
	    margin-bottom: 10px;
	    background: #fff;
	}
	.top10_banner h3 {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
	}
	.top10_banner p{
	color: #959595;	
	font-size: 12px;
	line-height: 20px;
	margin-bottom: 5px;
	}
	.top10_card .banner {
    position: relative;
    padding-bottom: 1px;
    overflow: hidden;
	}
	.top10_card .banner .lazy{
	width: 100%;
    min-height: 235px;
	    	
	}
	.top10_card .banner .text {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    padding-top: 20%;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    background: rgba(0,0,0,.4);
	}
	.top10_card .banner .text p {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    display: inline-block;
    padding: 0 5px;
    border: 1px solid #fff;
    height: 32px;
    line-height: 32px;
    font-size: 20px;
    background: rgba(0,0,0,.2);
	}
	.top10_card .banner .text h1 {
    margin: 0 0 10px;
    font-size: 30px;
    font-weight: 700;
    }
	.top10_card .banner .date {
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 12px;
	}
	.top10_card .intro {
    margin: 15px 0;
    padding: 0 15px;
    }
    .border-top-line {
    border-top: 1px solid #e4e4e4;
	}
	.top10_card .link-detail {
    text-align: center;
    padding: 10px 0;
	}
</style>