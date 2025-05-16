<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>()
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.log('ERROR: ', error)
  } else {
    tasks.value = data
    console.log('Projects : ', tasks.value)
  }
})()
</script>

<template>
  <div>
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
    <RouterLink to="/">Go Home</RouterLink>
    {{ tasks }}
  </div>
</template>
