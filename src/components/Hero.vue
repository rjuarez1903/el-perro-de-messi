<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-7 d-flex flex-column mb-5">
                <h1><img class="img-titulo w-100" src="../assets/elperrodemessi.png" alt="elperrodemessi-titulo"></h1>
                <h2 class="descripcion mt-5">Hace más de 30 años nos dedicamos al cuidado de las mascotas. Las mascotas son nuestra pasión. Trabajamos todos los días para mejorar su calidad de vida, como así también la relación con sus tutores mediante el traspaso de información útil y la recomendación de productos adecuados.</h2>
                <nav>
                    <ul class="navbar-nav">
                        <HeroButton 
                            routeTo="juguetes" 
                            whereTo="Premiá a tu mascota!" 
                            class="my-3" 
                        />
                        <HeroButton 
                            routeTo="farmacia" 
                            whereTo="Cuidá su salud!"
                        />
                    </ul>
                </nav>
            </div>
            <div class="col-md-6 col-lg-5 img-beagle">
                <img src="../assets/beagle.png" alt="Beagle cartoon">
            </div>
        </div>
    </div>
</template>

<script>
    import HeroButton from '@/components/HeroButton.vue';

    export default {
        components: {
            HeroButton
        }
    }
</script>

<style>
    .hero {
        background-color: var(--colorPrimario);
    }

    h1, 
    h3 {
        font-family: 'Holtwood One SC', serif;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .img-beagle img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .descripcion {
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 1.5;
        color: #fff;
    }

    .descripcion a {
        color: var(--claro);
        /* transition: .3s ease all; */
    }
</style>