const childProcess = require('child_process')
const pify = require('pify')
const exec = pify(childProcess.exec)

async function compile(){
    await exec('npm run dev')
    // await exec('cd ./dist && anywhere ')
}


compile()