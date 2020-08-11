<template>
	<view class="container">
		<toolsline></toolsline>
		<panel></panel>
		<toolshr></toolshr>
		<shortcut></shortcut>
		<toolshr></toolshr>
		<brief></brief>
		<toolshr></toolshr>
	</view>
</template>

<script>
	import Panel from "../../components/panel/panel.vue"
	import Toolshr from "../../components/tools/hr.vue"
	import Toolsline from "../../components/tools/line.vue"
	import Shortcut from "../../components/shortcut/shortcut.vue"
	import Brief from "../../components/brief/brief.vue"
	export default {
		components:{
			Panel,
			Toolshr,
			Toolsline,
			Shortcut,
			Brief
		}
		
	}
</script>

<style>
	.container {
		background-color: #F8F8F8;
		font-size: 14px;
		line-height: 24px;
	}
</style>
