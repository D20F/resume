<template>
    <div class="box">
        <p class="name">方博</p>
        <user :user="user" :users="users" />
        <img class="avatar" src="@/assets/w.jpg" alt="" />

        <titles text="工作经历" />
        <div class="bule-title">
            <p>2019.06 - 2020.3</p>
            <p>广州悦智科技有限公司</p>
            <p>前端开发</p>
        </div>
        <ul class="content">
            <li>参与Web项目的技术选型以及架构设计</li>
            <li>根据公司项目需求开发后台管理系统, 微信小程序, App</li>
            <li>开发团队内部工具，并制定工作规范</li>
            <li>参与项目重构的讨论</li>
        </ul>
        <div class="bule-title">
            <p>2020.03 - 2021.7</p>
            <p>广州孢子科技有限公司</p>
            <p>前端开发</p>
        </div>
        <ul class="content">
            <li>参与Web项目的技术选型以及架构设计</li>
            <li>根据公司项目需求开发后台管理系统, 微信小程序, App</li>
            <li>开发团队内部工具，并制定工作规范</li>
            <li>参与项目重构的讨论</li>
        </ul>
        <titles text="项目经验" />



        <!-- 虚拟列表保证input长列表选择保证性能
        echarts图表   性能优化
        富文本制作
        动态权限设计  -->
        <div class="bule-title">
            <p>小蛐垃圾回收管理系统</p>
            <p>2020.07 - 2020.12</p>
        </div>
        <ul class="content">
            <li>项目背景: 使用Vue,Element开发的后台管理系统。</li>
            <li>工作：担任项目的主开发，负责技术架构设计和后期维护。</li>
            <li type="circle">
                对于本系统的权限管理,我提出使用角色加模块的方式。Vue-Router里面只保有基础页面路由。其他页面，需要登陆之后,请求后端权限,然后使用addRoutes，添加进项目路由中。
                可保证不同权限角色登陆,进行动态的加载侧边栏。并且使用自定义指令控制按钮的显示，保证了权限的完全控制。
            </li>
            <li type="circle">
                对于多次复用的逻辑,我使用混入、过滤器、自定义指令进行统一封装。保证代码的复用及简洁性。
            </li>
            <!-- 待定 太low -->
            <li type="circle">
                对于数据过多的页面,我使用视图下拉加载，用户不下拉到底部即不加载,加快页面的加载速度。
            </li>
            <!-- 这个cdn 引入打包 待定 容易吹错 -->
            <li type="circle">
                对于Vue、VueRouter、Viser-vue、Element-ui等这种不常变化的资源,修改webpack配置不加入打包范围,而是通过
                cdn 引入,减少代码大小和服务器带宽,提高网站性能。
            </li>
        </ul>

        <!-- 自己使用cordova file 插件封装一个上传的插件 Blob  Uint8Array   formdata    
        使用eos库
        接入其他外链网页 来做到游戏功能
        采用骨架屏和loading保证观感
        使用cordova 插件来完成原生功能
        使用canvas来完成高质量的动画效果 -->
        <div class="bule-title">
            <p>GPS钱包</p>
            <p>2019.06 - 2020.01</p>
        </div>
        <ul class="content">
            <li>项目背景: 区块链虚拟货币钱包</li>
            <li>工作：担任项目的前端开发。</li>
            <li type="circle">
                该钱包基于Vue,Cordova开发。页面布局通过使用Rem,Flex来实现移动端适配。
            </li>

            cordova-plugin-camera和 qrcode 结合 实现扫码

            <li type="circle">
                钱包使用Eos库对链进行转账查询功能。对于钱包的扫码转账功能,我使用Cordova和Qrcode封装了一组扫码转账组件,以便在项目中使用。
            </li>
            <li type="circle">
                使用LocalStorage,Cookie实现账号数据持久化功能。与后端接口的数据交换,使用token验证保证数据的安全。
            </li>
            <li type="circle">
                Vue-Router使用懒加载写法,钱包中的数据列表使用下拉懒加载保证页面的加载速度。
            </li>
        </ul>



        <!-- 海报canvas快照
        地图跳转 地图标准画点
        富文本公告
        虚拟列表 下拉加载 保证性能 -->
        <div class="bule-title">
            <p>小蛐垃圾回收管理系统</p>
            <p>2020.06 - 2020.12</p>
        </div>
        <ul class="content">
            <li>项目背景: 垃圾分类回收小程序</li>
            <li>工作：担任项目的主开发，负责技术架构设计和后期维护。</li>
            <li type="circle">
                该小程序基于Uniapp开发,页面通过u-view快速构建开发。
            </li>
            <li type="circle">
                产品提出需要能让用户快速分享个人海报到朋友圈。我使用原生canvas功能实现生成个人海报照片，以供用户分享朋友圈。
            </li>
            <li type="circle">
                项目中需要在地图中显示附近的垃圾桶,使用框架提供的Map组件和微信提供的经纬度,结合后端数据实现在地图上显示垃圾回收站信息。
            </li>
        </ul>
        <titles text="专业技能" />
        <ul class="content">
            <li>
                熟练使用Vue、Vue-Router、Vuex进行开发，了解双向数据绑定原理，熟练使用组件、混入、过滤器等。
            </li>
            <li>熟练使用Cordova, Uniapp进行全平台开发。</li>
            <li>了解Node,运用Egg搭建本地server模拟接口返回数据测试接口。</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: [
                { text: "年龄: 22", icon: require("@/assets/柱形图.png") },
                { text: "学历: 专科", icon: require("@/assets/学历.png") },
                {
                    text: "手机: 18871349220",
                    icon: require("@/assets/手机 (1).png"),
                },
            ],
            users: [
                {
                    text: "工作经验: 2年",
                    icon: require("@/assets/工作经验.png"),
                },
                {
                    text: "专业: 计算机网络",
                    icon: require("@/assets/专业.png"),
                },
                {
                    text: "邮箱: d2442563148@163.com",
                    icon: require("@/assets/邮箱.png"),
                },
            ],
        };
    },
    components: {},
    mixins: [],
    created() {},
    methods: {},
    computed: {},
};
</script>

<style scoped lang="scss">
.box {
    position: relative;
    width: 930px;
    height: 1520px;
    margin: 0 auto;
    padding: 30px 60px 0 60px;
    background-color: white;
}
.name {
    font-size: 34px;
    // font-weight: 600;
    color: #222;
}
.avatar {
    border: 4px solid #e5e5e5;
    height: 140px;
    position: absolute;
    top: 54px;
    right: 70px;
}
.bule-title {
    font-size: 20px;
    font-weight: 600;
    color: #0b70bd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    p:nth-child(2) {
        top: 1.8px;
        position: relative;
    }
}
.content{
    font-size: 17px;
    margin: .5rem 0 27px 0;
}
</style>
