const express = require ('express')
const massive = require ('massive')
const dotenv = require ('dotenv')
dotenv.config()

const app = express ()

const Controller = require ('./controller')

const {CONNECTION_STRING} = process.env

massive (CONNECTION_STRING)
.then(dbInstance => {
    app.set ('db', dbInstance)
}).catch(err => console.log(err))

app.use(express.json())

app.post ('/api/houses', controller.addHouse)
app.get ('/api/houses', controller.getAllHouses)
app.delete ('/api/houses:id', controller.deleteHouse)

app.listen (4000, () => console.log (`Listening on port 4000`))

