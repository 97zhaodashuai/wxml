const childProcess = require('child_process')
const pify = require('pify')
const exec = pify(childProcess.exec)

async function compile(){
    await exec('npm run dev', function(err, sto) {
        console.log(sto);
    })
    await exec('copy  ".\\src\\wxml.js" ".\\dist\\script\\wxml.js"   /y')
    // await exec('cd ./dist && anywhere ')
}


compile()