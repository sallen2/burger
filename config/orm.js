const con = require('../config/connection')

const orm = {
    create: val =>{
        return new Promise((reject, resolve)=>{
            con.query('INSERT INTO burger SET ?',{
                burger_name: val,
                devour: true
            },(err,resp)=>{
                if(err) reject(err)
                resolve('Created!')
            })
        })
    },
    read: ()=>{
        return new Promise((reject,resolve)=>{
            con.query('SELECT * FROM burger',(err,resp)=>{
                if(err) reject(err)
                resolve(resp)
            })
        })
    },
    update: val =>{
        return new Promise((reject,resolve)=>{
            con.query('UPDATE burger WHERE ?',
            {
                burger_name: val
            },(err,resp)=>{
                if(err) reject(err)
                resolve(`update! ${resp}`)
            })
        })
    }
}
