<template>
  <div class="p-6">
    <label>
      Input: <input class="border border-black" type="text" v-model="text" />
    </label>
    <p class="text-red-600 h-8 mb-10">{{ text }}</p>
    <button class="border border-black px-3" @click="fill()">Fill</button>
    <button class="border border-black px-3" @click="del()">Delete</button>
    <pre>{{ modelo }}</pre>
  </div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
import photos from '~~/store/photos';

definePageMeta({
  layout: 'navigation'
});

photos.getPhotos().then(r => (modelo.value = r));

const text: Ref<string> = ref('');
const modelo: Ref<Photo[] | undefined> = ref();

async function fill(): Promise<void> {
  modelo.value = await photos.getPhotos();
}

function del(): void {
  delete modelo.value;
}
</script>
