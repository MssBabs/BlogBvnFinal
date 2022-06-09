<template>
  <b-container class="nav-scroller py-1 mb-2">
    <b-navbar toggleable="lg">
      <!--b-navbar-brand href="#">NavBar</b-navbar-brand -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-center"  is-nav>
        <b-navbar-nav >
          <b-nav-item >
              <NuxtLink to="/" class="p-2 link-secondary">
                Home
            </NuxtLink>
          </b-nav-item>

          <b-nav-item>
            <NuxtLink to="/languages" class="p-2 link-secondary">
              Lenguajes
            </NuxtLink>
          </b-nav-item>

          <b-nav-item>
            <NuxtLink to="/projects" class="p-2 link-secondary">
              Proyectos
            </NuxtLink>
          </b-nav-item>

          <b-nav-item>
            <NuxtLink to="/trends" class="p-2 link-secondary">
              Tendencias
            </NuxtLink>
          </b-nav-item>

          <b-nav-item>
            <NuxtLink to="/about-me" class="p-2 link-secondary">
              Sobre mi
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {};
</script>