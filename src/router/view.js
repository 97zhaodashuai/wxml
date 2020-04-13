
require('whatwg-fetch')

export  default  class View  {

    loadWxml(){
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



            })
    }

}