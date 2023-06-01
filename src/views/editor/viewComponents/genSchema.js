/**
 * Created by Liu.Jun on 2020/10/26 18:24.
 */

import { formatFormLabelWidth } from '../common/editorData';

function genBaseVal(type = 'string', isMultiSelect = false) {
    return {
        title: '基础配置',
        type: 'object',
        properties: {
            schemaOptions: {
                type: 'object',
                properties: {
                    ...!['array', 'object'].includes(type) ? {
                        default: {
                            title: '默认值',
                            type,
                            'ui:placeholder': '输入默认值'
                        },
                    } : {},
                    ...['array'].includes(type) ? {
                        minItems: {
                            title: '最少子元素',
                            type: 'number'
                        },
                        maxItems: {
                            title: '最多子元素',
                            type: 'number'
                        },
                        uniqueItems: {
                            type: 'boolean',
                            title: '不重复',
                            description: '多选框强制默认为 true，且配置无效',
                            'ui:widget': 'el-switch',
                            default: false
                        }
                    } : {}
                }
            },
            uiOptions: {
                type: 'object',
                properties: {
                    ...!['array', 'object'].includes(type) || isMultiSelect ? {
                        required: {
                            title: '必填',
                            type: 'boolean',
                            default: true
                        },
                        disabled: {
                            title: '禁用',
                            type: 'boolean',
                            default: false
                        }
                    } : {
                        /*showTitle: {
                            title: '显示标题',
                            type: 'boolean',
                            default: true,
                            'ui:widget': 'el-switch'
                        },
                        showDescription: {
                            title: '显示描述',
                            type: 'boolean',
                            default: true,
                            'ui:widget': 'el-switch'
                        }*/
                    },
                }
            }
        }
    };
}

export default (schema, type, isMultiSelect) => ({
    type: 'object',
    required: ['property'],
    properties: {
        property: {
            title: 'code',
            type: 'string',
            'ui:disabled': true,
            'ui:placeholder': '请输入属性名',
            'err:required': '属性名必填'
        },
        baseValue: genBaseVal(type, isMultiSelect),
        ...schema
    }
});
