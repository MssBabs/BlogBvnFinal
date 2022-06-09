<template>
    <b-container>
        <b-row cols="1" no-gutters class="mb-3" >
            <b-col v-for="post in posts.objects" :key="post.slug" class="p-1">
                <b-card no-body  >
                    <b-row no-gutters >
                        <b-col col cols="12" md="4" lg="3" sm="12" >
                            <b-card-img-lazy :src="post.metadata.previewimg.url" class="w-100"  style="height:16rem;" alt="Image" ></b-card-img-lazy>
                        </b-col>

                        <b-col col cols="12" md="8" lg="9" sm="12">
                            <b-card-body :title="post.title">
                                <b-card-text>
                                    <div class="mb-1 text-muted"> - {{ post.metadata.publicationdate }} -</div>
                                    <p class="mb-auto">{{ post.metadata.description }}</p>
                                    <NuxtLink :to="'/post/' + post.slug" class="stretched-link">Mas...»</NuxtLink>
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        
        <b-row align-h="center">
            <b-col cols="auto">
                <b-pagination
                @input="updatePosts"
                v-model="currentPage"
                :total-rows="posts.total" 
                :per-page="posts.limit"
                class="btn-custom"
                ></b-pagination>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    props: {
        posts:{
            type:Object,
            required:false
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
            this.paginatedFetch(this.currentPage - 1);
        }
    }
}
</script>