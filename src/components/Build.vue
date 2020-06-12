<template>
    <v-app id="inspire">
        <v-container>

            <v-row justify="space-around" class="pt-6">

                <h1 class="display-1">Build Number 1</h1>
            </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container>

            <p class="title">Gallery</p>

            <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                        v-for="item in items"
                        :key="item.image"
                >
                    <v-img
                            v-bind:src="item.image"
                            class="white--text align-end"
                            height="200px"
                    ></v-img>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev" color="primary"></div>
                <div class="swiper-button-next" slot="button-next"></div>

            </swiper>

        </v-container>

    </v-app>
</template>

<script>
    import {Swiper, SwiperSlide, directive} from 'vue-awesome-swiper'
    import "swiper/css/swiper.css"
    import "../style.css"

    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        data() {
            return {
                items: [
                    {
                        image: 'https://i.imgur.com/CTcQGXL.jpg',
                    },
                    {
                        image: 'https://i.imgur.com/MAlMToQ.jpg',
                    },
                    {
                        image: 'https://i.imgur.com/6370sor.jpg',
                    },
                    {
                        image: 'https://i.imgur.com/QD5P7rB.jpg',
                    },
                    {
                        image: 'https://i.imgur.com/0rJAuYD.jpg',
                    }
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: false,
                    keyboard: {
                        enabled: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
    }
</script>
