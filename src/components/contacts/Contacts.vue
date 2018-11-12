<template>
	<div id="contacts">
		<Item>
            <template slot="content">
                wewewe
            </template>
            <p slot-scope="msg">
                {{ msg.text }}
            </p>
        </Item>
	</div>
</template>

<script>
import Item from './Item'
export default {
	name: 'Contacts',
	components: {
		Item
	}
}
</script>

<style lang="scss" scoped>
#contacts{
    margin-top: 70px;
    background-color: #fff;
}

</style>
