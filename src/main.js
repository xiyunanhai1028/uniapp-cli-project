/*
 * @Author: dfh
 * @Date: 2022-12-29 14:34:22
 * @LastEditors: dfh
 * @Modified By: dfh
 * @describe:
 */
import Vue from "vue"
import App from "./App"

Vue.config.productionTip = false

App.mpType = "app"

const app = new Vue({
  ...App
})
app.$mount()
