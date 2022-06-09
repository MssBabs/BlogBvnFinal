<template>
  <b-container>
    <Head />
    <NavBar />

    <main class="container py-lg-4">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Tendencias
      </h3>
      
      <div class="row-md-9 mb-4">
          <TrendsPreview :posts="posts" :paginatedFetch="paginatedFetch"/>
      </div>
    </main>

    <Footer />
  </b-container>
</template>

<script>
import Head from "../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../components/viewsComponents/layout/Footer.vue"

import TrendsPreview  from "../../components/viewsComponents/TrendsPreview.vue"

import bucket from "../../config/config.js"

export default {
  name: 'TrendsView',
    components: {
      Head, NavBar, Footer,
      TrendsPreview
    },

 data: () => ({
    posts: {}
  }),

  methods:{
    async paginatedFetch(page){
      const query = {
        query: {
          type: 'posts',
          "metadata.category":{$in:["trends"]}
        },
        limit: 6,
        skip: page*6, 
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