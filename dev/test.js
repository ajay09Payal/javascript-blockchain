const Blockchain = require('./blockchain');

const bitCoin = new Blockchain();

bitCoin.createNewBlock(1233, 'SA4654S464AS', '4S6A4D6AS4D6AS');
bitCoin.createNewBlock(4654, '65AS461321DSA', '65464SDF654SD');
bitCoin.createNewBlock(3321, '45D6SA4AS6D4S', '697S9D7F94654');
bitCoin.createNewBlock(6464, '654FDS64SDF64', '54654FDS64SDF64');

console.log(bitCoin);