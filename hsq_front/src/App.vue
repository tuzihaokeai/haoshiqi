<template>
  <div id="app">
  	

					<router-view>
						
					</router-view>

  	
       
    <ul class="footer">
    	<router-link to="/index" tag="li" active-class="kerwinAcitive">
    		<span class="glyphicon glyphicon-home" aria-hidden="true"></span>
    		<p class="text">首页</p>
    	</router-link>
    	<router-link to="/category" tag="li" active-class="kerwinAcitive">
    		<span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>
    		<p class="text">分类</p>
    	</router-link>
    	<router-link to="/shopcar" tag="li" active-class="kerwinAcitive">
    		<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
    		<p class="text">购物车</p>
    	</router-link>
    	<router-link to="/wode" tag="li" active-class="kerwinAcitive">
    		<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
    		<p class="text">我的</p>
    	</router-link>
    	
    </ul>
  </div>
</template>

<script>
//	import css from 'bootstrap/css/bootstrap.css';
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

    *{
      margin:0px;
      padding:0px;
    }

    li{
      list-style: none;
    }
    html,body{
      height: 100%;
      overflow: hidden;
    }

    .footer{
      display: flex;
      position: fixed;
      bottom: 0px;
      width: 100%;
      left:0px;
    }
    .footer li{
      line-height: 44px;
      font-size: 12px;
      height: 44px;
      flex:1;
      text-align: center;
      background: #f8f8f8;
  		color: #914e07;
  		font-size: 14px;
  		padding-top: 5px;
    }
    .footer li span{
    	display:block;
    	text-align: center;
    	width: 100%;
    }
    .text{
    	margin-top: 5px;
    	line-height: 15px;
    	font-size: 12px;
    }
    .kerwinAcitive{
           color:white!important;
           background:yellow!important;
        }
</style>
