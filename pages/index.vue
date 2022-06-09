<template>
  <b-container>
    <Head />
    <NavBar />

    <main>
        <BodyCategory :postsCarrousel="postsCarrousel" />
        <PostPreview :posts="posts" :paginatedFetch="paginatedFetch"/>
    </main>

    <Footer />
  </b-container>
</template>

<script>
import Head   from "../components/viewsComponents/layout/Head.vue"
import NavBar from "../components/viewsComponents/layout/NavBar.vue"
import Footer from "../components/viewsComponents/layout/Footer.vue"

import PostPreview  from "../components/viewsComponents/PostPreview.vue"
import BodyCategory from "../components/viewsComponents/BodyCategory.vue"

import bucket from "../config/config.js"

export default {
  name: 'Index',
  components: {
    Head, NavBar, Footer,
    PostPreview, BodyCategory
  },

 data: () => ({
    posts: {},
    postsCarrousel: []
  }),

  methods:{
    async paginatedFetch(page){
      const query = {
        query: {
          type: 'posts'
        },
        limit: 6,
        skip: page*6,
        sort: "-created_at",
        props: 'slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate'
      }
      this.posts=await bucket.getObjects(query).then(response => response)

      //Carrusel:
      if(page == 0){
        this.postsCarrousel= [this.posts.objects[0],this.posts.objects[1],this.posts.objects[2]]
      }
      //console.log(this.postsCarrousel)
    }
  },
  
  async fetch(){
    this.paginatedFetch(0)

  },
  fetchOnServer: false
}
</script>
 