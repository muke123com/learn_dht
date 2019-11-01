const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => console.log('mongodb 连接失败'));
db.once('open', () => console.log('mongodb 连接成功'));

const InfoHashSchema = mongoose.Schema({
    info_hash: String
})

InfoHashSchema.index({info_hash: 1}, {unique: true});

const InfoHash = mongoose.model('InfoHash', InfoHashSchema);

let saveInfoHash = (hash) => {
    const infoHash = new InfoHash({info_hash: hash});
    infoHash.save((err, infoHash) => {
        if(err) {
            return console.log('保存 infohash 失败');
        }
        console.log('成功保存 infohash: %s', infoHash.info_hash);
        
    })
}
module.exports = saveInfoHash;