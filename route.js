const Hapi= require('hapi')

const func = () =>{
    const server = Hapi.server({
        port:4000,
        host:'localhost'
    })

    server.route({
        method:'GET',
        path:'/',
        handler:(req,h)=>{
            return 'THIS IS GET REQUEST'
        }
    })

    server.route({
        method: ['POST'],
        path: '/',
        handler: function (req, h) {
    
            return 'This IS POST REQUEST';
        }
    });

    server.start()
    console.log(`SERVER RUNNING on PORT ${server.info.port}`)
    console.log(`SERVER RUNNING on ${server.info.uri}`)

}

func()