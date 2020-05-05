
// Model
var dataset = [];   
var items = 100;
for (var i = 0; i < items; i++) {

	var circle = {}
	circle.r = Math.floor(d3.randomUniform(50, 500)());
	circle.cx = Math.floor(d3.randomUniform(width)());
	circle.cy = Math.floor(d3.randomUniform(height)());
 	circle.rgba = 'rgba(' + Math.floor(d3.randomUniform(255)()) + ',' 
       							+ Math.floor(d3.randomUniform(255)()) + ',' 
       							+ Math.floor(d3.randomUniform(255)()) + ',' 
       							+ Math.random() + ')'
	dataset.push(circle);
}

// console.log(dataset)