# API ViaCEP com Fallback 🚀

Esta é uma API RESTful para buscar endereços pelo CEP utilizando:
- **ViaCEP** como principal fonte de dados.
- **Fallback para BrasilAPI** caso o ViaCEP esteja fora do ar.

---

## 📚 Funcionalidades

- Buscar endereço pelo CEP.
- Fallback para BrasilAPI se o ViaCEP estiver indisponível.
---

## 🔧 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/joao-moreirajr/soa-api-viacep.git
    cd soa-api-viacep
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ```

3. **Inicie o servidor:**
    ```sh
    node src/index.js
    ```

4. **Acesse em:**
    ```
    http://localhost:3000/cep/01001000
    ```

---

## 📂 Estrutura do Projeto

api-viacep/ │ package.json │ package-lock.json │ .gitignore │ README.md └───node_modules/ (ignorado pelo Git) └───src/ │ index.js


---

## 📌 Exemplo de Uso

Faça uma requisição GET para:
http://localhost:3000/cep/01001000


---

## ✅ **3. Salve o arquivo**

- Salve o `README.md`.
- **Visualização:** No VSCode, você pode visualizar o Markdown clicando com o **botão direito** e escolhendo **"Open Preview"**.

---

## 🔄 **4. Adicione e faça o Commit:**

Abra o terminal no VSCode e rode:
```sh
git add README.md
git commit -m "Adicionando README.md"

