<template>
  <b-container>
    <Head />
    <NavBar />
    
    <main class="py-lg-4">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Lenguajes
        </h3>


        <b-row  cols="2" cols-xl="4" cols-lg="4" cols-md="4" cols-sm="2" no-gutters class="mb-3 text-center">
          <b-col class="p-1">
            <b-card title="Java"
                  img-src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                  img-alt="Icono Java" img-height="140rem" img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                <br>
                <NuxtLink to="/languages/java" class="btn btn-custom">Ver Posts »</NuxtLink>
            </b-card>
          </b-col>

          <b-col class="p-1">
            <b-card title="JavaScript"
                  img-src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                  img-alt="Icono JavaScript" img-height="140rem" img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                <br>
                <NuxtLink to="/languages/javascript" class="btn btn-custom">Ver Posts »</NuxtLink>
            </b-card>
          </b-col>

          <b-col class="p-1">
            <b-card title="Vue.Js"
                  img-src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
                  img-alt="Icono Vue.Js" img-height="140rem" img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                <br>
                <NuxtLink to="/languages/vue" class="btn btn-custom">Ver Posts »</NuxtLink>
            </b-card>
          </b-col>

          <b-col class="p-1">
            <b-card title="Nuxt.Js"
                  img-src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg"
                  img-alt="Icono Nuxt.Js" img-height="140rem" img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                <br>
                <NuxtLink to="/languages/nuxt" class="btn btn-custom">Ver Posts »</NuxtLink>
            </b-card>
          </b-col>
        </b-row>
    </main>

    <Footer />
  </b-container>
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