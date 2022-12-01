import { defineStore } from "pinia";

const photos = defineStore("photos", {
    getters: {

    },
    actions: {
        getPhotos(): Promise<GetPhotosDTO> {
            return $fetch('https://jsonplaceholder.typicode.com/photos')
        }
    },
})

export default photos()