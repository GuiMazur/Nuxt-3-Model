<template>
  <div>
    <nav class="flex justify-around items-center h-14">
      <div class="space-x-4">
        <NuxtLink to="/">
          <button class="border border-black px-3">Home</button>
        </NuxtLink>
        <NuxtLink to="/about">
          <button class="border border-black px-3">About</button>
        </NuxtLink>
      </div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>
