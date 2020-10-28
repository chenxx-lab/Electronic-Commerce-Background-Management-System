<template>
	 <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
       
       <!--销售情况-->
       <Sale></Sale>      
       <Cue></Cue>
       <CarouselA></CarouselA>
       <CarouselB></CarouselB> 
        <HandBook></HandBook>
        <router-view></router-view>
     </a-layout-content>
     
</template>

<script>
	import Sale from './Sale'
	import Cue from './Cue'
	import CarouselA from './carouselA/CarouselA'
	import CarouselB from './CarouselB'
	import HandBook from './HandBook'
	export default{
		components:{
			Sale,
			Cue,
			CarouselA,
			CarouselB,
			HandBook
		}
	}
</script>

<style>
 
 
</style>