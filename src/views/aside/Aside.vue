<template>
	<div> 
		
	<a-menu :default-selected-keys="['1']" mode="inline">
		<a-menu-item class="logo" disabled style="margin-bottom: 20px;box-shadow: 0px -15px 2px #888888;">   	  
    	<a-icon type="google-plus" :style="{ fontSize: '40px',color:'orange' }"/>
    	<strong class="aside">购天下</strong>
        </a-menu-item>
			
      <a-menu-item key="1">
      	<router-link to="/Content">
        <a-icon type="pie-chart" />
        <span>店铺首页</span>
        </router-link>
      </a-menu-item>
      
      <a-menu-item key="2">
      	<router-link to="/newUpdate">
        <a-icon type="desktop" />
        <span>最近上新</span>
        </router-link>
      </a-menu-item>
      
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>商品销量</span>
      </a-menu-item>
        
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="apartment" />
        	<span>商品分类</span>
        </span>
        <a-menu-item key="5">
          服装类
        </a-menu-item>
        <a-menu-item key="6">
          百货
        </a-menu-item>
        <a-menu-item key="7">
          内衣内裤
        </a-menu-item>
        <a-menu-item key="8">
         食品类
        </a-menu-item>
      </a-sub-menu>
            
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="gitlab" />
        	<span>代理商管理</span>
        </span>
        <a-menu-item key="9">
                  添加代理商
        </a-menu-item>
        <a-menu-item key="10">
                  代理商列表
        </a-menu-item>
      </a-sub-menu>
            
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="ant-design" />
        	<span>商品管理</span>
        </span>
        <a-menu-item key="13">
                  分类列表
        </a-menu-item>
        <a-menu-item key="14">
                  基本商品库
        </a-menu-item>
        <a-menu-item key="15">
                  添加商品
        </a-menu-item>
      </a-sub-menu>
            
      <a-sub-menu key="sub4">
        <span slot="title"><a-icon type="yuque" />
        	<span>基础库内容</span>
        </span>
        <a-menu-item key="17">
          表单含编辑器
        </a-menu-item>
        <a-menu-item key="18">
          常用列表
        </a-menu-item>
        <a-sub-menu key="sub5" title="其他">
          <a-menu-item key="19">
            可新增的列表
          </a-menu-item>
          <a-menu-item key="20">
           维护中页面
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      
      <a-sub-menu key="sub6">
        <span slot="title"><a-icon type="sketch" />
        	<span>打印模板</span>
        </span>
        <a-menu-item key="21">
          打印单打印模板
        </a-menu-item>
        </a-sub-menu>
       
      <a-sub-menu key="sub8">
        <span slot="title"><a-icon type="appstore" />
        	<span>报表模块</span>
        </span>
        <a-menu-item key="25">
          订单统计报表
        </a-menu-item>
        </a-sub-menu>
            
      <a-sub-menu key="sub10">
        <span slot="title"><a-icon type="reddit" />
        	<span>出入库管理</span>
        </span>
        <a-menu-item key="29">
          入库管理
        </a-menu-item>
        <a-menu-item key="30">
          出库管理
        </a-menu-item>
       </a-sub-menu>
      
      <a-sub-menu key="sub12">
        <span slot="title"><a-icon type="bank" />
        	<span>下架产品</span>
        </span>
        <a-menu-item key="33">
          重新上架记录
        </a-menu-item>
        <a-menu-item key="34">
          删除产品记录
        </a-menu-item>
      </a-sub-menu>
      
      <a-sub-menu key="sub14">
        <span slot="title"><a-icon type="credit-card"/>
        	<span>违规预警</span>
        </span>
        <a-menu-item key="37">
                 物流投诉
        </a-menu-item>
        <a-menu-item key="38">
                纠纷单
        </a-menu-item>
      </a-sub-menu>  
      </a-menu>
      
    </div>  
</template>

<script>
	export default {
  
 }
</script>

<style>
	/*以下实例在屏幕可视窗口尺寸小于 600 像素时将 div 元素隐藏：*/
    /*@media screen and (max-width: 600px) {
    a-menu.example {
    display: none;
  }
}*/
.aside{
     font-family: '黑体';
     font-size: 25px;
     padding-left: 5px;
     margin-bottom: 20px;
}
.ant-layout-sider-children{
	background-color: white;
}
.components-layout-demo-custom-trigger .logo {
	  
	  /*background: rgba(255, 255, 255, 0.2);*/
	  background-color: white;
	  padding-left: 0px;
	}
</style>