<template>
    <div class="titles">
        <div class="oricl">
            <p>{{text}}</p>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: {
        text: {
            type: String,
            default: () => {
                return '';
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
.titles {
    position: relative;
    height: 45px;
    margin-bottom: 7px;
    .oricl {
        position: absolute;
        width: inherit;
        border-bottom: 45px solid #0b70bd;
        border-right: 25px solid transparent;
        height: 0;
        line-height: 45px;
        padding: 0 12px;
        p {
            font-size: 24px;
            color: #ffffff;
        }
    }
    .line {
        position: absolute;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        bottom: 0;
        background: #0b70bd;
    }
}
</style>
