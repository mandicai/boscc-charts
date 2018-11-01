let width = 800,
    height = 500,
    margin = {
        top: 50,
        right: 20,
        bottom: 30,
        left: 50
    }

let svg = d3.select('#d3-example').append('svg')
    .attr('viewBox', '0 0 ' + (width + margin.right + margin.left) + ' ' + (height + margin.top + margin.bottom))
    
let g = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

let x = d3.scaleTime().range([0, width])
let y = d3.scaleLinear().range([height, 0])

let tempLine = d3.line()
    .x(function (d) {
        return x(d['FullDate'])
    })
    .y(function (d) {
        return y(d['Temperature [2 m above gnd]'])
    })

let bisectDate = d3.bisector(function (d) { return d['FullDate'] }).left

d3.dsv(';', 'data/boston_weather_data.csv', function (d) {
        return {
            'FullDate': new Date(d.Year + '-' + d.Month + '-' + d.Day + ' ' + d.Hour + ':' + d.Minute),
            'Temperature [2 m above gnd]': +d['Temperature  [2 m above gnd]']
        }
}).then(temperatureData => {
    x.domain(d3.extent(temperatureData, function(d) { return d['FullDate'] })).nice()
    y.domain([0, d3.max(temperatureData, function(d) { return d['Temperature [2 m above gnd]'] })])

    // line graph
    g.append('g')
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(d3.axisBottom(x))

    g.append('g')
        .call(d3.axisLeft(y))

    // grid lines
    let grid = g.append('g')
        .attr('class', 'grid')

    grid.call(d3.axisBottom(x)
        .tickSize(height)
        .tickFormat(''))

    g.append('path')
        .data([temperatureData])
        .attr('class', 'line')
        .attr('d', tempLine)
        .on('mouseover', function () { focus.style('display', 'initial') })
        .on('mousemove', mousemove)
    
    // hover over to see information
    let focus = g.append('g')
        .attr('class', 'focus')
        .style('display', 'none')

    focus.append('circle')
        .attr('r', 4.5)

    focus.append('text')
        .attr('x', 9)
        .attr('dy', '.35em')

    function mousemove () {
        // d3.mouse finds the mouse position
        // get the first element (x mouse position) and find out its equivalent x scale value with d3.invert
        let x0 = x.invert(d3.mouse(this)[0]),
            i = bisectDate(temperatureData, x0),
            d0 = temperatureData[i - 1],
            d1 = temperatureData[i]
            d = x0 - d0['Temperature [2 m above gnd]'] > d1['Temperature [2 m above gnd]'] - x0 ? d1 : d0

            focus.attr('transform', 'translate(' + x(d['FullDate']) + ',' + y(d['Temperature [2 m above gnd]']) + ')')
            focus.select('text').text(d['Temperature [2 m above gnd]'])
    }
    
    // title
    g.append('text')
        .attr('transform', 'translate(' + width/2 + ',' + -20 + ')')
        .text('Boston Temperatures (1 week)')
        .attr('text-anchor', 'middle')
    
    function sortCopy(arr) {
        return arr.slice(0).sort(function (a, b) {
            return b['Temperature [2 m above gnd]'] - a['Temperature [2 m above gnd]']
        })
    }

    let maxTemp = sortCopy(temperatureData)[0]
    let minTemp = sortCopy(temperatureData)[temperatureData.length - 1]

    let annotations = [{
        note: {
            title: 'Hottest',
        },
        subject: {
            radius: 10,
        },
        type: d3.annotationCalloutCircle,
        x: x(maxTemp['FullDate']),
        y: y(maxTemp['Temperature [2 m above gnd]']),
        dy: 200,
        color: '#dd1d6d'
    }, {
        note: {
            title: 'Coldest',
        },
        subject: {
            radius: 10,
        },
        type: d3.annotationCalloutCircle,
        x: x(minTemp['FullDate']),
        y: y(minTemp['Temperature [2 m above gnd]']),
        dy: 50,
        color: '#29bac1'
    }]

    let makeAnnotations = d3.annotation()
        .type(d3.annotationLabel)
        .annotations(annotations)

    g.append('g')
        .attr('class', 'country-annotation-group')
        .call(makeAnnotations)
})