import Vue from 'vue'
import SvgIcon from '@/components/svg-icon/index'

// 注册
Vue.component('svg-icon', SvgIcon)

const reg = require.context('./svgs', false, /\.svg$/)
const requireAll = context => context.keys().map(context)
requireAll(reg)