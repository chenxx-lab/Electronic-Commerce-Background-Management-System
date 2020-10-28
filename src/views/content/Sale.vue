<template>
	<div style="font-size: 5px;margin-bottom: 10px;">
	<a-row style="margin-bottom: 0px;">
		<!--添加路由跳到支付页面-->
		<router-link to="/pay">
      <a-col :span="6" align="center" class="a-col">
        <p>232</p>
        <p>待支付</p>
      </a-col>
      </router-link>
      
      <router-link to="/pay">
      <a-col :span="6" align="center" class="a-col">
        <p>33</p>
        <p>待发货</p>
      </a-col>
      </router-link>
      
      <a-col :span="6" align="center" class="a-col">
        <p>2</p>
        <p>延迟发货</p>
      </a-col>
      
      <a-col :span="6" align="center" class="a-col">
       <p>0</p>
       <p>退款/售后</p>
      </a-col>     
    </a-row>
       
     <a-row>
      <a-col :span="6" align="center" class="a-col">
        <p>￥66.33</p>
        <p>支付金额</p>
      </a-col>
      
      <a-col :span="6" align="center" class="a-col">
        <p>58</p>
        <p>支付订单数</p>
      </a-col>
      
      <a-col :span="6" align="center" class="a-col">
        <p>1555</p>
        <p>商品访客数</p>
      </a-col>
      
      <a-col :span="6" align="center" class="a-col">
       <p>93.00%</p>
       <p>询单转化率</p>
      </a-col>     
    </a-row> 
    
    <router-view></router-view>
    </div>
</template>

<script>
</script>

<style scoped>
	.a-col{
 	padding-top: 10px;
 	/*box-shadow: 3px 3px 5px #888888;*/
 	height: 80px;
 	padding-bottom: 0px;
 }
 p{
 	color: #000000;
 }
 .a-col:hover{
 	box-shadow: 10px 10px 5px #888888;
 }
 @media only screen and (min-width: 220px){html {font-size: 142.5%!important;}}
	@media only screen and (min-width: 400px){html {font-size: 162.5%!important;}}
	@media only screen and (min-width: 600px){html {font-size: 182.5%!important;}}
	@media only screen and (min-width: 1000px){html {font-size: 192%!important;}}
</style>