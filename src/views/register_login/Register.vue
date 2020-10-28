<template>
	<div class="register">
		<p class="register_text"><strong>G+</strong>改变世界</p>
		<div class="row" style="margin-bottom: 10px;">
			<div class="col-sm-6">
				<router-link to='/modal/PswSub'>
				<button type="button" class="btn">密码登录</button>
				</router-link>
			</div>
			
			<div class="col-sm-6">
				<router-link to='/modal/message'>
				<button type="button" class="btn">短信登录</button>
				</router-link>
			</div>
		</div>
		
		<form>	
		<Message></Message>	
		<router-view></router-view>
		
		<!--记住我-->
		<div class="row">
		<div class="col-sm-12">
		   <input type="checkbox" name="checkbox" id="checkbox" value="" />Remember Me
	     </div>
	     </div>
	     
	     <div class="row" align="center">
	     	<div class="col-sm-6">
		    <button type="reset" class="btn btn-primary btn-sm">重置</button>
		    </div>
		    <div class="col-sm-6" @click="submit">
		    <router-link to='Content'>
		    <button type="submit" class="btn btn-primary btn-sm" data-dismiss="modal">登录</button>
		    </router-link>
		    </div>
	     </div>
		</form>
	</div>
</template>

<script>
	import Message from './Message'
	export default{
		data(){
			return{
				user:'未登录'
			}
		},
		components:{
			Message
		}
	}
</script>

<style>
	.register{
		margin: auto;
	}
	.register_text{
		font-size: 25px;
		text-align: center;
	}
</style>