new Vue({
    el: '#app',
    data: {
        name: '',
        height: null,
        calculationType: 'weight',
        idealWeight: null,
        savedResults: [], // Array to store saved results
    },
    methods: {
        calculateWeight: function () {
            if (this.height) {
                // Calculate ideal weight based on height
                this.idealWeight = this.height - 100;
            }
        },
        saveResult: function () {
            if (this.idealWeight !== null) {
                // Save the ideal weight result
                this.savedResults.push({
                    name: this.name,
                    idealWeight: this.idealWeight,
                });
                // Reset name and idealWeight for the next calculation
                this.name = '';
                this.idealWeight = null;
            }
        },
        removeResult: function (index) {
            // Remove a result from the savedResults array
            this.savedResults.splice(index, 1);
        },
    },
});
