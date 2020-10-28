<template>
	<a-row type="flex">
        <a-col flex="auto"></a-col>
            <!--<Scan></Scan>-->
			<Inform></Inform>
			<Money></Money>	     
			<User></User>	                   
     </a-row>
</template>

<script>
//	import Scan from './Scan'
	import Inform from './Inform'
	import Money from './Money'
	import User from './user/User'
	export default{
		components:{
			Inform,
			Money,
			User,
//			Scan
		}
	}
</script>

<style>
</style>