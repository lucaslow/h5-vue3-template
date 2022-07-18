<template>
	<router-view v-slot="{ Component, route }">
		<keep-alive>
			<component
				:is="Component"
				v-if="route.meta && route.meta.keepAlive"
				:key="route.meta.usePathKey ? route.meta.usePathKey : route.fullPath"
			/>
		</keep-alive>
		<component
			:is="Component"
			v-if="!(route.meta && route.meta.keepAlive)"
			:key="route.meta.usePathKey ? route.meta.usePathKey : route.fullPath"
		/>
	</router-view>
</template>
<script>
	import { defineComponent } from 'vue';
	export default defineComponent({
		name: 'App',
	});
</script>
