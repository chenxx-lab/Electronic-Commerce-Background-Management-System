<template>
	<a-row class="handbook">
		<a-col :span="6">
			<img src="../../assets/img/HandBook/01.jpg"/>
			<p>入驻</p>
		</a-col>
		<a-col :span="6">
			<img src="../../assets/img/HandBook/02.jpg"/>
			<p>商品</p>
		</a-col>
		<a-col :span="6">
			<img src="../../assets/img/HandBook/03.jpg"/>
			<p>破零</p>
		</a-col>
		<a-col :span="6">
			<img src="../../assets/img/HandBook/03.jpg"/>
			<p>推广</p>
		</a-col>
	</a-row>
</template>

<script>
</script>

<style scoped>
	.handbook{
		margin-top: 35px;
		text-align: center;
		box-shadow: 3px 3px 5px #888888;
		 display:flex;
		 align-items:center; 
		 justify-content:center;
	}
	img{
	 width:auto;
	 height:auto;
	 max-width:100%;
	 max-height:100%;
	 padding-top: 10px;
	 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>