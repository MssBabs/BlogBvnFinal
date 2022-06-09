<template>
  <b-container >
    <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="2" cols-xl="2" no-gutters class="mb-3" >
      <b-col v-for="post in posts.objects" :key="post.slug" class="p-1">
        <b-card no-body  >
          <b-row  cols="2" align-h="end">
            <b-col>
              <b-card-body :title="post.title">
                <b-card-text>
                  <div class="mb-1 text-muted">
                    - {{ post.metadata.publicationdate }} -
                  </div>
                  <p class="mb-auto">{{ post.metadata.description }}</p>
                  <NuxtLink :to="'/post/' + post.slug" class="stretched-link"
                    >Mas...»</NuxtLink
                  >
                  </b-card-text>
              </b-card-body>
            </b-col>

            <b-col  >
              <b-card-img-lazy :src="post.metadata.previewimg.url" class="w-100" 
               alt="Imagen post" style="height:20rem"></b-card-img-lazy>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-row  align-h="center">
      <b-col cols="auto">
        <!-- 
          @input -> evento que lanza la actualizacion de los post 
          v-model -> variable definida en data con el numero de pagina
          :total-rows -> cantidad total de post  (nos lo devuelve cosmicjs)
          :per-page -> cantidad de post que se muestran (definidos en la aplicacion -> 6) 
        -->
        <b-pagination
          @input="updatePosts"
          v-model="currentPage"
          :total-rows="posts.total" 
          :per-page="posts.limit"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: false,
    },
    paginatedFetch: {
      type: Function,
    },
  },

  data: () => ({
    currentPage: 1,
  }),
  
  methods: {
    updatePosts() {
      /* 
          le restamos 1 ya que al empezar en 1 la paginacion 
          si no restaramos, la primera pagina en realidad seria la segunda pagina
          ya que saltaria 6 post (6x1=6)
          */
      this.paginatedFetch(this.currentPage - 1);
    },
  },
};
</script>
