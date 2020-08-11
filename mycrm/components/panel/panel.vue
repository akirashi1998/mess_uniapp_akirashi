<template>
	<view class="panel">
		<view class="panel-text">
			仪表盘
		</view>
		<button>本月</button>
		<view class="triangle">
			
		</view>
	</view>
</template>

<script>
	export default{
		name:"panel"
	}
</script>

<style scoped>
	.panel{
		padding-left: 40rpx;
		width: 100%;
		height: 80rpx;
		background-color: #FFFFFF;
	}
	.panel-text{
		display: inline-block;
		line-height: 80rpx;
	}
	button{
		display: inline-block;
		width: 200rpx;
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		font-size: 16rpx;
		background-color: #FFFFFF;
	}
	button::after{
		border: none;
	}
	.triangle{
		position: absolute;
		top: 38rpx;
		right: 60rpx;
		display: inline-block;
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 6px solid black;
	}
</style>
