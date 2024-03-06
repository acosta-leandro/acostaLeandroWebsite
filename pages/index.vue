<script setup lang="ts">
const linkedIn = () => {
  window.open("https://www.linkedin.com/in/leandrosacosta/", "_blank");
}
const github = () => {
  window.open("https://github.com/acosta-leandro", "_blank");
}
const instagram = () => {
  window.open("https://www.instagram.com/acosta.dev/", "_blank");
}
const youtube = () => {
  window.open("https://www.youtube.com/@acosta-dev", "_blank");
}

const twitch = () => {
  window.open("https://www.twitch.tv/acostadev", "_blank");
}

const links = [
  {
    icon: "fa-brands fa-linkedin",
    name: "LinkedIn",
    click: linkedIn,
  },
  {
    icon: "fa-brands fa-github",
    name: "GitHub",
    click: github,
  },
  {
    icon: "fa-brands fa-instagram",
    name: "Instagram",
    click: instagram,
  },
  {
    icon: "fa-brands fa-youtube",
    name: "YouTube",
    click: youtube,
  },
  {
    icon: "fa-brands fa-twitch",
    name: "Twitch",
    click: twitch,
  },
];


const description = ref("My amazing site.");

useSeoMeta({
  title: "Leandro Acosta - Software Engineer",
  description,
});
</script>
<template>
  <q-page class="q-py-xl column margins">
    <div class="row justify-center">
      <q-avatar size="150px">
        <img src="/leandroAcosta.png">
      </q-avatar>
    </div>

    <div class="row justify-center q-mt-md q-px-xl">
      <div class="col-2" v-for="link in links">
        <q-avatar square :icon="link.icon" color="blue-grey-9" class="cursor-pointer rounded-borders"
                  @click="link.click"/>
      </div>
    </div>
    <div class="row justify-center q-mt-md">
      <h1 class="text-weight-thin q-pa-none q-py-sm text-center">Leandro Acosta</h1>
    </div>
    <div class="row justify-center">
      <span class="q-pa-none q-ma-none text-center">From Brazil, Living in Macao</span>
    </div>

    <div class="row q-mt-md">
      <div class="col-6">
        <ul>
          <li>Portuguese (Native)</li>
          <li>English (Fluent)</li>
          <li>Mandarin (Intermediate)</li>
          <li>Spanish (Intermediate)</li>
          <li>Cantonse (Basic)</li>
        </ul>
      </div>
      <div class="col-6">
        <ul>
          <li>Software Engineer</li>
          <li>Entrepreneur</li>
          <li>Master in Computer Science (candidate)</li>
          <li>Public Speaker</li>
          <li>Content Creator</li>
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

    <div class="row justify-center items-center q-mt-xl">
      <h2>contact</h2>
      <q-icon name="fa-solid fa-at" color="blue-grey-9" class="q-px-md" size="xl"/>
      <h2>acostaleandro.com</h2>
    </div>

  </q-page>
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

</style>
