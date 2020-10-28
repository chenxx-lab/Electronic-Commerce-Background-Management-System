<template>
	<div>
		<a-row style="margin-top: 5px; padding-bottom: 5px;padding-top:5px;border: 1px beige solid;">				
				<a-col :span="8"><a-button shape="round" class="pay3">待商家处理(0)</a-button></a-col>
				<a-col :span="8"><a-button shape="round" class="pay3">平台处理中(0)</a-button></a-col>
				<a-col :span="8"><a-button shape="round" class="pay3">待消费者处理(0)</a-button></a-col>			
		</a-row>
		<div style="margin: auto; margin-top: 100px;">
			<p><a-icon type="container" :style="{ fontSize: '80px'}"/></p>
				<p>没有相关售后订单</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>