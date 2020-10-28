<template>
	<div class="container modal1">
		<div class="modal1_img">
			<img src="../../assets/img/register/register.jpeg" width="100%" height="100%"/>
		</div>
		<h6 align="center" class="text-danger">客官，您还未登录喔</h6>
        <!-- 按钮：用于打开模态框 -->
	    <div align="center">
	  	<button data-toggle="modal" data-target="#myModal">
		    登录入口
		</button>
		</div>
	  
  <!-- 模态框 -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
   
        <!-- 模态框头部 -->
        <div class="modal-header">
          <h4 class="modal-title">管理员登录</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
   
        <!-- 模态框主体 -->
        <div class="modal-body">
            <Register></Register>   
        </div>
   
        <!-- 模态框底部 -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
        </div>
   
      </div>
    </div>
  </div>
  
</div>

</template>

<script>
	import Register from './Register'
	export default{
		components:{
			Register
		}
	}
</script>

<style>
	.modal1{
		height: 550px;
		width: 100%;
		margin-top: 15px;
		background-color: white;
	}
	.modal1_img{
		margin: auto;
		width: 550px;
		height: 450px;
	}
	
</style>