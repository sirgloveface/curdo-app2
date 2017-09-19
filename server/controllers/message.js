const pool = require('../dao/dao');
const Message = require('../models/message')({
    db: pool
});
module.exports = {
    create(req, res) {
        // res.json(data); // return all in JSON format
        var d = {"sender_uuid" : "2","tweet" : "hola"};
        Message.create(d, (err, data) =>{
            if (err)  res.status(500).send(err);
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Registro insertado con exito'
            });
        });
    },
    list(req, res){
         Message.list((err, data) => {
            if (err)  res.status(500).send(err);
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retorno datos de la tabla log'
            });
         });
    }
};