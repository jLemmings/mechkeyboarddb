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

            <v-row>
                <v-card
                        class="mx-auto"
                        max-width="400"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                        <v-card-title>My Build</v-card-title>
                    </v-img>


                    <v-card-text class="text--primary">
                        <div>Case: Tofu 65%</div>
                        <div>PCB: KBD67 Rev 2</div>
                        <div>Switches: Kahil Box White</div>
                        <div>Keycaps: GMK Masterpiece</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                color="teal lighten-2"
                                text
                        >
                            Share
                        </v-btn>

                        <v-btn
                                color="primary"
                                text
                        >
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>

        </v-container>

    </v-app>
</template>

<script>

</script>
