
 var app = new Vue({
     el: '#app',
     data() {
         return {
             participants: null
         }
     },

     mounted() {
         axios.get("https://events.dancemarathon.com/api/events/3484/participants")
         .then(response => {
             this.participants = response.data;
             console.log(this.participants)
         })
     },

     computed: {
         sortedParticipants: function(){
             return _.orderBy(this.participants, 'sumDonations', 'desc')
         }
     }
})

 Vue.config.devtools = true;

/*
    JSON response

    participants [
        {displayName, avatarImageURL, fundraisingGoal, sumDonations, numDonations, links{donate, page} }
        ...
    ]

*/
