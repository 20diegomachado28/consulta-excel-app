// Criar dados de exemplo para testar a aplicação
const sampleData = [
  {
    codigo: "001",
    descricao: "Máquina de Solda MIG 5000A",
    quantidade: 10,
    grupo: "Soldas",
    marca: "ESAB",
    voltagem: "220V",
    corrente: "5000A",
    tamanho: "Grande",
    peso: "50kg"
  },
  {
    codigo: "002", 
    descricao: "Furadeira de Bancada Industrial",
    quantidade: 5,
    grupo: "Ferramentas",
    marca: "Bosch",
    voltagem: "110V",
    corrente: "15A",
    tamanho: "Médio",
    peso: "25kg"
  },
  {
    codigo: "003",
    descricao: "Compressor de Ar 100L",
    quantidade: 3,
    grupo: "Pneumática",
    marca: "Schulz",
    voltagem: "220V",
    corrente: "20A", 
    tamanho: "Grande",
    peso: "80kg"
  }
];

// Simular carregamento de dados
window.testData = sampleData;
console.log('Dados de teste carregados:', sampleData);

