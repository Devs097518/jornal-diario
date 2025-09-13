# ⭐JORNAL-DIARIO
    O Jornal Diário é uma aplicação de notícias que tem como função te deixar 
    informado sobre o Brasil e o mundo, sobre os mais variádos temas, consumindo 
    os dados de um servidor externo. 



## ⚒️ Tecnologias utilizadas
- SvelteKit
- Git
- Express.js
- Node.js
- Vercel
- Render



## 🕹️ Funcionalidades principais
- Recebimento de filtros para a pesquisa de notícias
- Utilização de uma proxy para fazer requisições à API, evitando CORS
- Mensagens do status da requisição
- Responsividade



## 📥 Como rodar localmente 
clonagem :\
    git clone https://github.com/Devs097518/jornal-diario.git
    
instalando dependências :\
    cd jornal-diario\
    cd frontend\
    cd .svelte.kit\
    npm install   

executar :\
    npm run dev 

## 📥 Variáveis de ambiente
Para a proteção dos dados desta aplicação, as variáveis de `VITE_rota` e `APIKEY` foram protegidas no arquivo `.env` , portanto há um arquivo de `.env.exemple` na pasta backend e na pasta frontend com as instruções descritas mais detadalhamente.  
Para o código usar os dados dos arquivos protegidos no `.env` , e necessário rodar as seguintes instruções no terminal para as pastas individualmente :
  npm install dotenv



## 🛰️ Deploy
[visitar](https://jornal-diario.vercel.app/)



##  📜 melhorias futuras 
- haver mais opções de filtro de pesquisa



## 📄 Licença
MIT © Dayvson

