export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('motion', {
    mounted(el, binding) {
      el.id = binding.value;
    }
  });
}); // Tive que fazer isso para funcionar
