<template>
    <div class="row">
        <div v-for="post in posts.objects" :key="post.slug" class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">{{post.title}}</h3>
                    <div class="mb-1 text-muted">- {{post.metadata.publicationdate}} -</div>
                    <p class="mb-auto">{{post.metadata.description}}</p>
                    <NuxtLink :to="'/post/'+post.slug" class="stretched-link">Mas...»</NuxtLink>
                </div>

                <div class="col-auto d-none d-lg-block">
                    <img  v-bind:src="post.metadata.previewimg.url" 
                          alt="Imagen de previsualización del Post"
                          class="bd-placeholder-img" width="200" height="250">
                </div>
            </div>
        </div>
    </div>
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
