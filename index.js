//Importar dependencias
const express = require('express')
const app = express()
const path = require('path')
const { engine } = require('express-handlebars')

//Disponibiliza puerto
const port = 3000
app.listen(port)
console.log(`Servidor corriendo puerto ${port}`)

// Método engine para definir objeto de configuración handlebars
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layout'),
    partialsDir: path.join(__dirname, './views/partials'),
  })
)

//Middlewares. Disponibiliza para el cliente la ruta /bootstrap y /jquery para acceder a las carpetas
app.use(express.static(__dirname + '/public'))
app.use("/bootstrapCss", express.static(__dirname + "/node_modules/bootstrap/dist/css"))
app.use('/bootstrapJs', express.static(__dirname + "/node_modules/bootstrap/dist/js"))
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"))

app.set("view engine", "handlebars")
app.set("views", "./views")

// Ruta contenedora de arreglo con productos
app.get("/", function (req, res) {
  res.render("Dashboard", {
    productos: [
      'banana',
      'cebollas',
      'lechuga',
      'papas',
      'pimenton',
      'tomate'],
  })
})