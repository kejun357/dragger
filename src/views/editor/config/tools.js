/**
 * Created by Liu.Jun on 2019/9/29 18:58.
 */

// 基础组件
import componentPackInput from '../viewComponents/Input';
import componentPackTextArea from '../viewComponents/Description'
import componentPackColor from '../viewComponents/Color';
import componentPackInputNumber from '../viewComponents/InputNumber';
import componentPackSlider from '../viewComponents/Slider';

// 是否 Boolean
import componentPackBooleanSwitch from '../viewComponents/SelectBoolean/elSwitch';
import componentPackBooleanCheckbox from '../viewComponents/SelectBoolean/elCheckbox';
import componentPackBooleanSelect from '../viewComponents/SelectBoolean/elSelect';
import componentPackBooleanRadio from '../viewComponents/SelectBoolean/elRadio';

// 单多选
import componentPackRadio from '../viewComponents/SingleSelect/elRadio';
import componentPackRadioBtn from '../viewComponents/SingleSelect/elRadioBtn';
import componentPackRadioSelect from '../viewComponents/SingleSelect/elSelect';

import componentPackMultiSelect from '../viewComponents/MultiSelect/elSelect';
import componentPackMultiCheckbox from '../viewComponents/MultiSelect/elCheckbox';

// 上传
import componentPackUpload from '../viewComponents/Upload';
import componentPackMultiUpload from '../viewComponents/MultiUpload';

// 时间 日期
import componentPackTime from '../viewComponents/Time';

// 日期
import componentPackDate from '../viewComponents/Date';
import componentPackDateString from '../viewComponents/Date/string';

// 日期时间
import componentPackDateTime from '../viewComponents/DateTime';
import componentPackDateTimeString from '../viewComponents/DateTime/string';

// 日期区间
import componentPackDateRange from '../viewComponents/DateRange';
import componentPackDateRangeString from '../viewComponents/DateRange/string';

// 日期时间区间
import componentPackDateTimeRange from '../viewComponents/DateTimeRange';
import componentPackDateTimeRangeString from '../viewComponents/DateTimeRange/string';


// 布局 Object Array
import componentPackObject from '../viewComponents/Object';
import componentPackArray from '../viewComponents/Array';
import elRadioBtn from "../viewComponents/SingleSelect/elRadioBtn";

/**
 * hidden 隐藏，不显示在工具栏
 * maxNum Number 最大可配置数
 * topDisplay Bool 最顶部显示
 * bottomDisplay Bool 最底部显示
 * onlyCanConfig Bool 是否只能配置数据，不能删除 copy
 * @type {*[]}
 */
const tools = [
    {
        groupName: '布局组件',
        componentList: [{
            title: '卡片布局',
            btnClass: 'w100',
            componentPack: componentPackObject
        }, {
            title: '步骤条',
            btnClass: 'w100',
            componentPack: componentPackObject
        }]
    },
    {
        groupName: '业务属性',
        componentList: [{
            title: '租户',
            code: 'tenantId',
            btnClass: 'w100',
            componentPack: componentPackRadio
        }, {
            title: '描述',
            btnClass: 'w100',
            componentPack: componentPackTextArea
        }, {
            title: '资源组',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '区域项目',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '资源标签',
            btnClass: 'w100',
            componentPack: componentPackRadioBtn
        }, {
            title: '计费模式',
            btnClass: 'w100',
            componentPack: componentPackRadio
        }]
    },
    {
        groupName: '资源属性',
        componentList: [{
            title: '云环境',
            btnClass: 'w100',
            componentPack: componentPackRadio
        }, {
            title: '区域',
            btnClass: 'w100',
            componentPack: componentPackRadio
        }, {
            title: '规格',
            btnClass: 'w100',
            componentPack: componentPackRadio
        }, {
            title: '镜像',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '系统盘',
            btnClass: 'w100',
            componentPack: componentPackObject
        }, {
            title: '镜像类型',
            btnClass: 'w100',
            componentPack: componentPackRadioBtn
        }, {
            title: '数据盘',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '专有网络',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '子网',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '安全组',
            btnClass: 'w100',
            componentPack: componentPackRadioSelect
        }, {
            title: '登录方式',
            btnClass: 'w100',
            componentPack: componentPackRadioBtn
        }, {
            title: '登录名',
            btnClass: 'w100',
            componentPack: componentPackObject
        }, {
            title: '密码',
            btnClass: 'w100',
            componentPack: componentPackInput
        }, {
            title: '确认密码',
            btnClass: 'w100',
            componentPack: componentPackInput
        }]
    }
];

export default tools;
