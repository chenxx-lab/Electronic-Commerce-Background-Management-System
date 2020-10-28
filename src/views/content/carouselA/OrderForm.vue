<template>
	<div>
		<a-row style="margin-top: 10px; padding-bottom: 5px;border: 1px beige solid;">				
				<a-col :span="5" class="pay2"> <a-button type="link"><div class="pay1">待支付</div></a-button></a-col>
				<a-col :span="7" class="pay2"><a-button type="link"><span class="pay1">待发货(0)</span></a-button></a-col>
				<a-col :span="7" class="pay2"><a-button type="link"><span class="pay1">已发货(0)</span></a-button></a-col>
				<a-col :span="5" class="pay2"><a-button type="link"><span class="pay1">全部(0)</span></a-button></a-col>
		</a-row>
		
		<a-row style="margin-top: 5px; padding-bottom: 5px;padding-top:5px;border: 1px beige solid;">
				<a-col :span="8"><a-button shape="round" value="small" class="pay3">待支付(0)</a-button></a-col>
				<a-col :span="8"><a-button shape="round" value="small" class="pay3">支付超时(0)</a-button></a-col>
				<a-col :span="8"><a-button shape="round" value="small" class="pay3">支付取消(0)</a-button></a-col>
		</a-row>
		
		<div style="margin: auto; margin-top: 50px;">
			<p><a-icon type="container" :style="{ fontSize: '80px'}"/></p>
			<p>没有相关订单</p>
			<p>更多的订单可通过搜索，网页版商家后台进行查看</p>
		</div>
	</div>
</template>

<script>
	export default {
	
	}
</script>

<style>
	.pay1{
		color: black;
		text-align: center;
	}
    .pay2:hover{
    	box-shadow: 5px 2px 5px #888888;
    	
    }
    .pay3{
    	font-size: 5px;
    }
</style>