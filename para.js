const Hapi= require('hapi')

const func = () =>{
    const server = Hapi.server({
        port:4000,
        host:'localhost'
    })

    server.route({
        method:'GET',
        path:'/{name}',
        handler:(req,h)=>{
            const name= req.params.name;
            return 'THIS ' + name +' PARAMETER is PASSED'
        }
    })

    server.start()
    console.log(`SERVER RUNNING on PORT ${server.info.port}`)
    console.log(`SERVER RUNNING on ${server.info.uri}`)

}

func()