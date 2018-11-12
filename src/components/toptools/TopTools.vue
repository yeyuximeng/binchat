<template>
    <div id="topTool">
        <span>{{title}}</span>
    </div>
</template>

<script>
  export default {
      name: 'TopTools',
      data () {
          return {
              title:'BIN信'
          }
      }
  }
</script>

<style lang="scss" scoped>
#topTool{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #545454;
    line-height: 70px;
    color: #fff;
    & span{
        display: block;
        float: left;
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 20px;
    }
}
</style>
