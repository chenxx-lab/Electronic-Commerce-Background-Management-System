<template>
	<div>
	<ul id="myTab" class="nav nav-tabs">
      <li class="active">
      	<a href="#home" data-toggle="tab">
               已提现
      	</a>
        </li>
        
        <li><a href="#ios" data-toggle="tab">待提现</a></li>
        
        <li class="dropdown">
	      <a href="#" id="myTabDrop1" class="dropdown-toggle" 
	         data-toggle="dropdown">
	                 押金
	      </a>
	      
		      <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
		         <li><a href="#jmeter" tabindex="-1" data-toggle="tab">
		                  被扣金额
		         </a>
		         </li>
		         <li>
		         	<a href="#ejb" tabindex="-1" data-toggle="tab">
			            待返金额
			        </a>
		         </li>
		      </ul>
        </li>
    </ul>
		<div id="myTabContent" class="tab-content">
		   <div class="tab-pane fade in active" id="home">		      
		      	<div>
				    总额度：<a-progress :percent="100" />
				    已提现：<a-progress :percent="50" status="active" />
				  </div>
		   </div>
		   <div class="tab-pane fade" id="ios">
		     <div>
				    总额度：<a-progress :percent="100" />
				    待提现：<a-progress :percent="50" status="active" />
			</div>
		   </div>
		   <div class="tab-pane fade" id="jmeter">
		       <div>
			        总押金：<a-progress type="circle" :percent="100"/>
			    <p>被扣押金：<a-progress type="circle" :percent="70" status="exception" /></p>
			  </div>
		   </div>
		   <div class="tab-pane fade" id="ejb">
		      <div>
			    <a-progress type="dashboard" :percent="75" />
			  </div>
		   </div>
		</div>
</div>
</template>

<script>
	 $(function () {
      $('#myTab li:eq(1) a').tab('show');
   });
</script>

<style>
	.OptionalCard{
		font-size: 16px;
	}
</style>