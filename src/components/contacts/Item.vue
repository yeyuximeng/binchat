<template>
	<div id="item">
		item
        <slot text="wwwwwwwwwww"></slot>
	</div>
</template>

<script>
export default {
	name: 'Item'
}
</script>

<style lang="scss" scoped>
#item{
	height: 45px;
	width: 100%;
	background-color: #DEDEDE;
    line-height: 45px;
}

</style>
