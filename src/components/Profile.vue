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

            <v-container fluid>
                <v-row dense>
                    <v-col
                            v-for="item in items"
                            :key="item.title"
                            :cols="item.flex"
                    >
                        <v-card
                                class="mx-auto"
                                max-width="400"
                        >
                            <v-list-item>
                                <v-list-item-avatar color="grey"></v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                                    <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                            <v-img
                                    class="white--text align-end"
                                    height="200px"
                                    v-bind:src="item.image"
                            >
                            </v-img>
                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text class="text--primary">
                                        <div>Case: {{ item.case }}</div>
                                        <div>PCB: {{ item.pcb }}</div>
                                        <div>Switches: {{ item.switches }}</div>
                                        <div>Keycaps: {{ item.keycaps }}</div>
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
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
                    </v-col>
                </v-row>
            </v-container>


        </v-container>

    </v-app>
</template>

<script>
    import "../style.css"

    export default {
        data() {
            return {
                show: false,
                items: [
                    {
                        title: "My Build #1",
                        image: "https://i.imgur.com/CTcQGXL.jpg",
                        case: "Tofu 65%",
                        pcb: "KBD67 Rev2",
                        switches: "Kahil box White",
                        keycaps: "GMK Masterpiece",
                        flex: 6,
                        user: "In0cenT"
                    },
                    {
                        title: "My Build #2",
                        image: "https://i.imgur.com/MAlMToQ.jpg",
                        case: "Keycult 50%",
                        pcb: "Keycult 1",
                        switches: "Cherry MX Brown",
                        keycaps: "KAT Atlantis",
                        flex: 6,
                        user: "Alien"
                    },
                    {
                        title: "My Build #3",
                        image: "https://i.imgur.com/6370sor.jpg",
                        case: "KPRepublic 90%",
                        pcb: "Republic",
                        switches: "Cream",
                        keycaps: "GMK Dots",
                        flex: 6,
                        user: "Derp"
                    }, {
                        title: "My Build #4",
                        image: "https://i.imgur.com/CTcQGXL.jpg",
                        case: "Tofu 65%",
                        pcb: "KBD67 Rev2",
                        switches: "Kahil box White",
                        keycaps: "GMK Masterpiece",
                        flex: 12,
                        user: "Peter"
                    }, {
                        title: "My Build #5",
                        image: "https://i.imgur.com/MAlMToQ.jpg",
                        case: "Keycult 50%",
                        pcb: "Keycult 1",
                        switches: "Cherry MX Brown",
                        keycaps: "KAT Atlantis",
                        flex: 6,
                        user: "Kurt"
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
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            }
        },
    }

</script>
