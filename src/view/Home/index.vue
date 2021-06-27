<template>
    <div class="box">
        <div class="user">
            <div class="left">
                <div v-for="(item, index) in user" :key="index">
                    <img :src="item.icon" alt="" />
                    <p>{{ item.text }}</p>
                </div>
            </div>
            <div class="right">
                <div v-for="(item, index) in users" :key="index">
                    <img :src="item.icon" alt="" />
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            user: [
                { text: "姓名: 方博", icon: require("@/assets/年龄.png") },
                { text: "年龄: 22", icon: require("@/assets/柱形图.png") },
                {
                    text: "工作经验: 2年",
                    icon: require("@/assets/工作经验.png"),
                },
            ],
            users: [
                {
                    text: "专业: 计算机网络",
                    icon: require("@/assets/专业.png"),
                },
                {
                    text: "手机: 18871349220",
                    icon: require("@/assets/手机.png"),
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
    margin: 0 auto;
    width: 1050px;
    height: 1550px;
    background-color: white;
}
.user {
    width: 80%;
    height: 200px;
    margin: 0 auto;
    padding: 200px 0;
    display: flex;
    font-size: 16px;
    // justify-content: space-between;
    // align-items: center;
    .left {
        div {
            align-items: center;

            display: flex;
        }
        img{
            width: 24px;
            height: 24px;
        }
    }
    .right {
        div {
            align-items: center;

            display: flex;
        }
        img{
            width: 24px;
            height: 24px;
        }
    }
}
</style>
