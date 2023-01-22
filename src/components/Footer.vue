<template>
    <footer class="p-4">
        <div class="container ">
            <div class="row">
                <nav class="redes col-12 col-md-4">
                    <ul class="navbar-nav flex-row">
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="https://facebook.com/"
                                faIcon="fa-brands fa-meta"
                            />
                        </li>
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="https://twitter.com/"
                                faIcon="fa-brands fa-twitter"
                            />
                        </li>
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="mailto:elperrodemessi@gmail.com"
                                faIcon="fa-solid fa-envelope"
                            />
                        </li>
                        <li class="nav-item">
                            <SocialIcon 
                                urlTarget="tel:+541111111"
                                faIcon="fa-brands fa-whatsapp"
                            />
                        </li>
                    </ul>
                </nav>
                <div class=" col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <small class="text-center">Todos los derechos reservados - El Perro De Messi</small>
                </div>
                <div class=" col-12 col-md-4 text-center d-flex align-items-center justify-content-center">
                    <small>Paraguay 2334 5 F, Buenos Aires</small>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import SocialIcon from './SocialIcon.vue';
    export default {
        components: {
            SocialIcon
        }
    }

</script>