<template>
    <div class="titles">
        <!-- <div class="oricl">
            <p>{{ text }}</p>
        </div> -->
        <img
            v-if="text == '工作经历'"
            style="width: 145px; height: 45px"
            src="@/assets/工作经历.png"
            alt=""
        />
        <img
            v-else-if="text == '项目经验'"
            style="width: 145px; height: 45px"
            src="@/assets/项目经验.png"
            alt=""
        />
        <img
            v-else-if="text == '专业技能'"
            style="width: 145px; height: 45px"
            src="@/assets/专业技能.png"
            alt=""
        />
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
                return "";
            },
        },
    },
    mixins: [],
    created() {},
    methods: {},
    computed: {
    },
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
        height: 5px;
        border-bottom: 1px solid #0b70bd;
        bottom: 0;
    }
}
</style>
