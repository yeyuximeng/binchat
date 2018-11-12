<template>
    <div id="backTop">
        <div @click="backToMsg" class="icon icon-back"></div>
    </div>
</template>

<script>
export default {
    name: 'BackTop',
    methods: {
        backToMsg: function () {
            this.$emit('backToMsg')
        }
    }
}
</script>

<style lang="scss" scoped>
#backTop{
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: #545454;
    color: #fff;
    & div{
        height: 60px;
        width: 60px;
        line-height: 60px;
        font-size: 20px;
    }
}
</style>
