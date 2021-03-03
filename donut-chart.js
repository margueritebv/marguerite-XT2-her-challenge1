var ctx = document.getElementById('brandstof-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Verbruikt', 'Hoeveelheid nodig zuinig', 'Hoeveelheid nodig niet zuinig'],
        datasets: [{
            data: [60, 40, 15],
            backgroundColor: [
                '#7ecbaf',
                '#4d979a',
                '#28708a',
            ],
            borderColor: [
                '#7ecbaf',
                '#4d979a',
                '#28708a',
            ],
            borderWidth: 1
        }]
    },
    options: {
        
    }
});