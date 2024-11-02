let carro = {
  marca: "mazda",
  modelo: "2009",
  valor: 40000000,
};

for (auto in carro) {
  console.log(auto);
}

for (auto in carro) {
    console.log(`${auto}: ${carro[auto]}`);
  }
