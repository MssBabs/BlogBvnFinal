<template>
  <div class="container">
    <!--{{this.$route.params.slug}}-->

    <Head />
    <NavBar />

    <main class="container">
      <div v-if="$fetchState.pending">Fetching mountains...</div>
      <div v-else><Post :post="post.objects[0]"/></div>
        
    </main>

    <Footer />
  </div>
</template>

<script>
import Head   from "../../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../../components/viewsComponents/layout/Footer.vue"

import Post  from "../../../components/viewsComponents/Post.vue"

import Config from "../../../config/config.js"

export default {
  name: 'Index',
  components: {
    Head, NavBar, Footer,
    Post
  },
 data: () => ({
    post: {}
  }),
  
  async fetch(){
   this.post= await fetch( Config.url + "&query=%7B%22type%22%3A%22posts%22%2C+%22slug%22%3A%22"+this.$route.params.slug+"%22%7D" + Config.read_key +
          '&props=slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate,metadata.content')
          .then(response => response.json());
  },
  fetchOnServer: false
}
</script>