const db = require('../database/models')
const { Op } = require("sequelize");

module.exports = {
    
    crear : (req,res) => {
        db.Genre.findAll()
        .then((generos) => {

            return res.render('crearPelicula',{
                generos
            })

        }).catch((err) => {

            res.send(err)

        });
    },
    store : (req,res) => {
        let {title,rating,awards,release_date,length,genero} = req.body
        db.Movies.create({
            title: title,
            rating: +rating,
            awards: +awards,
            release_date: Date(release_date),
            length:+length,
            genre_id:+genero,
            created_at: new Date,
            updated_at: new Date
        })
        .then((result) => {
            res.redirect('/admin/listar')
        }).catch((err) => {
            res.send(err)
        });
    },
    editar : (req,res) => {
        let idParams = +req.params.id
        let generos = db.Genre.findAll()
        let pelicula = db.Movies.findOne({
            where : {
                id : idParams
            }
        })
        Promise.all([generos,pelicula])
        .then(([generos,pelicula]) => {
            
            let generoPeli = generos.find(genero => genero.id === pelicula.genre_id)
            return res.render('editarPelicula',{
                generos,
                pelicula,
                generoPeli
            })
        }).catch((err) => {

            res.send(err)

        });
    },
    update : (req,res) => {
        let idParams = +req.params.id
        let {title,rating,awards,release_date,length,genero} = req.body

        db.Movies.update({
            title: title,
            rating: +rating,
            awards: +awards,
            release_date: Date(release_date),
            length:+length,
            genre_id:+genero,
            updated_at: new Date
        },{
            where : {
                id : idParams
            }
        })

        .then((result) => {
            return res.redirect('/admin/listar')
        }).catch((err) => {
            res.send(err)
        });
    },
    eliminar : (req,res) => {
        let idParams = +req.params.id
        db.Movies.destroy({
            where :{
                id : idParams
            }
        })
        .then(movie => {
            /* return res.send(movie) */
            return res.redirect('/admin/listar')
        })
        .catch(err => res.send(err))
    },
    list: (req,res) => {
        db.Movies.findAll()
        .then(peliculas => {
            return res.render('listarPeliculas',{
                peliculas
            })
        }).catch((err) => {
            res.send(err)
        });
    },
}