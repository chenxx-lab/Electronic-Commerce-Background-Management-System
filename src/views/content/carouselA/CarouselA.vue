<template>
  <a-carousel :after-change="onChange" indicator-color="yellow">
    <div>
    	<a-row type="flex">
    		<a-col :span="1.5"><a-icon type="twitter" />常用应用</a-col>
    		<a-col flex="auto"></a-col>
    	</a-row>
    	
    	<a-row class="carousel">
    		<!--引入路由-->
    		<router-link to="/manage">
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="dot-chart" :style="{ fontSize: '30px',color:'orange' }"/></p>
    			<p>商品管理</p>   			
    		</a-col>
    		</router-link>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="pie-chart" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>订单管理</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="heat-map" :style="{ fontSize: '30px',color:'#1890FF'}"/></p>
    			<p>数据中心</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="carry-out" :style="{ fontSize: '30px',color:'orange'}"/></p>
    			<p>营销活动</p>
    		</a-col>
    		
    		<a-col :span="4" class="carouselA">
    			<p><a-icon type="hourglass" :style="{ fontSize: '30px',color:'#1890FF'}"/></p>
    			<p>推广中心</p>
    		</a-col>
    	</a-row>
    	
    	<a-row class="carousel">
    		<a-col :span="5" class="carouselA">   		
    			<p><a-icon type="read" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>多多进宝</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="switcher" :style="{ fontSize: '30px',color:'orange'}"/></p>
    			<p>优惠卷</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="wallet" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>多多直播</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="thunderbolt" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>商品评价</p>
    		</a-col>
    		
    		<a-col :span="4" class="carouselA">
    			<p><a-icon type="apartment" :style="{ fontSize: '30px',color:'#1890FF'}"/></p>
    			<p>短信营销</p>
    		</a-col>
    	</a-row>
    </div>
    <div>
    	<a-row class="carousel">
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="search" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>商品热搜</p>   			
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="shop" :style="{ fontSize: '30px',color:'green'}"/></p>
    			<p>商品体验</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="solution" :style="{ fontSize: '30px',color:'blue'}"/></p>
    			<p>客服答疑</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="dollar" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>多件优惠</p>
    		</a-col>
    		
    		<a-col :span="4" class="carouselA">
    			<p><a-icon type="dashboard" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>限量购</p>
    		</a-col>
    	</a-row>
    	
    	<a-row class="carousel">
    		<a-col :span="5" class="carouselA">   		
    			<p><a-icon type="car" :style="{ fontSize: '30px',color:'orange'}"/></p>
    			<p>商品搬家</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="like" :style="{ fontSize: '30px',color:'red'}"/></p>
    			<p>店铺推荐</p>
    		</a-col>
    		
    		<a-col :span="5" class="carouselA">
    			<p><a-icon type="more" :style="{ fontSize: '30px'}"/></p>
    			<p>全部应用</p>
    		</a-col>
    		
    	</a-row>
    </div>
    
    <router-view></router-view>
  </a-carousel>
</template>


<script>
export default {
  methods: {
    onChange(a, b, c) {
      console.log(a, b, c);
    }
  }
}
</script>


<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 200px;
  overflow: hidden;
  box-shadow: 0px -17px 5px 0px darkgray inset; 

}

.carousel{
	padding-top: 15px;
	font-size: 5px;
}
.carouselA:hover{
	box-shadow: 0px 15px 5px #888888;
}
p{
	color:#000000;
}
</style>