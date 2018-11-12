<template>
	<div @click="tabTap" id="tabItem" :class="active?'active':''">
        <i class="icon" :class="tab.iconFont"></i>
        <div id="tabButton" v-text="tab.text"></div>
    </div>
</template>

<script>
export default {
  	name: 'TabButton',
  	props: {
        tab: {
  			type: Object,
  			required: true
  		},
        current: {
  		      type:Number,
            required: true
        }
  	},
    computed:{
  	    active: function () {
            return this.tab.id===this.current
        }
    },
  	methods: {
  		tabTap: function () {
  			this.$emit('tap',this.tab.id)
  		}
  	}
}
</script>

<style lang="scss" scoped>
#tabItem{
    height: 58px;
    width: 25%;
    float: left;
    color: #9aa0a5;
    padding-top: 6px;
    box-sizing: border-box;
    & i{
        width: 100%;
        height: 38px;
        font-size: 25px;
    }
    & div{
        width: 100%;
        height: 100%;
        font-size: 12px;
        line-height: 20px;
    }
}
.active{
    color: #2CB623!important;
}
</style>
