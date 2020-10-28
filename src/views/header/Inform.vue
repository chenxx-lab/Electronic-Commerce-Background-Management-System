<template>
	<a-col flex="60px">
				<a-dropdown>
				    <a class="ant-dropdown-link" @click="e => e.preventDefault()" style="color: black;">
				         通知 
				    <el-badge is-dot icon="el-icon-share" class="el-icon-chat-dot-round"></el-badge>
				    </a>
				    <a-menu slot="overlay">
				      <a-menu-item>
				        <a href="javascript:;">违规预警</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;">买家评论</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;">下降通知</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;">关注情况</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;">好评</a>
				      </a-menu-item>
				      <a-menu-item>
				        <a href="javascript:;">收藏</a>
				      </a-menu-item>
				    </a-menu>
				 </a-dropdown>										  
			</a-col>
</template>

<script>
</script>

<style>
	
</style>