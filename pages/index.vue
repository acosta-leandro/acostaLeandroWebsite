<script setup lang="ts">




const description = ref("Leandro Acosta - Assistant Teacher - AI and IT");

useSeoMeta({
  title: "Leandro Acosta",
  description,
});
</script>
<template>
  <div>
    <!-- Navigation Bar -->
    <div class="nav-bar">
      <div class="nav-container">
        <div class="row justify-center items-center">
          <q-btn 
            flat 
            no-caps 
            class="nav-btn active-nav" 
            icon="person"
            label="Portfolio"
            :to="'/'"
          />
          <q-separator vertical class="q-mx-md nav-separator" />
          <q-btn 
            flat 
            no-caps 
            class="nav-btn" 
            icon="videogame_asset"
            label="RPO Competition"
            :to="'/rpo'"
          />
        </div>
      </div>
    </div>
    
    <q-page class="q-py-xl column margins page-content">
    <div class="row justify-center">
      <q-avatar size="150px">
        <img src="/leandroAcosta.png">
      </q-avatar>
    </div>

    <div class="row justify-center q-mt-md">
      <h1 class="text-weight-thin q-pa-none q-py-sm text-center">Leandro Acosta</h1>
    </div>
    <div class="row justify-center">
      <span class="q-pa-none q-ma-none text-center">Assistant Teacher - AI and IT</span>
    </div>
    <div class="row justify-center">
      <span class="q-pa-none q-ma-none text-center">Pui Ching Middle School (Coloane Campus)</span>
    </div>
    <div class="row justify-center">
      <span class="q-pa-none q-ma-none text-center">Master in Computer Science - AI Applied in Education</span>
    </div>

    <div class="row q-mt-md">
      <div class="col-6">
        <ul>
          <li>Portuguese (Native)</li>
          <li>English (Fluent)</li>
        </ul>
      </div>
      <div class="col-6">
        <ul>
          <li>Mandarin (Intermediate)</li>
          <li>Spanish (Intermediate)</li>
        </ul>
      </div>
    </div>

    <div class="row justify-center items-center q-px-md q-mt-md">
      <div class="row col-3">
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
            width="64px"/>
      </div>
      <div class="row col-9">
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UY.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PR.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CL.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MO.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/HK.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ET.svg"
            width="32px"/>
        <img
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"
            width="32px"/>
      </div>
    </div>

    <div class="row q-mt-xl">
      <div class="col-12 col-md-6 q-px-md">
        <div class="row justify-center">
          <h2>Education</h2>
        </div>
        <div class="q-mt-md education-section">
          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Education</div>
            <div class="text-grey-7">Postgraduate Degree</div>
            <div class="text-caption">University of Saint Joseph 2025 - 2026</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Special Education - Teaching of the Gifted and Talented</div>
            <div class="text-grey-7">Postgraduate Degree</div>
            <div class="text-caption">Faculdade Iguaçu 2025</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Artificial Intelligence</div>
            <div class="text-grey-7">Postgraduate Degree</div>
            <div class="text-caption">Faculdade Iguaçu 2025</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Computer Science</div>
            <div class="text-grey-7">Master of Science - MS</div>
            <div class="text-caption">University of Macau 2022 - 2025</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Computer Systems Analysis</div>
            <div class="text-grey-7">Bachelor of Technology</div>
            <div class="text-caption">Univates 2023 - 2025</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Chinese Language and Literature</div>
            <div class="text-grey-7">Bachelor of Arts - BA</div>
            <div class="text-caption">Macao Polytechnic University 2018 - 2022</div>
          </div>

          <div class="education-item q-mb-md">
            <div class="text-weight-medium">Computer Software Engineering</div>
            <div class="text-grey-7">Bachelor of Science - BS</div>
            <div class="text-caption">Univates 2015 - 2018</div>
            <div class="text-caption text-italic">Not concluded due opportunity to live and study in China</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 q-px-md">
        <div class="row justify-center">
          <h2>Work Experience</h2>
        </div>
        <div class="q-mt-md work-experience-section">
          <div class="work-item q-mb-md">
            <div class="text-weight-medium">Senior Software Developer</div>
            <div class="text-grey-7">University of Macau</div>
            <div class="text-caption">Macao - 2 years</div>


          </div>

          <div class="work-item q-mb-md">
            <div class="text-weight-medium">Senior Software Engineer</div>
            <div class="text-grey-7">Eternal Technology</div>
            <div class="text-caption text-grey-6">Macao - 5 years</div>


          </div>

          <div class="work-item q-mb-md">
            <div class="text-weight-medium">Founder</div>
            <div class="text-grey-7">Tips4Chinese</div>
            <div class="text-caption">Macao SAR - 1 year</div>


          </div>

          <div class="work-item q-mb-md">
            <div class="text-weight-medium">Director of Information Technology</div>
            <div class="text-grey-7">Amalfi Indústria de Alimentos Ltda</div>
            <div class="text-caption">Brazil - 3 years</div>
          </div>
          <div class="work-item q-mb-md">
            <div class="text-caption">More...</div>
          </div>
        </div>
      </div>
    </div>

    </q-page>
  </div>
</template>

<style>
h1 {
  font-size: 2.5em;
  margin: 0;
  line-height: 1.2;
}

h2 {
  font-size: 1.5em;
  margin: 0;
  line-height: 1.2;
}
.margins{
  max-width: 500px;
  margin: 0 auto;
}

/* Navigation Bar Styles */
.nav-bar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-btn {
  color: #666;
  font-weight: 500;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.nav-btn:hover {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
}

.active-nav {
  background: rgba(25, 118, 210, 0.15) !important;
  color: #1976d2 !important;
}

.nav-separator {
  opacity: 0.3;
}

.page-content {
  margin-top: 1rem;
}

/* Dark Mode Support */
body.body--dark .nav-bar {
  background: rgba(18, 18, 18, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

body.body--dark .nav-btn {
  color: #bbb;
}

body.body--dark .nav-btn:hover {
  background: rgba(25, 118, 210, 0.2);
  color: #42a5f5;
}

body.body--dark .active-nav {
  background: rgba(25, 118, 210, 0.25) !important;
  color: #42a5f5 !important;
}

body.body--dark .nav-separator {
  opacity: 0.2;
}

</style>
