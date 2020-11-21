$(document).ready(function(){
    chart1([0, 0, 0, 0, 0, 0]);
    chart2([0, 0, 0, 0, 0, 0]);
    chart3([0, 0, 0, 0, 0, 0]);
    chart4([0, 0, 0, 0, 0, 0]);
    chart5([0, 0, 0, 0, 0, 0]);
    chart6([0, 0, 0, 0, 0, 0]);
})

function chart1(a){
    var c = document.getElementById("c1");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: a,
            datasets: [{
                label: 'Heat Index',
                data: a,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
function chart2(a){
    var c = document.getElementById("c2");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: a,
            datasets: [{
                label: 'Humidity',
                data: a,
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
function chart3(a){
    var c = document.getElementById("c3");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: a,
            datasets: [{
                label: 'Moisture',
                data: a,
                backgroundColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
function chart4(a){
    var c = document.getElementById("c4");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: a,
            datasets: [{
                label: 'Temperature (C)',
                data: a,
                backgroundColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
function chart5(a){
    var c = document.getElementById("c5");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: a,
            datasets: [{
                label: 'Temperature (F)',
                data: a,
                backgroundColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
function chart6(a){
    var c = document.getElementById("c6");
    var ctx = c.getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: a,
            datasets: [{
                label: 'Water',
                data: a,
                backgroundColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        //beginAtZero: true
                        min:0,max:100
                    }
                }]
            }
        }
    });
}
