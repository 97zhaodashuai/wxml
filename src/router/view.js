
require('whatwg-fetch')

export  default  class View  {

    createPage (id, hidden, parent = document.body) {
        let el = document.createElement('div')
        el.setAttribute('id', 'weweb-view-' + id)
        el.setAttribute('view-id', id)
        el.style.height = '100%'
        if (hidden) {
            el.style.display = 'none'
        }
        parent.appendChild(el)
        this.elParent = parent
        el.innerHTML = '<div id="view-body-' + id + '"></div>'
        return el
    }


    loadWxml(){
        this.createPage(0, false, document.body)
        console.log("hello 5 view")
        fetch('./script/wxml.js')
            .then(function (response) {
                return response.text()
            })
            .then(function (res) {
                // console.log(res)

                var func = new Function(res)
                window.__generateFunc__ = func()
                // var root = func('./script/wxml.js')
                // window.__generateFunc__()
                // console.log(root)
            }
        )
    }

}