
const { response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - Controlador papa', 
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response) => {

    const { id }  = req.params;

    res.json({
        msg: 'Put API - Controlador papa' , 
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Post API - Controlador papa',
        nombre,
        edad,
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador papa'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - Controlador papa'
    });
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
} 