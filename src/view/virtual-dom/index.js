import WxVirtualNode from './WxVirtualNode'
import Utils from './Utils'
import WxVirtualText from './WxVirtualText'



window.__DOMTree__ = void 0 // 虚拟dom生成的domtree
window.reRender = 0
let rootNode = void 0

function setGlobalPageAttr (name, value) {
    window[name] = value
    window.__curPage__ = {
        name: name,

        value: value
    }
}
function setRootNode (value) {
    rootNode = value
    window.__curPage__ = {
        name: 'rootNode',
        value: value
    }
}



const firstTimeRender = function (event) {
    // if (event.ext) {
    //     event.ext.enablePullUpRefresh &&
    //     setGlobalPageAttr('__enablePullUpRefresh__', !0)
    // }
    setRootNode(createBodyNode(event.data))
    setGlobalPageAttr('__DOMTree__', rootNode.render())
    exparser.Element.replaceDocumentElement(
        window.__DOMTree__,
        document.querySelector('#view-body-0')
    )
    // let domReady = '__DOMReady'
    // wd.publishPageEvent(domReady, {})
    // TouchEvents.enablePullUpRefresh()
}

const  createVirtualTree = function (root) {
    let body = createWXVirtualNodeRec(root)
    return body
}





const  createBodyNode = function (data) {
    // let page ='./script/wxml.js'
    let root = window.__generateFunc__(data)
    // t.tag = "body"
    let body = createWXVirtualNodeRec(root)
    return body
}

const createWXVirtualNodeRec = function (opt) {
    // Recursively
    if (Utils.isString(opt) || (Number(opt) === opt && Number(opt) % 1 === 0)) {
        return createWxVirtualText(String(opt))
    }
    let children = []
    opt.children.forEach(function (child) {
        children.push(createWXVirtualNodeRec(child))
    })
    return createWXVirtualNode(
        opt.tag,
        opt.attr,
        opt.n,
        opt.wxKey,
        opt.wxVkey,
        children
    )
}


const createWxVirtualText = function (txt) {
    return new WxVirtualText(txt)
}


const createWXVirtualNode = function (
    tagName,
    props,
    newProps,
    wxkey,
    wxVkey,
    children
) {
    return new WxVirtualNode(tagName, props, newProps, wxkey, wxVkey, children)
}


export {
    firstTimeRender,
    createVirtualTree
}

