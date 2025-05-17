<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const projects = ref<Tables<'projects'>[] | null>()
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.log('ERROR: ', error)
  } else {
    projects.value = data
    console.log('Projects : ', projects.value)
  }
})()
</script>

<template>
  <div>
    <h1>Projects</h1>
    <ol style="list-style: circle">
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ol>
    <RouterLink to="/">Go Home</RouterLink>
  </div>
</template>
