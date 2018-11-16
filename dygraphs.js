// DYGRAPHS
// add full date and convert values to numbers
// need to make position of chart absolute to resize
d3.dsv(';', 'data/boston_weather_data.csv', function (d) {
    return {
        'FullDate': new Date(d.Year + '-' + d.Month + '-' + d.Day + ' ' + d.Hour + ':' + d.Minute),
        'Temperature [2 m above gnd]': +d['Temperature  [2 m above gnd]']
    }
}).then(data => {
    let formattedData = data.map(d => {
        return [d['FullDate'], d['Temperature [2 m above gnd]']]
    })

    let sortedData = formattedData.slice().sort(function (a, b) {
        return b[1] - a[1]
    })
    
    let maxTemp = sortedData[0]
    let minTemp = sortedData[sortedData.length - 1]
    
    let g = new Dygraph(
        document.getElementById('dygraphs-example'),
        formattedData, {
            legend: 'always',
            animatedZooms: true,
            title: 'Boston Temperatures (1 week)',
            labels: ['Date', 'Temperature [2 m above gnd]'],
            color: '#d0cdfa',
            strokeWidth: 4.0,
            includeZero: true
        })

    g.ready(function () {
        g.setAnnotations([{
                series: 'Temperature [2 m above gnd]',
                x: Date.parse(maxTemp[0]),
                shortText: 'H',
                text: 'Hottest Day',
                cssClass: 'hottest-annotation',
                tickColor: '#dd1d6d'
            },
            {
                series: 'Temperature [2 m above gnd]',
                x: Date.parse(minTemp[0]),
                shortText: 'C',
                text: 'Coldest Day',
                cssClass: 'coldest-annotation',
                tickColor: '#29bac1'
            }
        ])
    })
})