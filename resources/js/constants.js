export default {
    DRAWER_WIDTH: 240,
    api: {
        BASE_URL: 'http://localhost:8000',
        API_URL: 'http://localhost:8000/api'
    },
    compare: {
        HAND: 'handed',
        GENDER: 'gender',
        AGE: 'birthdate'
    },
    gender: {
        M: 'Male',
        F: 'Female',
    },
    handed: {
        R: 'Right',
        L: 'Left',
    },
    colors: {
        TENNIS_BALL: '#f6dc00',
        CLAY: '#a34900',
        FAST_TRACK: '#6fb2e3',
        MOVISTAR: '#5bc500',
        MEDIUM_TONE: '#86888c',
    },
    dataSetsOptions: {
        TENNIS_PERFORMANCE: {
            dataSetOptions: {
                scaleSteps: 10,
                scaleStartValue: 0,
                scaleEndValue: 5,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                pointStyle: 'rectRot',
                fill: 'start',
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            max: 5,
                            min: 0,
                            callback: function (value) {
                                if (value % 1 === 0) {
                                    return value
                                }
                            }
                        }
                    }]
                }
            }
        }
    },
    DROP_AT: [
        null,
        '#5bc500',
        '#E2BF1D',
        '#a41416',
        '#5bc500',
        '#5bc500',
        '#5bc500',
        '#5bc500',
        '#e2bf1d',
        '#5bc500',
        '#5bc500',
        '#5bc500',
        '#5bc500',
    ]
}
