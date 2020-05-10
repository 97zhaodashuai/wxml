import './router'


import './view/exparser'
import './view/exparser-component'
import './view/components'

import './view/virtual-dom'

import './view/cus-exparser'
// import './view/amdEngine'

import View from "./router/view";
import {firstTimeRender} from "./view/virtual-dom";
import {registerCusElement} from "./view/exparser/main";



registerCusElement()

let demo = new View()
demo.loadWxml()



setTimeout(function () {
    let ev = {}
    ev.data = './script/wxml.js'
    let nodes = firstTimeRender(ev)
    console.log(nodes)

    console.log('hello fone')
}, 2000)



