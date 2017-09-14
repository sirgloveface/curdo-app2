const pool = require('../dao/dao');
const messageModel = require('../models/message')({
    db: pool
});
module.exports = {
    create(req, res) {
        // response.json(data); // return all todos in JSON format

        var da = [];
        var data =  messageModel.create(da);
        return  res.status(200)
                    .json({
                        status: 'success',
                        data: data,
                        message: 'Retorno datos de la tabla log'
                    })


    }
};