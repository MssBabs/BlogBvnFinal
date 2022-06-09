<template>
  <b-container>
    <Head />
    <NavBar />

    <b-container class="py-lg-4">
      <!-- BREBE DESCRIPCION -->
      <div class="lg-4">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
            Sobre Mi
        </h3>
        
        <b-row align-h="center">
          <b-col cols="auto" cols-md="4" cols-sm=12 data-aos="fade-right">
            <b-img  rounded="circle" src="/yo.jpg" alt="Imagen Autor, Bárbara Vela Nora" width="225"/>
          </b-col>

          <b-col cols-md="8" cols-sm=12  class="pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Developer  &amp;  Graphic Designer</h3>
            <p>Desarrolladora de aplicaciones web con habilidades de diseño, interesada en participar en proyectos que me permitan aprender y mejorar mis aptitudes tecnicas.</p>

            <b-row>
              <b-col>
                <ul>
                  <li><strong>Cumpleaños: </strong> 18 Abril 1994          </li>
                  <li><strong>Localidad:  </strong> Madrid, España         </li>
                  <li><strong>Telefono:   </strong> +34 620 095 203        </li>
                  <li><strong>Email:      </strong> barbara.vela@gmail.com </li>
                </ul>
              </b-col>
              <b-col>
                <ul>
                  <li><strong>Edad:     </strong> 27                     </li>
                  <li><strong>Web:      </strong> www.barbaravelanora.es </li>
                  <li><strong>LinkedIn: </strong> Bárbara Vela Nora      </li>
                  <li><strong>Github:   </strong> MssBabs                </li>
                </ul>
              </b-col>
            </b-row>

            <p>Me gusta dibujar, modelar y esculpir; Escuchar música; Viajar y hacer rutas de senderimo; Pasar el rato con amigos.
              
            </p>
          </b-col>
        </b-row>
      </div>
      <br>
      <br>
      <!-- TRAYECTORIA -->
      <div class="py-lg-4">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          Resumen De Mi Trayectoria
        </h3>

        <b-row cols=1 cols-sm=1 cols-md=2 cols-lg=2 cols-xl=2>
          <!-- ESTUDIOS -->
          <b-col>
            <h4>
              <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
              Estudios:
            </h4>
            <div>
              <h5>Técnico Superior en Desarrollo de Aplicaciones Web</h5>
              <p><em>IES Tetuán de las Victorias, Madrid, España.</em> 2022.</p>
            </div>
            <div>
              <h5>Técnico superior de Artes Plásticas y Diseño</h5>
              <h6>Especialidad de Artes Aplicadas a la Escultura</h6>
              <p><em>IES Tetuán de las Victorias, Madrid, España.</em> 2021.</p>
            </div>
            <div>
              <h5>Título de Bachiller</h5>
              <h6>Modalidad de Artes</h6>
              <p><em>IES Escuela de Artes La Palma, Madrid, España.</em> 2014.</p>
            </div><br>

            <h4>
              <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
              Estudios Complementarios:
            </h4>
            <div>
              <h5>Curso de AWS Academy Cloud Developing</h5>
              <p><em>IES Tetuán de las Victorias, Madrid, España.</em> 2022.</p>
            </div>
            <div>
              <h5>Curso de AWS Foundations</h5>
              <p><em>IES Tetuán de las Victorias, Madrid, España.</em> 2021.</p>
            </div>
            <div>
              <h5>Título de Ilustración digital Advanced y Concetp Art</h5>
              <p><em>ESDIP, Madrid, España.</em> 2018.</p>
            </div>
            <div>
              <h5>Título de Ilustración digital</h5>
              <p><em>ESDIP, Madrid, España.</em> 2018.</p>
            </div>
          </b-col>
          
          <!-- EXPERIENCIA PROFESIONAL -->
          <b-col>
            <h4>
              <b-icon icon="circle-fill" animation="throb" font-scale="1"></b-icon>
              Experienza Laboral:
            </h4>
            <div>
              <h5>Front-End Developer</h5>
              <p><em>NTT Data, Madrid, España.</em> 2022.</p>
              <ul>
                <li>Proyecto de Web Rising Up, ICEX.</li>
                <li>Realización de código.</li>
                <li>Realización del Manual de uso.</li>
              </ul>
              <p></p>
            </div><br>
            <div>
              <h5>Diseñadora Gráfica &amp; Multimedia</h5>
              <p><em>kembeke Studio, Madrid, España.</em> 2018 - 2020.</p>
              <ul>
                <li>Diseño editorial enfocadas a: Revistas (Funds People, Telos), Libros, Folletos...ect, con Adobe Creative Suite.</li>
                <li>Diseño digital de recursos para eventos (Slides, Carnets, Publicidades, Photocalls…ect), con Adobe Creative Suite.</li>
                <li>Diseño e Ilustración digital de recursos iconográficos: Graficos, Iconos, Logos e Ilustraciones Adobe Creative Suite.</li>
                <li>Alimentación de Contenido Web con Wordpress.</li>
                <li>Diseño de recursos para Webs con Adobe Creative Suite.</li>
              </ul>
              <p></p>
            </div>
          </b-col>
        </b-row>
      </div><br><br>


      <!-- HABILIDADES TECNICAS -->
      <div class="py-lg-4">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
            Habilidades Tecnicas
        </h3>

        <b-row cols=3 cols-sm="3" cols-md="6" cols-lg="6" cols-xl="6" no-gutters class="mb-3 text-center">
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="Icono JavaScript"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>JavaScript</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="Icono Vue"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Vue</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" alt="Icono Nuxt"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Nuxt</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Icono Java"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Java</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Icono Spring"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Spring</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/php/php-icon.svg" alt="Icono PHP"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>PHP</h5-->
          </b-col>
        </b-row>
        <b-row cols=3 cols-sm="3" cols-md="6" cols-lg="6" cols-xl="6" no-gutters class="mb-3 text-center">
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="Icono HTML"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>HTML</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://img.icons8.com/nolan/96/jsp.png" alt="Icono JSP"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>JSP</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="Icono CSS"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>CSS</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-icon.svg" alt="Icono SASS"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>SASS</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="Icono Bootstrap"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Bootstrap</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg" alt="Icono XML"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>XML</h5-->
          </b-col>
        </b-row>
        <b-row cols=3 cols-sm="3" cols-md="6" cols-lg="6" cols-xl="6" no-gutters class="mb-3 text-center">
          <b-col>
            <b-img  src="https://img.icons8.com/nolan/96/sql.png" alt="Icono SQL"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>SQL</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="Icono InDesign"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Mysql</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="Icono Postgresql"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>pgAdmin</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Icono Acrobat"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Git</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="Icono AWS"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>AWS</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" alt="Icono Wordpress"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Wordpress</h5-->
          </b-col>
        </b-row>
        <b-row cols=3 cols-sm="3" cols-md="6" cols-lg="6" cols-xl="6" no-gutters class="mb-3 text-center">
          <b-col>
            <b-img  src="https://img.icons8.com/color/480/000000/adobe-photoshop--v1.png" alt="Icono Photoshop"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Photoshop</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://img.icons8.com/color/480/000000/adobe-indesign--v1.png" alt="Icono InDesign"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>InDesign</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://img.icons8.com/color/480/000000/adobe-illustrator--v1.png" alt="Icono Illustrator"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Illustrator</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://www.vectorlogo.zone/logos/adobe_acrobat/adobe_acrobat-icon.svg" alt="Icono Acrobat"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Acrobat</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://img.icons8.com/color/480/000000/adobe-bridge--v1.png" alt="Icono Bridge"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Bridge</h5-->
          </b-col>
          <b-col>
            <b-img  src="https://img.icons8.com/color/480/000000/procreate.png" alt="Icono Procreate"
                  class="bd-placeholder-img" width="50" height="50"/>
            <!--h5>Procreate</h5-->
          </b-col>
        </b-row>
      </div>
    </b-container>

    <Footer />
  </b-container>
</template>

<script>
import Head from "../../components/viewsComponents/layout/Head.vue"
import NavBar from "../../components/viewsComponents/layout/NavBar.vue"
import Footer from "../../components/viewsComponents/layout/Footer.vue"


export default {
  name: 'AboutMeView',
    components: {
      Head, NavBar, Footer
    }
}
</script>