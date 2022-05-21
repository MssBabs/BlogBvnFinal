<template>
    <b-container class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
            <NuxtLink to="/" class="p-2 link-secondary">
            Home
            </NuxtLink>

            <NuxtLink to="/languages" class="p-2 link-secondary">
                Lenguajes
            </NuxtLink>

            <NuxtLink to="/projects" class="p-2 link-secondary">
                Proyectos
            </NuxtLink>

            <NuxtLink to="/trends" class="p-2 link-secondary">
                Tendencias
            </NuxtLink>

            <NuxtLink to="/about-me" class="p-2 link-secondary">
                Sobre mi
            </NuxtLink>
        </nav>
    </b-container>
</template>

<script>
export default {

}
</script>