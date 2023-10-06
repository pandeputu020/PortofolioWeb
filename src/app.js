new Vue({
    el: '#app',
    data: {
        name: '',
        height: '',
        idealWeight: null
    },
    methods: {
        calculateWeight: function() {
            if (this.height > 0) {
                // Calculate ideal weight (for example, using a simple formula)
                // You can replace this formula with a more accurate one as needed.
                this.idealWeight = Math.round((this.height - 100) * 0.9);
            } else {
                this.idealWeight = null;
            }
        }
    }
});
