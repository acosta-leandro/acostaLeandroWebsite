<script setup lang="ts">
import { Dark } from 'quasar'
Dark.set(true)

</script>
<template>
  <q-layout view="" dark>
    <q-page-container>
      <slot />
    </q-page-container>
  </q-layout>
</template>
