<template>
    <container class="row">
        <div v-for="post in posts.objects" :key="post.slug" class="col-lg-4 col-md-12 mb-4">
            <div class="card">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img v-bind:src="post.metadata.previewimg.url" alt="Imagen de previsualización del Post" class="img-fluid"  height="250">
                </div>

                <div class="card-body">
                    <h5 class="card-title  text-center">{{post.title}}</h5>
                    <p class="card-text text-muted">- {{post.metadata.publicationdate}} -</p>
                    <p class="card-text">{{post.metadata.description}}</p>
                    <NuxtLink :to="'/post/'+post.slug" class="stretched-link">Mas...»</NuxtLink>
                </div>
            </div>
        </div>
    </container>
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