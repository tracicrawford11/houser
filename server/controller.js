module.exports = {
    addHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, address, city, state, zip, img, mortgage, rent} = req.body

        dbInstance.addHouse([name, address, city, state, zip, img, mortgage, rent])
        .then ( () => res.sendStatus(200))
        .catch (err => {
            res.status(500).send({errorMessage: "An error has occurred"})
            console.log(err)
        })
    },
    getAllHouses: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_houses().then (houses => res.status(200).send(houses))
        .catch (err => {
            res.status(500).send({errorMessage: "An error has occurred"})
            console.log(err)
        })
    },
    deleteHouse: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.deleteHouse(id).then ( () => res.sendStatus(200))
        .catch (err => {
            res.status(500).send({errorMessage: "An error has occurred"})
        })
    }
}