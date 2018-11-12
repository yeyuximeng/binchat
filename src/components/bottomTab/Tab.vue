<template>
	<div id="tab">
		<TabButton
		v-for="tab in tabs"
		:key="tab.id"
		:tab="tab"
    :current="current"
		@tap="tabTap"
		/>
	</div>
</template>

<script>
import TabButton from './TabButton'
export default {
	name: 'Tab',
	components: { TabButton },
    props: {
        tabs: {
            type: Array,
            required: true
        },
        current: {
            type: Number,
            required: true
        }
    },
  	methods: {
  		tabTap: function (itemId) {
  			this.$emit('tabTap',itemId)
  		}
  	}
}

</script>

<style lang="scss" scoped>
#tab{
	width: 100%;
	height: 58px;
	position: fixed;
	left: 0;
	bottom: 0;
    border-top: solid 1px #e2e2e2;
}
</style>
