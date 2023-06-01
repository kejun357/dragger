<template>
  <div>
    <div>
<!--      <el-form :inline="true" :model="formInline" class="demo-form-inline">-->
        <el-form-item label="租户">
          <el-radio-group v-model="cloudType" size="small">
            <el-radio-button
                v-for="item in listData"
                :label="item.label"
                :value="item.value"
                :key="item.value"
            ></el-radio-button>
          </el-radio-group>
        </el-form-item>
<!--      </el-form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'radioBtn',
/*  props: {
    inline: {
      type: Boolean,
      default: true
    }
  },*/
  data () {
    return {
      cloudType: '天翼云',
      listData: [{
        label: '天翼云',
        value: 'TIANYI'
      }, {
        label: '华为云',
        value: 'HUAWEI'
      }, {
        label: '阿里云',
        value: 'ALI'
      }, {
        label: 'HCS 8.0',
        value: 'FS'
      }]
    };
  }
}
</script>