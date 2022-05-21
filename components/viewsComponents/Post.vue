<template>
  <div class="container text-white rounded bg-dark">
        <div class="container">
            <div>
                <h3 class="display-3 p-4 p-md-5 mb-4 fst-italic border-bottom">{{post.title}}</h3>

                <div>
                    <p class="lead my-3 text-muted">{{post.metadata.publicationdate}}</p>
                </div>

                <p class="p-4 p-md-5 mb-4">- {{post.metadata.description}} -</p>
            </div>
            
            <img  center  v-bind:src="post.metadata.previewimg.url" 
                  alt="Imagen de previsualización del Post"
                  class="bd-placeholder-img" width="600" height="650">

            <p class="p-4 p-md-5 mb-4">{{post.metadata.content}}</p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        post:{
            type:Object,
            required:false
        }
    },
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    }
}
</script>