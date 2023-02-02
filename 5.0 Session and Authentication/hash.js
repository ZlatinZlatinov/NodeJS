const bcrypt = require('bcrypt');

const saltRounds = 10;
const myRawPAssword = '1234wasd';

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myRawPAssword, salt, (err, hash) => {
        console.log('The hashed passsword is: ' + hash);
    });
});

const keyboardHeadSmash = '$2b$10$Hu/u5SZNLyMqB4OmLCElj.zljIvNlxVvIHc0ASHPt8jznb6l6OMS.';

bcrypt.compare(myRawPAssword, keyboardHeadSmash, (err, res) => {
    console.log(res); // true
});