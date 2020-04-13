
require('whatwg-fetch')

export  default  class View  {

    loadWxml(){
        console.log("hello 5 view")
        fetch('./wxml.js', {
            mode: "no-cors"
        })
            .then(function (response) {
                return response.text
            })
            .then(function (res) {
                console.log(res)
            })

    }

}