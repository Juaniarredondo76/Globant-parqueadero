import {ServicioAdministrador} from '../services/ServicioAdministrador.js'

export class ControladorAdministrador{

    constructor(){}

    async buscarAdministrador(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            response.status(200).json({
                mensaje:'exito en el admin',
                data: await servicioAdministrador.buscarTodos()
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallamos en el admin'+error,
                data: null
            })
        }
        
    }

    async buscarAdministrador(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            let id=request.params.id
            response.status(200).json({
                mensaje:'exito buscando el admin',
                data: await servicioAdministrador.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                mensaje:'fallo buscando el admin'+error,
                data: null
            })
        }
    }

    async editarAdministrador(request,response){

        let servicioAdministrador=new ServicioAdministrador()
        try{
            let id=request.params.id
            let datos=request.body
            await servicioAdministrador.editar(id,datos)
            response.status(200).json({
                mensaje:'exito editando el admin',
                data: null
            })

        }catch(error){
            response.status(400).json({
                mensaje:'fallo editando el admin'+error,
                data: null
            })

        }

    }

    async agregarAdministrador(request,response){
        let servicioAdministrador=new ServicioAdministrador()
        try{

            let datos=request.body
            await servicioAdministrador.ingresar(datos)
            response.status(200).json({
                mensaje:'exito registrando el admin',
                data: null
            })

        }catch(error){

            response.status(200).json({
                mensaje:'fallo registrando el admin'+error,
                data: null
            })

        }
    }

}