function messageModel (options) {
    var db;
    if (!options.db) {
        throw new Error('Options.db is required');
    }

    db = options.db;

    return {
            create: function (done) {
                var r;
               db.query('SELECT * FROM log', [], (err, res) => {
                    if (err) {
                        throw err
                    }
                  r = [{"id":"dd"},{"id":"dd"}];
                });
                return r;
        }
    }
}
module.exports = messageModel;