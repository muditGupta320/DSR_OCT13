const Hapi= require('hapi')
const Path = require('path');



const func = async () =>{
    const server = Hapi.server({
        port:4000,
        host:'localhost'
    })

    await server.register(require('@hapi/vision'));

    server.views({
        engines: {
            html: require('html')
        },
        relativeTo: __dirname,
        path: 'views'
    });

    server.route({
        method:'GET',
        path:'/index',
        handler:(req,h)=>{
            return h.view('index.html')
        }
    })
    


    server.start()
    console.log(`SERVER RUNNING on PORT ${server.info.port}`)
    console.log(`SERVER RUNNING on ${server.info.port}`)

}

func()



