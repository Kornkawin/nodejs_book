const bcrypt = require('bcrypt');
const fs = require('fs');

// collect password
const saltRounds = 10;
const passwd = 'password';
bcrypt.genSalt(saltRounds, (err, salt) => {
    console.log(`salt: ${salt}`);
    
    bcrypt.hash(passwd, salt, (err, hash) => {
        console.log(`hashed: ${hash}`);
        
        // collect hashed password
        fs.writeFileSync('./password.txt', hash);
    
        console.log('collect password!')
    });
});

setTimeout(() => {checkPasswd(passwd)}, 5000);

const checkPasswd = (passwd_input) => {
    // retrieve hashed password
    const myHashFromDB = fs.readFileSync('./password.txt', 
                                        {encoding:'utf8', flag:'r'});
    
    console.log(`hashed: ${myHashFromDB}`);
    console.log('retrieve password!')

    // compare password input
    bcrypt.compare(passwd_input, myHashFromDB, (err, res) => {
        if (res === true) {
            console.log('password match!');
        } else {
            console.log('mismatch please try again!!!');
        }
    });
};