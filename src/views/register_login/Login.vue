<template>
	<div class="login">
			<span style="font-size: 200px; font-family:'微软雅黑'; color:#AAAAAA;">IN+</span>
			<strong>欢迎登录inspinia 2.9.2</strong><br />
			<small style="color:#696969">一个高质量的后台管理系统</small>
			<input type="text" id="Username" value="" placeholder="UserName"/><br />						
			<input type="password" name="pwd"  placeholder="password"/><br />
			<a href="../index.html">
		    <div class="loginBox">
		    	登录
		    </div>
		    </a>
		    <a href="#">忘记密码？</a><br />
		    <span style="color: #A9A9A9;">还没有账号?</span><br />		    
		    <div class="setUP">
		    	创建一个账户
		    </div>
		</div>
</template>

<script>
</script>

<style>
	.login{
				width: 300px;
				height: auto;
				/*background-color: greenyellow;*/
				margin: auto;
				margin-top: 60px;
				text-align: center;
			}
			input{
				width: 290px;
				height: 30px;
				margin-top: 20px;
			}
			.loginBox{
				width: 300px;
				height: 30px;
				background-color: #009688;
				text-align: center;
				color: white;
				margin-top: 20px;
			}
			.setUP{
				width: 300px;
				height: 30px;
				background-color: white;
				text-align: center;
				color: #8F8F94;
				margin-top: 20px;
			}
			a{
				text-decoration: none;
			}
			a:hover{
				text-decoration: none;
			}
</style>