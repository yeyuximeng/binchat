<template>
    <div>
        <BackTop @backToMsg="backToMsg"/>
        <div>{{ text }}</div>
        <Input @show="show"/>
    </div>
</template>

<script>
import BackTop from '../backtop/BackTop'
import Input from '../input/Input'
export default {
    name: 'Dialog',
    components: {
      BackTop,Input
    },
    data () {
        return {
            text: ''
        }
    },
    methods: {
        backToMsg: function () {
            this.$router.push({path:'/msg'})
        },
        show: function (text) {
            this.text = text
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
