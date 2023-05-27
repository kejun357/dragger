<template>
    <div :class="box">
        <span :class="moduleNameTip">{{ title }}</span>
        <div
            v-for="(item, index) in lineNumArr"
            :key="index"
            :class="goodsLine"
        >
            <div
                v-for="(innerItem, innerIndex) in lineItemsArr"
                :key="innerIndex"
                :class="goodsItem"
            >
                <SkeletonGoods
                    :animation="false"
                    :length="1"
                ></SkeletonGoods>
            </div>
        </div>
    </div>
</template>

<script>
import SkeletonGoods from './skeleton/SkeletonGoods';

export default {
    name: 'GoodsAllListView',
    components: {
        SkeletonGoods
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        lineNum: {
            type: Number,
            default: 1
        },
        lineItems: {
            type: Number,
            default: 1
        }
    },
    computed: {
        lineNumArr() {
            return Array(this.lineNum).fill(null);
        },
        lineItemsArr() {
            return Array(this.lineItems).fill(null);
        }
    }
};
</script>

<style lang="scss">
    .box {
        background: #FFFFFF;
    }
    .moduleNameTip {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 16px;
        padding: 8px 15px;
        border-radius: 4px;
        background: rgba(0,0,0,0.8);
        color: #FFFFFF;
        z-index: 3;
    }
    .goodsLine {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .goodsItem {
        width: 272.5px;
    }
    .goodsImg {
        width: 100px;
        height: 100px;
        background: #409EFF;
    }
</style>
