<template>
    <div id="msgItem" @click="goDialog">
        <img src="../../assets/imgs/weixin.jpeg">
        <div id="text">
            <div class="name" v-text="user.name"></div>
            <div class="msg" v-text="user.msg"></div>
        </div>
        <div id="time" v-text="user.time"></div>
    </div>
</template>

<script>
export default {
    name: 'MsgItem',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        goDialog: function () {
            this.$emit('goDialog',this.user)
        }
    }
}
</script>

<style lang="scss" scoped>
#msgItem {
    width: 100%;
    height: 70px;
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    line-height: 70px;
    color: black;
    position: relative;
    &:hover {
        background-color: #d9d9d9;
    }
    & img {
        width: 70px;
        height: 70px;
        line-height: 70px;
        padding: 10px;
        box-sizing: border-box;
        float: left;
        margin-left: 5px;
    }
    & .name {
        left: 80px;
        height: 40px;
        width: 50%;
        line-height: 30px;
        font-size: 16px;
        padding-top: 10px;
        box-sizing: border-box;
    }
    & .msg {
        left: 80px;
        height: 30px;
        width: 50%;
        line-height: 20px;
        font-size: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
    }
    & #text{
        height: 100%;
        width: 100%;
        padding-left: 75px;
        box-sizing: border-box;
        text-align: left;
    }
    & #time{
        position: absolute;
        color: #91969a;
        font-size: 12px;
        height: 100%;
        width: 40px;
        line-height: 400%;
        right: 0;
        top: 0;
    }
}
</style>
