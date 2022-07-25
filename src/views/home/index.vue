<template>
	<div class="container"></div>
</template>

<script>
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'HomeComponent',
		setup() {
			console.log('this is setup');
		},
		data() {
			return {};
		},
	});
</script>

<style lang="less" scoped>
	.container {
		width: 100%;
		height: 100%;
	}
</style>
