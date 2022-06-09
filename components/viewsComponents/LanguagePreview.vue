<template>
    <b-container >
        <b-row cols-xl="4" cols-lg="3" cols-md="3" cols-sm="2" cols="1" no-gutters class="m-3" >
            <b-col v-for="post in posts.objects" :key="post.slug" class="p-1">
                <b-card :title="post.title"
                    :sub-title="post.metadata.publicationdate"
                    :img-src="post.metadata.previewimg.url"
                    img-alt="Image" img-height="350rem" img-top
                    tag="article"
                    style="max-width: 25rem; height:100vh;"
                    class="mb-2"
                >
                    <b-card-text>
                    {{post.metadata.description}}
                    </b-card-text>

                    <NuxtLink :to="'/post/'+post.slug" class="stretched-link">Mas...»</NuxtLink>
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
                align-h="center"
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