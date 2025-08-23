<script lang="ts">
    import Noticia from "$lib/Noticia.svelte";
    import { nonpassive } from "svelte/legacy";

    let noticias: Array<any> = [];

    let categoria = "general";
    let pais = "br";

    let mostrarErro : string = 'none' ;
    let mostrarIcentivo : string = 'block' ;


    async function puxar() {
        try {
            const valores = await fetch(
                `${import.meta.env.VITE_rota}?categoria=${categoria}&pais=${pais}`,
            );
            const valoresMesmo = await valores.json();

            noticias = valoresMesmo.data.slice(0, 4);

            for (let i = 0; i < noticias.length; i++) {
                if (noticias[i].image === null) {
                    noticias[i].image = "/noticiaIlustracao.jpg";
                }
            }
            mostrarErro = 'none' ; 
            mostrarIcentivo = 'none' ;

        } catch (error) {
            console.log(error);
            mostrarErro = 'block'
            mostrarIcentivo = 'none' ;
        }
    }
</script>

<div id="container">
    <div id="caixa">
        <div id="banner">
            <h1>JORNAL DIÁRIO</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                aliquam fugiat corporis animi corrupti quidem aspernatur
                excepturi tenetur eius? Ipsa omnis tenetur sunt voluptates ipsam
                consequuntur earum officiis ex laudantium!
            </p>
        </div>
        <div id="opcoes">
            <div id="selecao">
                <label for="">país</label>
                <select name="País" id="" bind:value={pais}>
                    <option value="br">Brasil</option>
                    <option value="ar">Argentina</option>
                    <option value="cn">China</option>
                    <option value="us">Estados Unidos</option>
                    <option value="cn">Canadá</option>
                    <option value="pt">Portugal</option>
                    <option value="za">África so Sul</option>
                    <option value="mx">Máxico</option>
                    <option value="gb">Reino Unido</option>
                </select>

                <label for="">categoria</label>
                <select name="" id="categoria" bind:value={categoria}>
                    <option value="general">Geral</option>
                    <option value="business">Negócios</option>
                    <option value="entertainment">Entretenimento</option>
                    <option value="health">Saúde</option>
                    <option value="science">Ciência</option>
                    <option value="sports">Esportes</option>
                    <option value="technology">Tecnologia</option>
                </select>
            </div>
            <div id="busca">
                <button on:click={puxar}> atualizar </button>
            </div>
        </div>
        <div id="insentivoAPesquisar" style="display:{mostrarIcentivo}">
            <p style="padding: 5em;">escolha o seu filtro e clique no botão de pesquisa para encontrar notícias!</p>
        </div>

        <div id="telaDeErro" style="display:{mostrarErro};">
            <p style="padding: 5em;">o servidor não respondeu , tente alterar as suas opções de pesquisa e clique em atualizar novamente.</p>
        </div>

        {#each noticias as noticia}
            <Noticia
                titulo={noticia.title}
                imagem={noticia.image}
                conteudo={noticia.description}
                autor={noticia.author}
                fonte={noticia.url}
                data={noticia.published_at}
            />
        {/each}

        <!-- componentes --> 

        <div id="contato">
            
            <a href="mailto:dayvsonnlacerda360@gmail.com?subject=Ol%C3%A1+Dayvson!" target="_blank">
                <img src="email-icon.png" alt="" class="contato-imagens">
            </a>

            <a href="https://mediastack.com/" target="_blank">
                <img src="mediastack-icone.png" alt="" class="contato-imagens">
            </a>

            <a href="https://github.com/Devs097518/jornal-diario" target="_blank">
                <img src="github-icone.png" alt="" class="contato-imagens">
            </a>
        </div>
    </div>
</div>

<style>
    :global(:root) {
        background-image: radial-gradient(#ccc 1px, transparent 1px);
        background-size: 10px 10px;
        font-family: "Inconsolata", monospace;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    #container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #caixa {
        width: 50em;
        min-height: 30em;
        display: flex;
        flex-direction: column;
        background-color: antiquewhite;
        box-shadow: 1px 1px 50px 10px rgb(177, 177, 177);
        padding: 1em;
    }

    #banner {
        min-height: 7em;
        padding: 0 5em;
        text-align: center;
        background-color: rgb(255, 255, 255);
        /* background-image: url("https://img.freepik.com/fotos-premium/um-fundo-de-jornal-antigo_705652-166.jpg?semt=ais_hybrid&w=740&q=80"); */
        color: rgb(0, 0, 0);
        text-shadow: 1px 1px 3px rgb(255, 255, 255);
    }

    #insentivoAPesquisar{
        width: 100%;
        height: 15em;
        background-color: white;
        text-align: center;
        align-items: center;
    }

    #telaDeErro{
        width: 100%;
        height: 15em;
        background-color: rgb(255, 255, 255);
        color: red;
        text-align: center;
        align-items: center;
    }

    h1 {
        font-family: "Forum", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 4em;
    }

    #opcoes {
        width: 100%;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: rgb(60, 70, 122);
        font-size: 10px;
        margin: 0;
    }

    #selecao {
        display: flex;
    }

    button {
        border: none;
        font-size: 20px;
        padding: 0 1em;
    }

    select {
        font-size: 20px;
        margin: -1px;
        text-align: end;
    }

    label {
        margin-left: 1em;
        padding: 0 0.5em;
        font-size: 20px;
        background-color: rgb(194, 203, 255);
    }

    #contato {
        width: 100%;
        height: 2em;
        background-color: rgb(255, 255, 255);
        /* box-shadow: inset 0.5px 1px 1px 2px rgb(60, 70, 122); */
        /* border: rgb(60, 70, 122) solid 1px; */
        border-top: rgb(235, 235, 235) 1px solid;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .contato-imagens{
        width: 20px;
        height: auto;
    }

</style>
