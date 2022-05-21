<template>
  <div class="container">
    <Head />
    <NavBar />
    
    <main class="container py-lg-4">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Lenguajes
        </h3>


        <div class="row ">
          <div class="col-lg-3">
            <img  src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Icono Java"
                  class="bd-placeholder-img rounded-circle" width="140" height="140">

            <h2>Java</h2>
            <p>xxxx</p>
            <p><NuxtLink to="/languages/java" class="btn btn-secondary">Ver Posts »</NuxtLink></p>
          </div>

          <div class="col-lg-3">
            <img  src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="Icono JavaScript"
                  class="bd-placeholder-img rounded-circle" width="140" height="140">

            <h2>JavaScript</h2>
            <p>xxxx</p>
            <p><NuxtLink to="/languages/javascript" class="btn btn-secondary">Ver Posts »</NuxtLink></p>
          </div>

          <div class="col-lg-3">
            <img  src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="Icono Vue.Js"
                  class="bd-placeholder-img rounded-circle" width="140" height="140">

            <h2>Vue.js</h2>
            <p>Framework de JavaScript</p>
            <p><NuxtLink to="/languages/vue" class="btn btn-secondary">Ver Posts »</NuxtLink></p>
          </div>

          <div class="col-lg-3">
            <img  src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="Icono Nuxt.Js"
                  class="bd-placeholder-img rounded-circle" width="140" height="140">

            <h2>Nuxt.js</h2>
            <p>Framework de JavaScript</p>
            <p><NuxtLink to="/languages/nuxt" class="btn btn-secondary">Ver Posts »</NuxtLink></p>
          </div>
        </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Head from "../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../components/viewsComponents/layout/Footer.vue"

export default {
  name: 'LanguajesView',
    components: {
      Head, NavBar, Footer
    }
}
</script>