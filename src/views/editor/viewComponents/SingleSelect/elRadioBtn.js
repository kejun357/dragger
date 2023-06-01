/**
 * Created by Liu.Jun on 2020/12/10 15:41.
 */
import elRadioBtn from "./elRadioBtns.vue";
import baseRadio from './index';
import Vue from "vue";
Vue.component('elRadioBtn', elRadioBtn)
const viewSchema = {
    title: '云环境',
    type: 'string'
};

export default {
    component: elRadioBtn,
    viewSchema,
    elRadioBtn,
    componentViewName: 'elRadioBtn',
    propsSchema: baseRadio.propsSchema
};
