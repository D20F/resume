<template>
    <div class="box">
        <!-- <user :user="user" :users="users" />
        <titles :text="212122" /> -->
        <!-- <img class="avatar" src="" alt="" /> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            user: [
                { text: "哈哈: 哈哈", icon: require("@/assets/柱形图.png") },
                { text: "哈哈: 哈哈", icon: require("@/assets/柱形图.png") },
                {
                    text: "哈哈哈哈: 哈哈",
                    icon: require("@/assets/柱形图.png"),
                },
            ],
            users: [
                {
                    text: "哈哈: 哈哈哈哈哈",
                    icon: require("@/assets/邮箱.png"),
                },
                {
                    text: "哈哈: 哈哈哈哈哈哈哈",
                    icon: require("@/assets/邮箱.png"),
                },
                {
                    text: "哈哈: 哈哈哈哈哈哈哈哈哈哈哈",
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
.avatar {
    border: 1px solid;
    width: 100px;
    height: 142px;
    position: absolute;
    top: 30px;
    right: 70px;
}
</style>
