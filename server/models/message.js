function messageModel (options) {
    var db;
    if (!options.db) {
        throw new Error('Options.db is required');
    }

    db = options.db;

    return {
            create: function (done) {
               db.query('SELECT * FROM log', [], (err, res) => {
                    if (err) {
                        throw err
                    }
                }, done);

        }
    }
}
module.exports = messageModel;