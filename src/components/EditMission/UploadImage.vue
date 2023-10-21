<template lang="html">
<section class="upload-image">
    <v-row>
        <v-btn text>
            <v-icon>mdi-camera</v-icon>{{$t('add_screenshot')}}
            <input type="file" @change="onFileChange" class="file-upload-input" />
        </v-btn>
        <v-icon v-if="completed" color="success">mdi-file-upload</v-icon>
        <v-col col="4">
            <v-progress-linear striped height="10" v-if="progress && !completed" v-model="progress" color="primary"></v-progress-linear>
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import axios from 'axios';

export default {
    name: 'upload-image',
    props: ['url'],
    model: {
        props: 'url',
        event: 'upload'
    },
    mounted() {

    },
    data() {
        return {
            progress: 0,
            completed: false
        }
    },
    methods: {

        onFileChange(e) {
            var vue = this
            var file = e.target.files[0];

            var formData = new FormData();
            formData.append("upload_preset", "ju6cwiti");
            formData.append("file", file);

            var instance = axios.create();
            delete instance.defaults.headers.common['Authorization'];

            instance.post(
                    'https://api.cloudinary.com/v1_1/dmcqsiu6h/auto/upload',
                    formData, {
                        onUploadProgress: function (progressEvent) {
                            var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                            vue.progress = percentCompleted
                        }
                    }
                )
                .then(res => {
                    vue.$emit('upload', res.data.secure_url)
                    this.completed = true
                })

        },
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.file-upload-input {
    position: absolute;
    outline: none;
    opacity: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
}
</style>
