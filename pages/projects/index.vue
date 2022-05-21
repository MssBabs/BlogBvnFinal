<template>
  <b-container>
    <Head />
    <NavBar />

    <main class="py-lg-4">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Proyectos
      </h3>

      <div class="row mb-2">
        <ProjectsPreview :posts="posts"/>
            
      </div>
    </main>

    <Footer />
  </b-container>
</template>

<script>
import Head from "../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../components/viewsComponents/layout/Footer.vue"

import ProjectsPreview  from "../../components/viewsComponents/ProjectsPreview.vue"

import Config from "../../config/config.js"

export default {
  name: 'ProjectsView',
    components: {
      Head, NavBar, Footer,
      ProjectsPreview
    },

 data: () => ({
    posts: {}
  }),
  
  async fetch(){
    fetch( Config.url + Config.query_base + Config.read_key + 
          '&props=slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate')
          .then(response => response.json())
          .then(data => {
          //console.log(blogs);
          this.posts= data
      });
  },
  fetchOnServer: false
}
</script>