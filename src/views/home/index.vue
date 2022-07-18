<template>
	<div>
		<van-button type="primary">主要按钮</van-button>
	</div>
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

<style></style>
