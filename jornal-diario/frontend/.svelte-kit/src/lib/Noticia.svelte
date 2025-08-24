<script lang="ts">
    // import { cenarioNoticia } from '$lib/stores/stores.js'

    export const noticia: string = "";

    export let titulo: string = "";
    export let imagem: string = "/noticiaIlustracao.jpg";
    export let conteudo: string = "";
    export let autor: string = "";
    export let fonte: string = "";
    export let data: string = "";
</script>

<div class="noticia">
    <div id="imagem" style="background-image: url({imagem});">
        <h1>{titulo}</h1>
    </div>
    <div id="informacoes">
        <div id="conteudo">
            {conteudo}
        </div>
        <div id="fonte">
            Autor : {autor} <br />
            fonte : <a href={fonte} target="_blank">link</a> <br />
            data : {data}
        </div>
    </div>
</div>

<style>
    .noticia {
        background-color: rgba(231, 218, 206, 1);
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 100%;
        border-bottom: rgb(187, 187, 187) solid 1px;
    }

    h1 {
        margin-top: 4em;
        font-size: 3em;
    }

    #imagem {
        width: 100%;
        min-height: 5em;
        background-size: cover;
        text-align: center;
        text-shadow: 1px 1px 1px rgb(0, 0, 0);
        color: white;
    }

    #informacoes {
        width: 100%;
        min-height: 15em;
        display: flex;
    }

    #conteudo {
        width: 70%;
        padding: 1em;
        text-align: start;
    }

    #fonte {
        width: 30%;
        padding: 1em;
        text-align: start;
    }
</style>
