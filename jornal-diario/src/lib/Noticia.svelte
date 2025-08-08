<script lang='ts'>
    export const noticia: string = ''
</script>

<div class="noticia">
    <div id="imagem">
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet soluta repudiandae nesciunt laborum lorem15 orem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quia tempora ipsa neque iure</p>
    </div>
    <div id="informacoes">
        <div id="conteudo">
            lorem15 orem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quia tempora ipsa neque iure, fugit, facere debitis laboriosam sunt ex itaque omnis doloribus consectetur rerum necessitatibus quam odio fuga.
            orem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quia tempora ipsa neque iure, fugit, facere debitis laboriosam sunt ex itaque omnis doloribus consectetur rerum necessitatibus quam odio fuga.
            orem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci illo quia tempora ipsa neque iure, fugit, facere debitis laboriosam sunt ex itaque omnis doloribus consectetur rerum necessitatibus quam odio fuga.
        </div>
        <div id="fonte">
            Autor : Roberto <br>
            fonte : www.fonte.com <br>
            data : 08/08/2025

        </div>
    </div>
</div>

<style>
    .noticia{
        background-color: rgba(231, 218, 206, 1);
        display: flex;
        flex-direction: column;
        margin: 30px;
        border: 3px solid rgba(0, 0, 0, 0.452);
        text-align: center;
        
    }

    h1{
        margin-top: 4em;
        font-size: 3em;
    }

    p{
        margin: 0 10px 10px 10px;
    }

    #imagem{
        width: 100%;
        min-height: 5em;
        background-image: url('https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/clouds-1117584_1280-e1719345187239.jpg?w=419&h=283&crop=0');
        background-size: cover;
        text-align : center;
        text-shadow: 1px 1px 1px rgb(0, 0, 0);
        border-right: 1px solid black;
        color: white;
    }

    #informacoes{
        width: 100%;
        display: flex;
    }

    #conteudo{
        width:70%;
        padding:1em;
        text-align:start;
    }

    #fonte{
        width: 30%;
        padding:1em;
        text-align:start;
    }
</style>