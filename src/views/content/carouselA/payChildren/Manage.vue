<template>
	<div class="manage">
		    <a-row style="margin-top: 40px;"><a-col :span="24"><h5>特卖区</h5></a-col></a-row>
			<a-row :gutter="16">
				<a-col :span="6">
                    <img src="../../../../assets/img/manage/01.jpg" width="100%" height="200px"/>
                    <div align="center">  
	                   
						库存：{{counts1}}
						
					</div>
				</a-col>
				<a-col :span="6">
					<img src="../../../../assets/img/manage/02.jpg" width="100%" height="200px"/>
					<div align="center">  
	                    
						库存：{{counts2}}
						
					</div>
				</a-col>
				<a-col :span="6">
					<img src="../../../../assets/img/manage/07.jpeg" width="100%" height="200px"/>
					<div align="center">  
	                    
						库存：{{counts3}}
						
					</div>
				</a-col>
				<a-col :span="6">
					<img src="../../../../assets/img/manage/08.jpeg" width="100%" height="200px"/>
					<div align="center">  
	                   
						库存：{{counts4}}
						
					</div>
				</a-col>				
			</a-row>
			
			<a-row style="margin-top: 40px;"><a-col :span="24"><h5>精选专题</h5></a-col></a-row>
			<a-row :gutter="16">
				<a-col :span="12"><img src="../../../../assets/img/manage/04.jpg"/></a-col>
				<a-col :span="12"><img src="../../../../assets/img/manage/05.jpg"/></a-col>
			</a-row>
    </div>			
</template>

<script>
	//在data中引入图片有两种方法
	//方法一：方法一.直接将你的图片源文件放在项目目录的static文件夹里，然后和正常写图片路径那样写就可以了
	//方法二：通过import的方法将图片源路径引入
	export default {		
		data(){
			return{
				counts1:23,
				counts2:58,
				counts3:488,
				counts4:1222
			}
		}
	}
	
</script>

<style>
	.manage{
		width: 96%;
		height: 800px;
		background-color: white;
		margin-top: 20px;
		margin-left: 20px;
	}
</style>