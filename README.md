
# ToDo List

Este é um projeto web para gerenciamento de tarefas, desenvolvido como parte de um processo seletivo. A aplicação é composta por um **frontend** em ReactJS e um **backend** em Node.js, com persistência de dados no MySQL, utilizando Sequelize como ORM. O projeto também está estilizado com TailwindCSS e o banco de dados está hospedado no Railway.

## Descrição

A **ToDo List** permite que usuários se registrem, façam login, criem tarefas, editem, excluam e visualizem tarefas de outros membros. Cada membro pode marcar suas tarefas como finalizadas ou pendentes. O sistema inclui autenticação de membros e controle de acesso baseado nas permissões de cada usuário.

## Tecnologias Utilizadas

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção da API RESTful.
- **Sequelize**: ORM para modelar e interagir com o banco de dados MySQL.
- **MySQL**: Banco de dados relacional utilizado para persistência dos dados.
- **Railway**: Plataforma usada para hospedar o banco de dados na nuvem.

### Frontend
- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TailwindCSS**: Framework CSS para estilização.
- **React Router**: Gerenciamento de rotas no frontend.

## Funcionalidades

### Features Obrigatórias

1. **Cadastro de Tarefa**: O usuário pode criar tarefas com os seguintes campos:
   - Nome (mínimo de 5 e máximo de 50 caracteres).
   - Descrição (máximo de 140 caracteres).
   - Prioridade (Baixa, Média ou Alta).
   - Marcar como finalizada ou pendente.

2. **Edição de Tarefa**: Os usuários podem editar qualquer atributo da tarefa, exceto a data de término, que é registrada automaticamente ao concluir a tarefa.

3. **Listagem de Tarefas**: O sistema exibe todas as tarefas cadastradas, permitindo que o usuário visualize as suas próprias e as dos outros membros. Os campos exibidos são:
   - Nome
   - Prioridade
   - Status (Finalizada ou Não)
   - Descrição ao clicar na tarefa

4. **Cadastro de Membro**: Os membros podem se registrar, e cada membro pode criar, editar e excluir suas próprias tarefas.

5. **Tela Home**: A home apresenta um menu para navegação para as telas de listagem de tarefas e cadastro de novos membros.

### Features Não Obrigatórias

1. **Autenticação**: Somente membros autenticados podem acessar o sistema.
2. **Excluir Membro**: Se um membro excluir sua conta, todas as suas tarefas são automaticamente removidas.
3. **Autorização**: Apenas o membro dono da tarefa pode editá-la ou excluí-la.

## Como Rodar o Projeto

### Pré-requisitos
- **Node.js** e **npm** instalados.
- Banco de dados MySQL configurado e rodando (ou acesso ao Railway).

### Passos para Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/todo-list.git
   cd todo-list
   ```

2. Instale as dependências do backend:
   ```bash
   cd backend
   npm install
   ```

3. Configure o banco de dados:
   - Crie um arquivo `.env` no diretório `backend` e adicione as seguintes variáveis:
     ```env
     DB_NAME=
     DB_HOST=
     DB_PWD=
     DB_PORT=
     DB_USER=
     DB_DIALECT=
     PORT=
     NODE_ENV=
     JWT_SECRET_KEY=
     JWT_REFRESH_EXPIRATION=
     ```

4. Execute as migrações para configurar o banco de dados:
   ```bash
   npx sequelize db:migrate
   ```

5. Inicie o servidor backend:
   ```bash
   npm start
   ```

6. Instale as dependências do frontend:
   ```bash
   cd ../frontend
   npm install
   ```

7. Inicie o frontend:
   ```bash
   npm start
   ```

8. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```

## Deploy

O banco de dados foi hospedado no Railway e a aplicação pode ser facilmente adaptada para outros serviços de hospedagem em nuvem como Heroku, Vercel ou Netlify.

## Documentação do Backend
- https://documenter.getpostman.com/view/29686411/2sAXqp8PPM

## Vídeo de Funcionamento da aplicação
- https://github.com/user-attachments/assets/37830bff-9427-4855-a238-d4526634fc87





