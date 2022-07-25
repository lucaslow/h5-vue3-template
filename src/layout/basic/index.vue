<template>
	<div class="main-page">
		<router-view v-slot="{ Component }">
			<keep-alive>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'BasicCompoent',
	});
</script>

<style scoped lang="less">
	.main-page {
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		overflow-x: hidden;
		background-image: ~'url(@/assets/bg.png)';
	}
</style>
