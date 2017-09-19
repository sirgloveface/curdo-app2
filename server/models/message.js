function Message(options) {
    var db;
    if (!options.db) {
        throw new Error('Options.db is required');
    }

    db = options.db;

    return {
        create: (data, done) => {
            db.one("INSERT INTO log(identifier, fecha, json) VALUES ( $1, now(), $2)  RETURNING id_log",
                [data.sender_uuid, JSON.stringify(data)])
                .then((res) => {
                    done(null, res);
                })
                .catch((err) => {
                    done(err);
                });
        },
        list: (done) => {
            db.any('select * from log')
                .then((res) =>  {
                   done(null, res);
                })
                .catch((err) => {
                    done(err);
                });
        }
    }
}

module.exports = Message;

