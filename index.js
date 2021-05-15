const start = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('fizzbuuz');
    if (i % 5 === 0) console.log('buzz');
    if (i % 3 === 0) console.log('fizz');
    else console.log(i);
  }
};

start();
