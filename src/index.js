// Importando as bibliotecas
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Endpoint para buscar o endereço pelo CEP com Fallback
app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;

  try {
    // Primeiro: Tenta buscar no ViaCEP
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const endereco = response.data;

    // Se o CEP não for encontrado no ViaCEP
    if (endereco.erro) {
      return res.status(404).json({ mensagem: 'CEP não encontrado' });
    }

    // Retorna o endereço formatado do ViaCEP
    res.json({
      cep: endereco.cep,
      logradouro: endereco.logradouro,
      bairro: endereco.bairro,
      cidade: endereco.localidade,
      estado: endereco.uf
    });

  } catch (error) {
    console.log("ViaCEP falhou. Tentando BrasilAPI...");

    // Fallback para BrasilAPI
    try {
      const response = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      const endereco = response.data;

      // Retorna o endereço formatado da BrasilAPI
      res.json({
        cep: endereco.cep,
        logradouro: endereco.street,
        bairro: endereco.neighborhood,
        cidade: endereco.city,
        estado: endereco.state
      });
    } catch (error) {
      // Se der erro em ambas as APIs
      res.status(500).json({ mensagem: 'Erro ao consultar o CEP' });
    }
  }
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
