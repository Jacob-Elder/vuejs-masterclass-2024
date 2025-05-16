<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import Input from './components/ui/input/Input.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

console.log('supabase : ', supabase)
</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
    <form class="w-full max-w-96">
      <Input class="w-full pl-8 bg-background" type="text" placeholder="Search..." />
    </form>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div class="w-8 h-8 rounded-full bg-white"></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
