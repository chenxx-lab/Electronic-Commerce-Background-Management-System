<template>
	<div class="pay">
			<a-row type="flex">
				<a-col :span="1">
					<router-link to="/Content"> <!--添加路由，跳转到首页-->
					<div class="left"><</div>
					</router-link>
				</a-col>
				<a-col flex="auto"></a-col>
				<a-col flex="auto">
					<a-button-group>
				      <a-button :active="active"><router-link to="/pay/OrderForm">订单</router-link></a-button>
				      <a-button><router-link to="/pay/CustomerService">售后</router-link></a-button>
				    </a-button-group>
				</a-col>
				<a-col flex="auto"></a-col>
			</a-row>
	
	        <router-view></router-view> 
	</div>
</template>

<script>
	export default{
		name:'Pay',
		data(){
			return{
				active:true
			}
		}
	}
</script>

<style>
	.pay{
       margin-top: 2px;
		height: 100%;
		width: 100%;
		background-color: #FFFFFF;
		text-align: center;
	}
	.left{
		font-size: 20px;
		color: #000000;
		cursor:pointer;
		padding-left: 15px;
	}
	.left:hover{
		box-shadow: 5px 2px 5px #888888;
		padding-left: 5px;
		height: 32px;
		width: 50px;
		text-align: center;
	}
	
</style>