<template>
  <div id="app">
      <TopTools/>
      <Tab :tabs="tabs" :current="current" @tabTap="tabTap"/>
      <router-view></router-view>
  </div>
</template>

<script>
    import TopTools from './components/toptools/TopTools'
    import Tab from './components/bottomTab/Tab'
    export default {
        name: 'App',
        data () {
            return {
                tabs: [
                    {id: 0,text: '智信', router: '/msg', iconFont: 'icon-msg'},
                    {id: 1,text: '通讯录', router: '/contacts', iconFont: 'icon-tongxunlu'},
                    {id: 2,text: '发现', router: '/discover', iconFont: 'icon-faxian'},
                    {id: 3,text: '我', router: '/center', iconFont: 'icon-wode'}
                ],
                friends: [{name: '伍慧珍', msg: '好的', time: '12:00'}],
                current: 0
            }
        },
        components: {
            TopTools,Tab
        },
        mounted: function () {
            this.$nextTick(function () {
                this.showLastPage()
            })
        },
        methods: {
            showLastPage: function () {
                let path = this.$route.path
                this.current = this.getCurrentTabId(path)
                this.$router.push({path: path})
            },
            getCurrentTabId: function (path){
                let tabMatch = this.tabs.filter(function (item) {
                    if(path === item.router){
                        return true;
                    } else if (path){

                    }
                })[0]
                let tabNotMatch = this.tabs.filter(function (item) {
                    if(path === '/dialog'){
                        return true;
                    } else if (path){

                    }
                })[0]
                return tabMatch ? tabMatch.id : ( tabNotMatch ? tabNotMatch.id : 0)
            },
            tabTap: function (itemId) {
                this.current = itemId
                switch (itemId) {
                    case 0:
                        this.$router.push({path:'/msg'})
                        break;
                    case 1:
                        this.$router.push({path:'/contacts'})
                        break;
                    case 2:
                        this.$router.push({path:'/discover'})
                        break;
                    case 3:
                        this.$router.push({path:'/center'})
                        break;
                    default:
                        this.$router.push({path:'/'})
                        break;
                }
            }
        }
    }
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
