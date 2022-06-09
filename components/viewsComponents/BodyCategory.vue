<template>
      <b-carousel 
        class="mb-5 mt-5"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="200"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide v-for="post in postsCarrousel"
          
          :key="post.slug"
          :caption="post.title"
          :img-src="post.metadata.previewimg.url"
          img-alt="Blank image"
          img-width="200"
        >
          <p>{{ post.metadata.description }}</p>
          <p><NuxtLink :to="'/post/' + post.slug" class="stretched-link">Mas...»</NuxtLink></p>
        </b-carousel-slide>
      </b-carousel>
</template>

<script>
export default {
  props: {
    postsCarrousel: {
      type: Array,
    },
  },
};
</script>

<style>
.carousel-item img {
  height: 50vh !important ;
}
</style>