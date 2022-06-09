<template>
  <b-container>
    <!--{{this.$route.params.slug}}-->

    <Head />
    <NavBar />

    <b-container>
      <div v-if="$fetchState.pending">
          <div class="d-flex justify-content-center mb-3">
            <b-spinner label="Spinning" style="width: 3rem; height: 3rem;" type="grow" ></b-spinner>
          </div>
      </div>
       <div v-else-if="$fetchState.error">
          <div class="d-flex justify-content-center mb-3">
            <h1>No he encontrado el post :C</h1>
          </div>
      </div>
      <div v-else>
        <b-row>
          <b-col>
            <b-row>
              <b-col class="container-post rounded ">
                <Post :post="post.objects[0]"/>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="p-5"><Disqus/></b-col>
        </b-row>
      </div>
    </b-container>

    <Footer />
  </b-container>
</template>

<script>
import Head   from "../../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../../components/viewsComponents/layout/Footer.vue"

import Post  from "../../../components/viewsComponents/Post.vue"
import Disqus  from "../../../components/disqusComponents/Disqus.vue"


import bucket from "../../../config/config.js"

export default {
  name: 'Index',
  components: {
    Head, NavBar, Footer,
    Post, Disqus
  },

 data: () => ({
    post: {}
  }),
  
  async fetch(){
    const query = {
      query: {
        type: 'posts',
        slug: this.$route.params.slug
      },
      limit: 1,
      props: 'slug,title,content,metadata.previewimg.url,metadata.description,metadata.category,metadata.publicationdate,metadata.content'
    }

   this.post=await bucket.getObjects(query).then(response => response)
  },
  fetchOnServer: false
}
</script>