<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
       <div class="container">    
           <router-link 
               to="/"
               class="navbar-brand" 
           >
               <img src="../assets/logo-texto.png" alt="El Perro de Messi logo" height="48">
           </router-link>  
           <button class="navbar-toggler" 
                   type="button" 
                   data-bs-toggle="collapse" 
                   data-bs-target="#navbarSupportedContent" 
                   aria-controls="navbarSupportedContent" aria-expanded="false" 
                   aria-label="Toggle navigation"
           >
                <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse " id="navbarSupportedContent">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <NavItem 
                        routeTo="/" 
                        whereTo="Home"
                    />
                    <NavItem 
                        routeTo="farmacia" 
                        whereTo="Farmacia"
                    />
                    <NavItem 
                        routeTo="juguetes" 
                        whereTo="Juguetes"
                    />
                    <NavItem 
                        routeTo="contacto" 
                        whereTo="Contacto"
                    />
               </ul>
           </div>
        </div>
    </nav>
</template>
   
<script>
   import { RouterLink } from 'vue-router';
   import NavItem from './NavItem.vue';
   
    export default {
        components: {
            NavItem,
            RouterLink
        }
    }
</script>