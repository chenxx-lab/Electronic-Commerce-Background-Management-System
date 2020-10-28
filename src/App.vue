<template>
	<div id="app">	
	<!--Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。-->
	<!--Header Sider Content Footer，只能放在 Layout 中-->
  <a-layout class="components-layout-demo-custom-trigger">
  	
   <!--左边菜单栏-->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
          <Aside></Aside> 
    </a-layout-sider>
       
    <!--头部-->
      <a-layout>     	
       <a-layout-header style="background: #fff; padding: 0">            
        <a-row type="flex">
        	<!--折叠图标-->
        	<a-col flex="15px">
        		<a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)"/> 
        	</a-col>
        	
        	<a-col flex="auto">   
        		<!--引入头部组件-->
        		<Header></Header>			        		
        	</a-col>		   
      </a-row>     
    </a-layout-header>
      
      
      <!--内容部分-->
      <!--<Content></Content>--> 
      <router-link to="/modal"></router-link>
      <router-view></router-view>
    </a-layout>    
  </a-layout>
	</div>
</template>


<script>
	import Header from './views/header/Header'
	import Aside from './views/aside/Aside'
	import Content from './views/content/Content'
export default {
	name:'APP',
    data() {
    return {
      collapsed: true,
    }
  },
  
  components:{
	Aside,
	Header,
	Content
  }
};
</script>


<style>
    *{
    	padding: 0;
    	margin: 0;
    }
	.components-layout-demo-custom-trigger .trigger {
	  font-size: 18px;
	  line-height: 64px;
	  padding: 0 8px;
	  cursor: pointer;
	  transition: color 0.3s;
	}
	
	.components-layout-demo-custom-trigger .trigger:hover {
	  color: #1890ff;
	}
	
	
   /*在vue中是不能直接使用@media的，我们必须结合less或者sass来使用它
     npm install sass-loader node-sass --save-dev*/
    @media only screen and (min-width: 220px){html {font-size: 142.5%!important;}}
	@media only screen and (min-width: 400px){html {font-size: 162.5%!important;}}
	@media only screen and (min-width: 600px){html {font-size: 182.5%!important;}}
	@media only screen and (min-width: 1000px){html {font-size: 192%!important;}}
	
</style>

