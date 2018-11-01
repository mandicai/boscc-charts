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

    let g = new Dygraph(
        document.getElementById('dygraphs-example'),
        formattedData, {
            legend: 'always',
            animatedZooms: true,
            title: 'Boston Temperatures (1 week)',
            labels: ['Date', 'Temperature [2 m above gnd]'],
            color: '#d3b45b',
            includeZero: true
        })

    g.ready(function () {
        g.setAnnotations([{
                series: 'Temperature [2 m above gnd]',
                x: Date.parse('2018-10-20 14:00'),
                shortText: 'H',
                text: 'Hottest Day',
                cssClass: 'hottest-annotation',
                tickColor: '#dd3710'
            },
            {
                series: 'Temperature [2 m above gnd]',
                x: Date.parse('2018-10-22 7:00'),
                shortText: 'C',
                text: 'Coldest Day',
                cssClass: 'coldest-annotation',
                tickColor: '#29bac1'
            }
        ])
    })
})