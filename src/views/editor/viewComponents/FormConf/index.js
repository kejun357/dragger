/**
 * Created by Liu.Jun on 2020/11/20 17:44.
 */

import { formatFormLabelWidth } from '../../common/editorData';


export default {
    type: 'object',
    required: [],
    properties: {
        formProps: {
            title: '表单配置',
            type: 'object',
            properties: {
                inline: {
                    type: 'boolean',
                    title: 'Inline布局',
                    default: false,
                    'ui:hidden': true
                },
                inlineFooter: {
                    type: 'boolean',
                    title: 'Footer inline',
                    default: false,
                    'ui:hidden': true
                },
                labelPosition: {
                    title: '标签对齐方式',
                    type: 'string',
                    default: 'left',
                    enum: [
                        'left',
                        'right',
                        'top'
                    ],
                    enumNames: [
                        'Left',
                        'Right',
                        'Top'
                    ],
                },
                labelWidth: {
                    title: '标签宽度',
                    type: 'number',
                    default: 25, // 4倍像素
                    'ui:widget': 'ElSlider',
                    'ui:options': {
                        formatTooltip(val) {
                            return formatFormLabelWidth(val);
                        }
                    }
                },
                labelSuffix: {
                    title: '表单项后缀',
                    type: 'string',
                    default: '：'
                }
            }
        },
        /*formFooter: {
            title: '表单Footer配置',
            type: 'object',
            properties: {
                show: {
                    type: 'boolean',
                    title: '是否显示底部',
                    default: false
                },
                okBtn: {
                    type: 'string',
                    title: '确认按钮文字',
                    default: '保存'
                },
                cancelBtn: {
                    type: 'string',
                    title: '取消按钮文字',
                    default: '取消'
                }
            }
        }*/
    }
};
