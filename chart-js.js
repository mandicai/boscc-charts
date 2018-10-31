// Plugins needed for additional complex charts
d3.dsv(';', 'data/boston_weather_data.csv', function (d) {
        return {
            x: new Date(d.Year + '-' + d.Month + '-' + d.Day + ' ' + d.Hour + ':' + d.Minute),
            y: +d['Temperature  [2 m above gnd]']
        }
    }).then(temperatureData => {
        let maxTemp = sortCopy(temperatureData)[0]
        let minTemp = sortCopy(temperatureData)[temperatureData.length - 1]

        let ctx = document.getElementById('chart-js-example').getContext('2d')
        let chart = new Chart(ctx, {
            type: 'line',

            data: {
                datasets: [{
                    label: "Temperature [2 m above gnd]",
                    backgroundColor: '#d3b45b',
                    fill: false,
                    borderColor: '#d3b45b',
                    data: temperatureData,
                }]
            },

            options: {
                scales: {
                    xAxes: [{
                        id: 'x-axis-0',
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'Boston Temperatures (1 week)',
                    fontSize: 15
                },
                annotation: {
                    drawTime: 'afterDatasetsDraw',
                    annotations: [{
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: maxTemp.x,
                        borderColor: '#dd421d',
                        borderWidth: 1,
                        label: {
                            enabled: true,
                            position: 'center',
                            content: 'Hottest'
                        }
                    },
                    {
                        type: 'line',
                        mode: 'vertical',
                        scaleID: 'x-axis-0',
                        value: minTemp.x,
                        borderColor: '#29bac1',
                        borderWidth: 1,
                        label: {
                            enabled: true,
                            position: 'center',
                            content: 'Coldest'
                        }
                    }]
                }
            }
        })
    })

function sortCopy(arr) {
    console.log(arr.length)
    return arr.slice(0).sort(function (a, b) { return b.y - a.y })
}
