<template>
  <div id="myCarousel" class="carousel slide" style="margin-top: 10px;">
	<!-- 轮播（Carousel）指标 -->
	<ol class="carousel-indicators">
		<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
		<li data-target="#myCarousel" data-slide-to="1"></li>
		<li data-target="#myCarousel" data-slide-to="2"></li>
		<li data-target="#myCarousel" data-slide-to="3"></li>
		<li data-target="#myCarousel" data-slide-to="4"></li>
		<li data-target="#myCarousel" data-slide-to="5"></li>
	</ol>   
	<!-- 轮播（Carousel）项目 -->
	<div class="carousel-inner">
		<div class="item active">
			<img src="../../assets/img/carouselB/03.png" alt="First slide" width="100%" height="50px">
		</div>
		<div class="item">
			<img src="../../assets/img/carouselB/01.png" alt="Second slide" width="100%" height="50px">
		</div>
		<div class="item">
			<img src="../../assets/img/carouselB/02.png" alt="Third slide" width="100%" height="50px">
		</div>
		<div class="item">
			<img src="../../assets/img/carouselB/04.png" alt="fouth slide" width="100%" height="50px">
		</div>
		<div class="item">
			<img src="../../assets/img/carouselB/06.png" alt="five slide" width="100%" height="50px">
		</div>
		<div class="item">
			<img src="../../assets/img/carouselB/05.png" alt="six slide" width="100%" height="50px">
		</div>
	</div>
	<!-- 轮播（Carousel）导航 -->
	<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
		<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		<!--<span class="sr-only">Previous</span>-->
	</a>
	<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		<!--<span class="sr-only">Next</span>-->
	</a>
</div> 
</template>
<script>
export default {
	
};
</script>
<style>

</style>