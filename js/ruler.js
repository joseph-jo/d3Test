
// View - Ruler
var xRuler = d3.scaleLinear()
    .domain([0, width])
    .range([0, width]);

var yRuler = d3.scaleLinear()
    .domain([0, height])
    .range([0, height]);
    
svg.append("g")
    .call(d3.axisBottom().scale(xRuler).tickFormat(function(d) {
			return d + ' px';
		}));
svg.append("g")
    .call(d3.axisRight().scale(yRuler).tickFormat(function(d) {
			return d + ' px';
		}));
    