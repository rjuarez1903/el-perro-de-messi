<template>
    <div class="container my-5 tips-container text-center">
        <div class="row">
            <Tip 
                colMdAlign="col-md-6 align-self-start"
                faIcon="fa solid fa-dog"
                title="Perros"
                txt="Enseñale a tu perro habilidades caninas. Ayudá a la resolución diaria de problemas y también a fomentar el vínculo con sus humanos."
            />
            <Tip 
                colMdAlign="col-md-6 align-self-center"
                faIcon="fa solid fa-cat"
                title="Gatos"
                txt="Los dispensadores inteligentes son excelentes opciones para estimular la curiosidad de tus mininos."
            />
            <Tip 
                colMdAlign="col-md-12 align-self-end"
                faIcon="fa solid fa-user"
                title="Dueños"
                txt="Tu voz y tacto son recompensas poderosas, usalos positivamente y complementalo con algunas golosinas y snacks."
            />                  
        </div>
    </div>
</template>

<script>
    import Tip from './Tip.vue';

    export default {
        components: {
            Tip
        }
    }
</script>

<style>

    .tips-container {
        transform: skewY(-12deg );
        padding: 5rem 1.25rem;
    }

    .tips-container div div {
        height: max-content;
    }

    /*  *************
        MEDIA QUERIES
        *************
    */

    @media (min-width: 768px) {
        .tips-container {
            transform: skewY(-7deg);
        }
    }

    @media (min-width: 768px) {
        .tips-container div {
            height: 300px;
        }
    }



</style>