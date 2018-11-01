google.charts.load('current', {
    'packages': ['corechart']
})

d3.dsv(';', 'data/boston_weather_data.csv', function (d) {
        return [
            new Date(d.Year + '-' + d.Month + '-' + d.Day + ' ' + d.Hour + ':' + d.Minute), 
            +d['Temperature  [2 m above gnd]'], 
            null,
            null, 
            null
        ]
    }).then(temperatureData => {
        let minMax = d3.extent(temperatureData, function (d) { return d[1]})
        
        temperatureData.forEach(datum => {
            if (datum[1] === minMax[0]) {
                datum[2] = 'C'
                datum[3] = 'Coldest time'
                datum[4] = 'color: #29bac1; stroke: none'
            }
            if (datum[1] === minMax[1]) {
                datum[2] = 'H'
                datum[3] = 'Hottest time'
                datum[4] = 'color: #dd421d; stroke: none'
            }
        })

        google.charts.setOnLoadCallback(drawChart)

        function drawChart() {
            let data = new google.visualization.DataTable()
            data.addColumn('date', 'Date')
            data.addColumn('number', 'Temperature [2 m above gnd]')
            data.addColumn({type: 'string', role: 'annotation'})
            data.addColumn({type: 'string', role: 'annotationText'})
            data.addColumn({type: 'string', role: 'style'})
            data.addRows(temperatureData)

            let options = {
                title: 'Boston Temperatures (1 week)',
                width: 1200,
                height: 800,
                colors: ['#d3b45b'],
                fontName: 'Nunito',
                hAxis: {
                    format: 'd MMM'
                }
            }

            let chart = new google.visualization.LineChart(document.getElementById('google-charts-example'))
            chart.draw(data, options)
        }
    })