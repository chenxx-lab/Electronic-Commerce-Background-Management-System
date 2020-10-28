<template>
     <a-col flex="50px" @click="showDrawer">金额<a-icon type="transaction" spin 
               	:style="{ fontSize: '16px', color: '#08c'}"/>
           
			    <a-drawer
			      title="金额汇总"
			      width="300px"
			      placement="right"
			      :closable="false"
			      :visible="visible"
			      :after-visible-change="afterVisibleChange"
			      @close="onClose"
			    >
			      <OptionalCard></OptionalCard>
			    </a-drawer>
               	
     </a-col>
</template>

<script>
	import OptionalCard from './OptionalCard'
	export default{
		data() {
		    return {
		      visible: false,
		    }
       },
       components:{
       	  OptionalCard
       },
		methods: {
		    afterVisibleChange(val) {
		      console.log('visible', val)
		    },
		    showDrawer() {
		      this.visible = true
		    },
		    onClose() {
		      this.visible = false
		    }
		  }
		}
			
</script>

<style>
</style>