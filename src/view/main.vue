<template>
    <div class="box">
        <p class="name">方博</p>
        <user :user="user" :users="users" />
        <img class="avatar" src="@/assets/w.jpg" alt="" />

        <titles text="工作经历" />
        <titles text="项目经验" />
        <titles text="专业技能" />
        <div class="bule-title">
            <p>2019.06 - 2021.7</p>
            <p>广州孢子科技有限公司</p>
            <p>前端开发</p>
        </div>
        <ul>
            <li>参与Web项目的技术选型以及架构设计</li>
            <li>根据公司项目需求开发后台管理系统, 微信小程序, App</li>
            <li>开发团队内部工具，并制定工作规范</li>
            <li>参与项目重构的讨论</li>
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
    height: 1550px;
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
    p:nth-child(1) {
        top: 1px;
        position: relative;
    }
}
</style>
