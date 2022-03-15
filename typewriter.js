const sentence = 'hello there from lighthouse labs\n';
let x = 0;

for (let i = 0; i < sentence.length; i ++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, x += 50);
};

