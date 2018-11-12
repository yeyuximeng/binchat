<template>
    <div id="input">
        <input type="text" id="inputText" v-model="text" @keyup="show"></input>

    </div>
</template>

<script>
export default {
    name: 'Input',
    data () {
        return {
            text: 'Hello'
        }
    },
    methods: {
        show () {
            this.$emit('show', this.text)
        }
    }
}
</script>

<style lang="scss" scoped>
    #input{
        height: 40px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;

        & #inputText{
            display: block;
            margin: 10px auto;
            width: 80%;
            height: 30px;
            box-sizing: border-box;
            border: none;
        }
    }

</style>
