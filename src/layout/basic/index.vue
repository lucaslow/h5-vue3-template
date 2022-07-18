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
		height: calc(100vh - 50px);
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style>
