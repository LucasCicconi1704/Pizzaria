const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");


/* pedidos*/
//const pedidosFilePath = path.join(__dirname, "../data/pedidos.json");
//const pedidos = JSON.parse(fs.readFileSync(pedidosFilePath, "utf-8"));
/* Usuarios */
//const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");
//const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

/* Proyectos */
//const proyectosFilePath = path.join(__dirname, "../data/proyectos.json");
//const proyectos = JSON.parse(fs.readFileSync(proyectosFilePath, "utf-8"));

/* Categorias */
//const categoriasFilePath = path.join(__dirname, "../data/categorias.json");
//const categorias = JSON.parse(fs.readFileSync(categoriasFilePath, "utf-8"));

/* Categorias */
//const proyCatFilePath = path.join(__dirname, "../data/proyectoCategoria.json");
//const proyCat = JSON.parse(fs.readFileSync(proyCatFilePath, "utf-8"));

module.exports = {
  //index
  index: (req, res) => {

    res.render("index", {
      //listaProyectos: listaProyectos,
      //listaCategorias: listaCategorias,
      //proyectoCategoria: proyCat,
    });
  },
  menu: (req, res) => {
    res.render("menu");
  },
  postres: (req, res) => {
    res.render("postres");
  },
};
