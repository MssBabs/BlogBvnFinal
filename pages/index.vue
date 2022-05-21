<template>
  <b-container>
    <Head />
    <NavBar />

    <main>
        <BodyCategory />
        
        <PostPreview :posts="posts"/>
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

import Config from "../config/config.js"

export default {
  name: 'Index',
  components: {
    Head, NavBar, Footer,
    PostPreview, BodyCategory
  },
 data: () => ({
    posts: {}
  }),
  
  async fetch(){
    fetch( Config.url + Config.query_base + Config.read_key + Config.page_size +
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
 