const dao = require('../models').dao;
module.exports = {
    create(req, res) {
    console.log(dao);

    let h = {"id" :"1", "name": "tony"};

    dao.any('select * from log')
            .then(function (data) {

                // response.json(data); // return all todos in JSON format
                res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'Retorno datos de la tabla log'
                    });
            })
            .catch(function (err) {
                res.status(400).send(err);
            });


    }
};