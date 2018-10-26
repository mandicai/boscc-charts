

d3.json('data/boscc_descriptions.json').then(descriptions => {
  let conjunctions = ['and', 'in', 'at', 'a', 'of', 'is', 'this', 'when', 'will', 'to', 'the', 'with', 'for', 'be', 'that', 'it']

  // remove punctuation and useless conjunctions
  let formattedDescriptions = descriptions.map(description => {
    let formattedDescription = description.toLowerCase().replace(/[.,\/?–#!$'"%\^&\*;:{}=\-_`~()]/g, "").replace(/\band\b|\bin\b|\bat\b|\ba\b|\bof\b|\byour\b|\bis\b|\bthis\b|\bwhen\b|\bwill\b|\bto\b|\bthe\b|\bwith\b|\bfor\b|\bbe\b|\byour\b|\bthat\b|\bit\b/g, "").replace(/\s{2,}/g, " ").split(" ")
    return formattedDescription
  })

  // flatten the array of split descriptions
  let finalWords = flatten(formattedDescriptions)

  // total the number of words
  let wordCounts = {}
  finalWords.forEach(
    word => { 
      wordCounts[word] = (wordCounts[word] || 0) + 1 // wordCounts[word] || 0 returns
    }
  )

  // get it into a chartable data format
  let wordData = []
  Object.keys(wordCounts).forEach(function (key, index) {
    if (wordCounts[key] > 10 && key != '') {
      wordData.push({
        word: key,
        count: wordCounts[key]
      })
    }
  })

  let width = 750,
    height = 750

  let svg = d3.select('#word-chart')
    .append('svg')
    .attr('viewBox', '0 0' + ' ' + width + ' ' + height)

  let color = d3.scaleSequential(d3.interpolateYlGnBu).domain([0, 100])

  let nodes = wordData

  let simulation = d3.forceSimulation(wordData) // creates simulation
    .force('charge', d3.forceManyBody().strength(0.75)) // applies attraction or repelling force
    .force('center', d3.forceCenter(width / 2, height / 2)) // pulls points towards a center
    .force('collision', d3.forceCollide().radius(function (d) {
      return d.count + 15
    }))
    .on('tick', ticked)

  let bubbles = svg.selectAll('.word-bubble')
    .data(wordData)
    .enter().append('g').attr('class', 'word-bubble')
    .append('circle')
    .attr('r', function (d) {
      return d.count
    })
    .style('fill', function (d, i) {
      return color(i)
    })

  let labels = d3.selectAll('.word-bubble')
    .append('g')
    .attr('class', 'word-label')

  let wordLabel = labels.append('text')
    .attr('x', function (d) {
      return d.x
    })
    .attr('y', function (d) {
      return d.y
    })
    .attr('dy', 4)
    .text(function (d) {
      return d.word
    })
    .attr('text-anchor', 'middle')
    .attr('class', 'word-label-text')

  function ticked() {
    bubbles.attr('cx', function (d) {
      return d.x
    })
      .attr('cy', function (d) {
        return d.y
      })

    wordLabel.attr('x', function (d) {
      return d.x
    })
      .attr('y', function (d) {
        return d.y
      })

    bubbles.exit().remove()
    labels.exit().remove()
    wordLabel.exit().remove()
  }

  function flatten(array) {
    return array.reduce((acc, val) => acc.concat(val), [])
  }
})