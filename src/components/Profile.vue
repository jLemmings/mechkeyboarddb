<template>
    <v-app id="inspire">
        <v-container>
            <v-row justify="space-around" class="pt-6">
                <v-avatar size="120">
                    <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                    >
                </v-avatar>
            </v-row>

            <v-row justify="space-around" class="pt-6">

                <p class="display-1">Herp Derp</p>
            </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-container>

            <p class="title">Own Builds</p>

            <swiper class="swiper" :options="swiperOption">
                <swiper-slide
                        v-for="item in items"
                        :key="item.title"
                >
                    <v-card
                            class="mx-auto"
                            max-width="400"
                    >
                        <v-img
                                class="white--text align-end"
                                height="200px"
                                v-bind:src="item.image"
                        >
                            <v-card-title>{{ item.title }}</v-card-title>
                        </v-img>
                        <v-card-text class="text--primary">
                            <div>Case: {{ item.case }}</div>
                            <div>PCB: {{ item.pcb }}</div>
                            <div>Switches: {{ item.switches }}</div>
                            <div>Keycaps: {{ item.keycaps }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-container>
                                <v-row justify="space-between">
                                    <v-btn>
                                        <v-icon color="primary">mdi-cards-heart</v-icon>
                                    </v-btn>
                                    <v-btn>
                                        <v-icon color="primary">mdi-pencil</v-icon>
                                    </v-btn>
                                </v-row>
                            </v-container>
                        </v-card-actions>
                    </v-card>
                </swiper-slide>


                <div class="swiper-button-prev" slot="button-prev" color="primary"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>

        </v-container>

    </v-app>
</template>

<script>
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
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
                        title: 'My Build #1',
                        image: 'https://i.imgur.com/CTcQGXL.jpg',
                        case: 'Tofu 65%',
                        pcb: 'KBD67 Rev2',
                        switches: 'Kahil box White',
                        keycaps: 'GMK Masterpiece'
                    },
                    {
                        title: 'My Build #2',
                        image: 'https://i.imgur.com/MAlMToQ.jpg',
                        case: 'Keycult 50%',
                        pcb: 'Keycult 1',
                        switches: 'Cherry MX Brown',
                        keycaps: 'KAT Atlantis'
                    },
                    {
                        title: 'My Build #3',
                        image: 'https://i.imgur.com/6370sor.jpg',
                        case: 'KPRepublic 90%',
                        pcb: 'Republic',
                        switches: 'Cream',
                        keycaps: 'GMK Dots'
                    }, {
                        title: 'My Build #4',
                        image: 'https://i.imgur.com/CTcQGXL.jpg',
                        case: 'Tofu 65%',
                        pcb: 'KBD67 Rev2',
                        switches: 'Kahil box White',
                        keycaps: 'GMK Masterpiece'
                    },
                    {
                        title: 'My Build #5',
                        image: 'https://i.imgur.com/MAlMToQ.jpg',
                        case: 'Keycult 50%',
                        pcb: 'Keycult 1',
                        switches: 'Cherry MX Brown',
                        keycaps: 'KAT Atlantis'
                    }
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: false,
                    loopFillGroupWithBlank: true,
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
