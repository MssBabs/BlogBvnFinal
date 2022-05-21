<template>
    <b-container class="row">
        <div v-for="post in posts.objects" :key="post.slug">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col-auto d-none d-lg-block">
                    <img  v-bind:src="post.metadata.previewimg.url" 
                          alt="Imagen de previsualización del Post"
                          class="bd-placeholder-img" width="200" height="250">
                </div>

                <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">{{post.title}}</h3>
                    <p class="mb-1 text-muted">- {{post.metadata.publicationdate}} -</p><br>
                    <p class="mb-auto">{{post.metadata.description}}</p>
                    <NuxtLink :to="'/post/'+post.slug" class="stretched-link">Mas...»</NuxtLink>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    props: {
        posts:{
            type:Object,
            required:false
        }
    }
}
</script>