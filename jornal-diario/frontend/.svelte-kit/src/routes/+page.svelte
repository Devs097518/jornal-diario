<script lang="ts">
    import Noticia from "$lib/Noticia.svelte";

    let noticias: Array<any> = [];

    let categoria = 'general';
    let pais = 'br';

    async function puxar() {
        try {
            const valores = await fetch(`http://localhost:3000/dados?categoria=${categoria}&pais=${pais}`);
            const valoresMesmo = await valores.json();

            noticias = valoresMesmo.data.slice(0, 4);
            
            for(let i=0; i<noticias.length ; i++){
                if(noticias[i].image === null){
                    noticias[i].image = '/noticiaIlustracao.jpg';
                }
            }
            

        } catch (error) {
            console.log(error);
        }
    }
</script>

<div id="container">
    <div id="caixa">
        <div id="banner"></div>
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
            <p>repositório</p>
            <p>api</p>
            <p>email</p>
        </div>
    </div>
</div>

<style>
    :global(:root) {
        font-family: monospace;
        background-color: lightgray;
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
        background-color: rgba(207, 187, 170, 1);
        border: 6px double black;
        padding: 1em;
    }

    #banner {
        width: 100%;
        height: 7em;
        background-color: rgb(255, 94, 0);
        background-image: url("https://img.freepik.com/fotos-premium/um-fundo-de-jornal-antigo_705652-166.jpg?semt=ais_hybrid&w=740&q=80");
    }

    #opcoes {
        width: 100%;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: rgb(165, 178, 255);
        font-size: 10px;
        margin: 0;
    }

    #selecao {
        display: flex;
    }

    button {
        border: none;
        font-size: 10px;
    }

    select {
        border-radius: 0 20px 20px 0;
        font-size: 10px;
        margin: -1px;
    }

    label {
        margin-left: 1em;
        padding: 0 0.5em;
        border-radius: 20px 0 0 20px;
        background-color: white;
    }

    #contato {
        width: 100%;
        height: 3em;
        background-color: rgb(165, 178, 255);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
</style>
