const Hapi= require('hapi')

const func = () =>{
    const server = Hapi.server({
        port:4000,
        host:'localhost'
    })

    server.start()
    console.log(`SERVER RUNNING on PORT ${server.info.port}`)
    console.log(`SERVER RUNNING on ${server.info.port}`)

}

func()