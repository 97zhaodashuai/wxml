import './router'


import './view/exparser'
import './view/exparser-component'
import './view/components'

import './view/virtual-dom'

import './view/cus-exparser'

import View from "./router/view";
import {firstTimeRender} from "./view/virtual-dom";

let demo = new View()
demo.loadWxml()


setTimeout(function () {
    let ev = {}
    ev.data = './script/wxml.js'
    let nodes = firstTimeRender(ev)
    console.log(nodes)

    console.log('hello fone')
}, 2000)



