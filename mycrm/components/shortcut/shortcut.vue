<template>
	<view class="shortcut">
		<view class="shortcut-title">
			快捷添加
		</view>
		<view class="shortcut-container">
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
		</view>		
		<view class="shortcut-container">
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
			<view class="shortcut-item">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:"Shortcut"
	}
</script>

<style scoped>
	.shortcut{
		height: auto;
		background-color: #FFFFFF;
	}
	.shortcut-title{
		padding: 20rpx 0rpx 20rpx 40rpx;
	}
	.shortcut-container{
		display: flex;
		height: auto;
	}
	.shortcut-item{
		flex: 1;
		border: 1rpx solid #007AFF;
		height: 200rpx;
	}
</style>
