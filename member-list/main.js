Vue.component('fundraisers', {
    props: ['participants'],
    template: `
            <div v-for="participant in sortedParticipants">
                <!--Card-1-->
                <div class="card col-12">
                    <div class="card-wrapper media-container-row media-container-row">
                        <div class="card-box">
                            <div class="row">
                                <div class="col-12 col-md-2">
                                    <!--Image-->
                                    <div class="mbr-figure">
                                        <img :src="participant.avatarImageURL" :alt="participant.displayName">
                                    </div>
                                </div>
                                <div class="col-12 col-md-10">
                                    <div class="wrapper">
                                        <div class="top-line pb-3">
                                            <h4 class="card-title mbr-fonts-style display-5">
                                                {{ participant.displayName}}
                                            </h4>
                                            <a :href="participant.links.donate" class="mbr-text cost mbr-fonts-style m-0 display-5 align-right">
                                                DONATE NOW!
                                            </a>
                                        </div>
                                        <div class="bottom-line">
                                            <p class="mbr-text mbr-fonts-style display-7">
                                                {{participant.sumDonations | currency}}/{{participant.fundraisingGoal | currency}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `,
    computed: {
        sortedParticipants: function(){
            console.log(this.participants)
            return _.orderBy(this.participants, 'sumDonations', 'desc')
        }
    }
});

var app = new Vue({
     el: '#app',
     data: {
        participants: [],
     },
     mounted() {
         axios.get("https://events.dancemarathon.com/api/events/3484/participants")
         .then(response => {
             this.participants = response.data;
             console.log(this.participants)
         })
     }
});

 Vue.config.devtools = true;

/*
    JSON response

    participants [
        {displayName, avatarImageURL, fundraisingGoal, sumDonations, numDonations, links{donate, page} }
        ...
    ]

*/
