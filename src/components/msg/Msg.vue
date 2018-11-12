<template>
	<div id="msg">
        <div id="title"></div>
        <MsgItem
            v-for="user in users"
            :user="user"
            :key="user.id"
            @goDialog="goDialog"
        />
	</div>
</template>

<script>
import MsgItem from './MsgItem'
export default {
	name: 'Msg',
    components: {
        MsgItem
    },
    data () {
	    return {
	        users: [
                {id: 0, name: 'name1', msg: '好的', time: '11:30'},
                {id: 1, name: 'name2', msg: '再见', time: '11:30'},
                {id: 2, name: 'name3', msg: '你睡吧', time: '11:30'}
            ]
        }
    },
    computed: {
        count () {
            return this.$store.state.count
        }
    },
    methods: {
        goDialog: function (user) {
            this.$router.push({path:'/dialog'})
        }
    }
}
</script>

<style lang="scss" scoped>
#msg{
    width: 100%;
    height: 100%;
}

</style>
