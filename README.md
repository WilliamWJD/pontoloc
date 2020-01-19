<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#computer-desenvolvimento">Desenvolvimento</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#-como-contribuir">Como contribuir</a>
</p>

# PontoLoc

Este software será utilizado para gerenciar os alugueis feitos pela empresa PontoLoc.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [React Native](https://facebook.github.io/react-native/)


## :computer: Desenvolvimento

### Backend

- Faça um clone desse repositório.
- Entre na pasta `cd server`
- Rode `yarn` para instalar as dependências.
- Altere as credencias dentro de `/src/config/database.js`
- Rode `yarn sequelize db:create` para criar o banco de dados.
- Rode `yarn sequelize db:migrate` para executar as migrations.
- Rode `yarn dev` para iniciar o servidor.
- Importe o arquivo `Insomnia.json` desse repositório no Insomnia.

## 🤔 Como contribuir

- Faça um fork desse repositório.
- Cria uma branch com a sua feature: `git checkout -b minha-feature`
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`
- Faça push para a sua branch: `git push origin minha-feature`
