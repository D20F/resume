<template>
    <div class="box">
        <titles></titles>
            <!-- <img class="avatar" src="" alt="" /> -->

    </div>
</template>

<script>
export default {
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
    width: 930px;
    height: 1550px;
    margin: 0 auto;
    padding: 30px 60px 0 60px;
    background-color: white;
}.avatar {
    border: 1px solid;
    width: 100px;
    height: 142px;
    position: absolute;
    top: 30px;
    right: 70px;
}
</style>
