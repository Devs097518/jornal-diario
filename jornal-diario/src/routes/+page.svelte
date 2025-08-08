<script>
    import Noticia from '$lib/Noticia.svelte'
</script>

<div id="container">
    <div id="caixa">
        <div id="banner">

        </div>
        <div id="opcoes" >
            <div id="selecao">
                <label for="">país</label>
                <select name="País" id="">
                    <option value="">opção 1</option>
                    <option value="">opção 2</option>
                    <option value="">opção 3</option>
                </select>


                <label for="">categoria</label>
                <select name="" id="">
                    <option value="">opção 1</option>
                    <option value="">opção 2</option>
                    <option value="">opção 3</option>
                </select>


                <label for="">fonte</label>
                <select name="" id="">
                    <option value="">opção 1</option>
                    <option value="">opção 2</option>
                    <option value="">opção 3</option>
                </select>

                <label for="">idioma</label>
                <select name="" id="">
                    <option value="">opção 1</option>
                    <option value="">opção 2</option>
                    <option value="">opção 3</option>
                </select>
            </div>
            <div id="busca">
                <button>
                    atualizar
                </button>
            </div>
        </div>
        <div style="background-color: white">
            <Noticia />
            <Noticia />
        </div>
    
        <!-- componentes -->

        <div id="contato">
            <p>repositório</p>
            <p>api</p>
            <p>email</p>
        </div>
    </div>
</div>


<style>
    :global(:root){
        font-family: monospace;
        background-color: lightgray ;
    }

    #container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #caixa{
        width: 50em;
        min-height: 30em;
        display: flex;
        flex-direction: column;
        background-color: rgba(207, 187, 170, 1);
        border: 6px double black;
        padding: 1em;
    }

    #banner{
        width: 100%;
        height: 7em;
        background-color: rgb(255, 94, 0);
        background-image:  url('https://img.freepik.com/fotos-premium/um-fundo-de-jornal-antigo_705652-166.jpg?semt=ais_hybrid&w=740&q=80');
    }

    #opcoes{
        width: 100%;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: rgb(165, 178, 255);
        font-size:10px;
        margin:0;
    }

    #selecao{
        display: flex;
    }

    button{
        border: none ;
        font-size:10px;
    }

    select{
        border-radius: 0 20px 20px 0;
        font-size:10px;
        margin:-1px;
    }

    label{
        margin-left: 1em;
        padding : 0 0.5em ; 
        border-radius: 20px 0 0 20px;
        background-color: white;
    }

    #contato{
        width: 100%;
        height: 3em;
        background-color:rgb(165, 178, 255);
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

</style>