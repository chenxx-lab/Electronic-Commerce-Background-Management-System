<template>
	<a-col flex="80px" align="center">
		<a-dropdown>
			<a class="ant-dropdown-link" @click="e => e.preventDefault()" style="color: #000000;">
		           管理者
		     <a-icon type="aliwangwang" :style="{ fontSize: '20px', color:'#05c' }"/>
		    </a>
		<a-menu slot="overlay">
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="star" />我的关注</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="star" />我的收藏/卖家收藏</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="user" />个人中心</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="setting"/>账号设置</a>
				      </a-menu-item>
				      
				      <a-menu-divider />
				      
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="check" />我的订单</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="phone" />我的咨询</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="shop" />管理商品</a>
				      </a-menu-item>
				      
				      <a-menu-divider />
				      
				      <a-menu-item>
				        <a href="javascript:;"><a-icon type="question-circle" />帮助</a>
				      </a-menu-item>

				      <a-menu-item>
				      	<router-link to='./modal'>
				        <a href="javascript:;"><a-icon type="poweroff" />退出系统</a>
				        </router-link>
				      </a-menu-item>
				    </a-menu>
				   </a-dropdown>	
    </a-col>
</template>

<script>
	
	export default{

	}
</script>

<style>
a{
	color:black;
}
</style>