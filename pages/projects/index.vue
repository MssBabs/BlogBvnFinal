<template>
  <b-container>
    <Head />
    <NavBar />

    <main class="py-lg-4">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Proyectos
      </h3>

      <div class="row mb-2">
        <ProjectsPreview :posts="posts" :paginatedFetch="paginatedFetch"/>
            
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

import bucket from "../../config/config.js"

export default {
  name: 'ProjectsView',
    components: {
      Head, NavBar, Footer,
      ProjectsPreview
    },

 data: () => ({
    posts: {}
  }),

  methods:{
    async paginatedFetch(page){
      const query = {
        query: {
          type: 'posts', "metadata.category":{$in:["projects"]}
        },
        limit: 12,
        skip: page*12, 
        sort: "-created_at",
        props: 'slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate'
      }
    this.posts=await bucket.getObjects(query).then(response => response)
    },
  },

  async fetch(){
    this.paginatedFetch(0)

  },
  fetchOnServer: false
}
</script>