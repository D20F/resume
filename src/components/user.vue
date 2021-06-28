<template>
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
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        user: {
            type: Array,
            default: () => {
                return [];
            },
        },
        users: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    mixins: [],
    created() {},
    methods: {},
    computed: {},
};
</script>



<style scoped lang="scss">
.user {
    width: 60%;
    padding: 20px 0;
    display: flex;
    font-size: 16px;
    // border: 1px solid;
    // justify-content: space-between;
    // align-items: center;
    p{
        color: #747474;
    }
    .left {
        div {
            align-items: center;
            display: flex;
            margin: 0 90px 25px 0px;
        }
        img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
        }
    }
    .right {
        div {
            align-items: center;
            display: flex;
            margin: 0 30px 25px 0px;
        }
        img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
        }
    }
}

</style>
