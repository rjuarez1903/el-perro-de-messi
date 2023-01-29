<template>
   <div class="container py-5">
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <h2 class="mb-4 fw-bold" >Experiencias de nuestros clientes</h2>
                <p>"Quiero felicitar al personal de El Perro de Messi! Muy buena atención especializada en productos para mascotas. Asesoría de primera, actitud colaborativa, buena onda y cariño hacia nuestras mascotas"</p>
            </div>
            <div class="col-md-6 col-lg-3">
                <img src="../assets/dog.jpg" alt="Perro">
            </div>
            <div class="col-md-6 col-lg-3 d-flex flex-column">
                <p class="fw-bold mb-0">Firulais</p>
                <a href="https://www.instagram.com/" target="_blank" class="mt-0 instagram-link">https://www.instagram.com/</a>
                <nav class="d-flex gap-3 mt-auto">
                    <ul class="navbar-nav flex-row gap-2">
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="https://www.twitter.com/"
                                faIcon="fa-brands fa-twitter"
                            />
                        </li>
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="mailto:perrito@gmail.com"
                                faIcon="fa-solid fa-envelope"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    import SocialIcon from './SocialIcon.vue';

    export default {
        components: {
            SocialIcon,
        }
    }
</script>

<style scoped>

    a {
        color: var(--claro) !important;
    }

    .instagram-link {
        text-decoration: none;
    }

    .instagram-link:hover {
        color: var(--colorBoton) !important;
    }
    

    img {
        width: 100%;
        object-fit: cover;
        height: 15rem;
        border-radius: 1rem;
        /* transition: .3s ease all; */
    }
</style>