var ctx = document.getElementById('levensmiddelen-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Water', 'Fruit', 'Groenten', 'Vlees', 'Overig'],
        datasets: [{
            label: '',
            data: [80, 39, 60, 20, 50],
            backgroundColor: [
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
            ],
            borderColor: [
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
                '#7ecbaf',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + '%';
                    }
                }
            }]
        }
    }
});