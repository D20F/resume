<template>
    <div class="box">
        <!-- <div class="left">
            <div class="avater">
                <img src="" alt="" />
            </div>
            <div class="userBox">
                <div v-for="(item, index) of user" :key="index">
                    <img src="" alt="" />
                    <p>{{ item }}</p>
                </div>
            </div>
        </div> -->
        <div class="right">

        </div>
    </div>
</template>
sa
<script>
export default {
    name: "Home",
    data() {
        return {
            user: [1,1,1,1],
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
    width: 750px;
    height: 1125px;
    .avater {
        width: 120px;
        height: 120px;
        padding-top: 80px;
        margin: 0 auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .userBox{
        width: 80%;
        margin: 0 auto;
        div{
            display: flex;
            justify-content: left;
            align-items: center;
        }
    }
}
.left {
    width: 30%;
    height: 100%;
    background: orange;
}
</style>
