const step1 = () => {
    setTimeout(() => {
        console.log('1st step');
    }, 1000);
};

const step2 = () => {
    console.log('2nd step');
};

step1();
step2();