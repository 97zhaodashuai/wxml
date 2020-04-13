import WxVirtualNode from './WxVirtualNode'
import Utils from './Utils'
import WxVirtualText from './WxVirtualText'



export  const  createBodyNode = function (data) {
    let page ='./script/wxml.js'
    let root = window.__generateFunc__(page)
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


