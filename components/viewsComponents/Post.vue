<template>
  <b-container class="rounded container-post m-5">
    <b-row>
      <b-col>
        <h3 class="display-3 p-4 p-md-5 mb-4 fst-italic border-bottom">
          {{ post.title }}
        </h3>
        <div>
          <p class="lead my-3 text-white">
            {{ post.metadata.publicationdate }}
          </p>
        </div>
      </b-col>
    </b-row>
    <!--img  center  v-bind:src="post.metadata.previewimg.url" 
                  alt="Imagen de previsualización del Post"
                  class="bd-placeholder-img" width="600" height="650"/ -->
    <b-row>
      <b-col class="p-5">
        <div id="post" v-html="$md.render(post.metadata.content)"></div>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
export default {
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      infoPost: {},
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 75,
        height: 75,
        class: "m1",
      },
    };
  },
};
</script>