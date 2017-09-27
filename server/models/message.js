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
                .then((res) => {
                    done(null, res);
                })
                .catch((err) => {
                    done(err);
                });
        },
        update: (data, done) => {
            db.one("update log set identifier = $1, fecha = now(), json = $2 where id_log = $3",
                [data.sender_uuid, JSON.stringify(data), data.id_log])
                .then((res) => {
                    done(null, res);
                })
                .catch((err) => {
                    done(err);
                });
        },
        delete: (data, done) => {
            // delete item
            db.result('DELETE FROM users WHERE active = $1', [data.id_log])
                .then(res => {
                    // rowCount = number of rows affected by the query
                    // console.log(result.rowCount); // print how many records were deleted;
                    done(null, res);
                })
                .catch(err => {
                    console.log('ERROR:', err);
                    done(err);
                });
        },
        retrieve: (data, done) => {
            db.one("select * from log where id_log = $1",
                [data.id_log])
                .then((res) => {
                    done(null, res);
                })
                .catch((err) => {
                    done(err);
                });

        }
    }
}

module.exports = Message;