let names = ['charlie', 'brian', 'alex']

module.exports = {
    getNames: (req, res) => {
        res.status(200).send(names)
    }, 
    addName: (req, res) => {
        names.push(req.body.name)
        res.status(200).send(names)
    }
}