<template>
  <div id="app">
  	

					<router-view>
						
					</router-view>

  	
    
    <ul class="footer">
    	<router-link to="/index" tag="li" active-class="kerwinAcitive">首页</router-link>
    	<router-link to="/category" tag="li" active-class="kerwinAcitive">分类</router-link>
    	<router-link to="/shopcar" tag="li" active-class="kerwinAcitive">购物车</router-link>
    	<router-link to="/mine" tag="li" active-class="kerwinAcitive">我的</router-link>
    	
    </ul>
  </div>
</template>

<script>
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
      background: gray;
  
    }
    
    .kerwinAcitive{
           color:white;
           background:yellow!important;
        }
</style>
