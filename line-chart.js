var ctx = document.getElementById('afstand-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni'],
        datasets: [{
            label: '',
            data: [5000, 10000, 15000, 25000, 30000, 40000],
            backgroundColor: 'rgba(69, 242, 170, 0.2)',
            borderColor: '#7ecbaf',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
    }
});