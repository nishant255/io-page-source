// // Set up the chart
// var chart = new Highcharts.Chart({
//     chart: {
//         renderTo: 'framework_chart',
//         type: 'column',
//         options3d: {
//             enabled: true,
//             alpha: 15,
//             beta: 15,
//             depth: 50,
//             viewDistance: 25
//         }
//     },
//     title: {
//         text: 'Languages'
//     },
//     subtitle: {
//         text: 'Hover over to know more about my knowledge on each language'
//     },
//     plotOptions: {
//         column: {
//             depth: 25
//         }
//     },
//     series: [{
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
//     }]
// });
//
// function showValues() {
//     $('#alpha-value').html(chart.options.chart.options3d.alpha);
//     $('#beta-value').html(chart.options.chart.options3d.beta);
//     $('#depth-value').html(chart.options.chart.options3d.depth);
// }
//
// // Activate the sliders
// $('#sliders input').on('input change', function () {
//     chart.options.chart.options3d[this.id] = this.value;
//     showValues();
//     chart.redraw(false);
// });
//
// showValues();
//
// var gaugeChart = AmCharts.makeChart("language_chart", {
//     "type": "gauge",
//     "theme": "light",
//     "axes": [{
//         "axisAlpha": 0,
//         "tickAlpha": 0,
//         "labelsEnabled": false,
//         "startValue": 0,
//         "endValue": 100,
//         "startAngle": 0,
//         "endAngle": 270,
//         "bands": [{
//             "color": "#eee",
//             "startValue": 0,
//             "endValue": 100,
//             "radius": "100%",
//             "innerRadius": "85%"
//         }, {
//             "color": "#84b761",
//             "startValue": 0,
//             "endValue": 80,
//             "radius": "100%",
//             "innerRadius": "85%",
//             "balloonText": "90%"
//         }, {
//             "color": "#eee",
//             "startValue": 0,
//             "endValue": 100,
//             "radius": "80%",
//             "innerRadius": "65%"
//         }, {
//             "color": "#fdd400",
//             "startValue": 0,
//             "endValue": 35,
//             "radius": "80%",
//             "innerRadius": "65%",
//             "balloonText": "35%"
//         }, {
//             "color": "#eee",
//             "startValue": 0,
//             "endValue": 100,
//             "radius": "60%",
//             "innerRadius": "45%"
//         }, {
//             "color": "#cc4748",
//             "startValue": 0,
//             "endValue": 92,
//             "radius": "60%",
//             "innerRadius": "45%",
//             "balloonText": "92%"
//         }, {
//             "color": "#eee",
//             "startValue": 0,
//             "endValue": 100,
//             "radius": "40%",
//             "innerRadius": "25%"
//         }, {
//             "color": "#67b7dc",
//             "startValue": 0,
//             "endValue": 68,
//             "radius": "40%",
//             "innerRadius": "25%",
//             "balloonText": "68%"
//         }]
//     }],
//     "allLabels": [{
//         "text": "First option",
//         "x": "49%",
//         "y": "5%",
//         "size": 15,
//         "bold": true,
//         "color": "#84b761",
//         "align": "right"
//     }, {
//         "text": "Second option",
//         "x": "49%",
//         "y": "15%",
//         "size": 15,
//         "bold": true,
//         "color": "#fdd400",
//         "align": "right"
//     }, {
//         "text": "Third option",
//         "x": "49%",
//         "y": "24%",
//         "size": 15,
//         "bold": true,
//         "color": "#cc4748",
//         "align": "right"
//     }, {
//         "text": "Fourth option",
//         "x": "49%",
//         "y": "33%",
//         "size": 15,
//         "bold": true,
//         "color": "#67b7dc",
//         "align": "right"
//     }],
//     "export": {
//         "enabled": true
//     }
// });
//
var radarchart = AmCharts.makeChart( "frontend_new_chart", {
    "type": "radar",
    "theme": "none",
    "dataProvider": [ {
        "country": "Czech Republic",
        "litres": 156.9
    }, {
        "country": "Ireland",
        "litres": 131.1
    }, {
        "country": "Germany",
        "litres": 115.8
    }, {
        "country": "Australia",
        "litres": 109.9
    }, {
        "country": "Austria",
        "litres": 108.3
    }, {
        "country": "UK",
        "litres": 99
    } ],
    "valueAxes": [ {
        "axisTitleOffset": 20,
        "minimum": 0,
        "axisAlpha": 0.15
    } ],
    "startDuration": 0,
    "graphs": [ {
        "balloonText": "[[value]] litres of beer per year",
        "bullet": "round",
        "lineThickness": 2,
        "valueField": "litres"
    } ],
    "categoryField": "country",
    "export": {
        "enabled": true
    }
} );


/////////////////////////////////////////////////////////
/////////////// The Radar Chart Function ////////////////
/////////////// Written by Nadieh Bremer ////////////////
////////////////// VisualCinnamon.com ///////////////////
/////////// Inspired by the code of alangrafu ///////////
/////////////////////////////////////////////////////////

function RadarChart(id, data, options) {
    var cfg = {
        w: 600,				//Width of the circle
        h: 600,				//Height of the circle
        margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
        levels: 3,				//How many levels or inner circles should there be drawn
        maxValue: 0, 			//What is the value that the biggest circle will represent
        labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
        wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
        opacityArea: 0.35, 	//The opacity of the area of the blob
        dotRadius: 4, 			//The size of the colored circles of each blog
        opacityCircles: 0.1, 	//The opacity of the circles of each blob
        strokeWidth: 2, 		//The width of the stroke around each blob
        roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
        color: d3.scale.category10()	//Color function
    };

    //Put all of the options into a variable called cfg
    if('undefined' !== typeof options){
        for(var i in options){
            if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
        }//for i
    }//if

    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));

    var allAxis = (data[0].map(function(i, j){return i.axis})),	//Names of each axis
        total = allAxis.length,					//The number of different axes
        radius = Math.min(cfg.w/2, cfg.h/2), 	//Radius of the outermost circle
        Format = d3.format('%'),			 	//Percentage formatting
        angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

    //Scale for the radius
    var rScale = d3.scale.linear()
        .range([0, radius])
        .domain([0, maxValue]);

    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////

    //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();

    //Initiate the radar chart SVG
    var svg = d3.select(id).append("svg")
        .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar"+id);
    //Append a g element
    var g = svg.append("g")
        .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");

    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////

    //Filter for the outside glow
    var filter = g.append('defs').append('filter').attr('id','glow'),
        feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
        feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');

    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////

    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");

    //Draw the background circles
    axisGrid.selectAll(".levels")
        .data(d3.range(1,(cfg.levels+1)).reverse())
        .enter()
        .append("circle")
        .attr("class", "gridCircle")
        .attr("r", function(d, i){return radius/cfg.levels*d;})
        .style("fill", "#CDCDCD")
        .style("stroke", "#CDCDCD")
        .style("fill-opacity", cfg.opacityCircles)
        .style("filter" , "url(#glow)");

    //Text indicating at what % each level is
    axisGrid.selectAll(".axisLabel")
        .data(d3.range(1,(cfg.levels+1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", 4)
        .attr("y", function(d){return -d*radius/cfg.levels;})
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#737373")
        .text(function(d,i) { return Format(maxValue * d/cfg.levels); });

    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////

    //Create the straight lines radiating outward from the center
    var axis = axisGrid.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");
    //Append the lines
    axis.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
        .attr("class", "line")
        .style("stroke", "white")
        .style("stroke-width", "2px");

    //Append the labels at each axis
    axis.append("text")
        .attr("class", "legend")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
        .text(function(d){return d})
        .call(wrap, cfg.wrapWidth);

    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////

    //The radial line function
    var radarLine = d3.svg.line.radial()
        .interpolate("linear-closed")
        .radius(function(d) { return rScale(d.value); })
        .angle(function(d,i) {	return i*angleSlice; });

    if(cfg.roundStrokes) {
        radarLine.interpolate("cardinal-closed");
    }

    //Create a wrapper for the blobs
    var blobWrapper = g.selectAll(".radarWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarWrapper");

    //Append the backgrounds
    blobWrapper
        .append("path")
        .attr("class", "radarArea")
        .attr("d", function(d,i) { return radarLine(d); })
        .style("fill", function(d,i) { return cfg.color(i); })
        .style("fill-opacity", cfg.opacityArea)
        .on('mouseover', function (d,i){
            //Dim all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", 0.1);
            //Bring back the hovered over blob
            d3.select(this)
                .transition().duration(200)
                .style("fill-opacity", 0.7);
        })
        .on('mouseout', function(){
            //Bring back all blobs
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", cfg.opacityArea);
        });

    //Create the outlines
    blobWrapper.append("path")
        .attr("class", "radarStroke")
        .attr("d", function(d,i) { return radarLine(d); })
        .style("stroke-width", cfg.strokeWidth + "px")
        .style("stroke", function(d,i) { return cfg.color(i); })
        .style("fill", "none")
        .style("filter" , "url(#glow)");

    //Append the circles
    blobWrapper.selectAll(".radarCircle")
        .data(function(d,i) { return d; })
        .enter().append("circle")
        .attr("class", "radarCircle")
        .attr("r", cfg.dotRadius)
        .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
        .style("fill", function(d,i,j) { return cfg.color(j); })
        .style("fill-opacity", 0.8);

    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////

    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarCircleWrapper");

    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper.selectAll(".radarInvisibleCircle")
        .data(function(d,i) { return d; })
        .enter().append("circle")
        .attr("class", "radarInvisibleCircle")
        .attr("r", cfg.dotRadius*1.5)
        .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
        .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function(d,i) {
            newX =  parseFloat(d3.select(this).attr('cx')) - 10;
            newY =  parseFloat(d3.select(this).attr('cy')) - 10;

            tooltip
                .attr('x', newX)
                .attr('y', newY)
                .text(Format(d.value))
                .transition().duration(200)
                .style('opacity', 1);
        })
        .on("mouseout", function(){
            tooltip.transition().duration(200)
                .style("opacity", 0);
        });

    //Set up the small tooltip for when you hover over a circle
    var tooltip = g.append("text")
        .attr("class", "tooltip")
        .style("opacity", 0);

    /////////////////////////////////////////////////////////
    /////////////////// Helper Function /////////////////////
    /////////////////////////////////////////////////////////

    //Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text
    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.4, // ems
                y = text.attr("y"),
                x = text.attr("x"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }//wrap

}//RadarChart



//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

// var twoChartMargin = {top: 100, right: 100, bottom: 100, left: 100},
var threeChartMargin = {top: 75, right: 75, bottom: 75, left: 75},
    // twoChartWidth = Math.min($("#2_chart_div").width(), window.innerWidth - 10) - twoChartMargin.left - twoChartMargin.right,
    // twoChartHeight = Math.min(twoChartWidth, window.innerHeight - twoChartMargin.top - twoChartMargin.bottom - 20);
    threeChartWidth = Math.min(0.33*($(".panel").width()), window.innerWidth - 10) - threeChartMargin.left - threeChartMargin.right,
    threeChartHeight = Math.min(threeChartWidth, window.innerHeight - threeChartMargin.top - threeChartMargin.bottom - 20);

var threeChartTwiceMargin = {top: 75, right: 75, bottom: 75, left: 75},
    // twoChartWidth = Math.min($("#2_chart_div").width(), window.innerWidth - 10) - twoChartMargin.left - twoChartMargin.right,
    // twoChartHeight = Math.min(twoChartWidth, window.innerHeight - twoChartMargin.top - twoChartMargin.bottom - 20);
    threeChartTwiceWidth = Math.min(0.33*($(".panel").width()), window.innerWidth - 10) - threeChartMargin.left - threeChartMargin.right,
    threeChartTwiceHeight = Math.min(threeChartWidth, window.innerHeight - threeChartMargin.top - threeChartMargin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////
var languages_data = [
    [
        {axis:"C",value:0.40},
        {axis:"Python",value:1.00},
        {axis:"C++",value:0.50},
        {axis:"Swift",value:1.00},
        {axis:"Java",value:0.50},
        {axis:"HTML5",value:1.00},
        {axis:"CSS3",value:0.75},
        {axis:"Javascript",value:1.00}
    ]
];
var frontend_data = [
    [
        {axis:"AngularJS",value:1.00},
        {axis:"Jquery",value:0.50},
        {axis:"AJAX",value:0.75},
        {axis:"EJS",value:0.75},
        {axis:"Bootstrap",value:0.75},
        {axis:"Materialize",value:0.75},
        {axis:"D3.js",value:0.50}
    ]
];
var backend_data = [
    [
        {axis:"Django",value:1.00},
        {axis:"Flask",value:0.75},
        {axis:"Node.js",value:1.00},
        {axis:"Express.js",value:1.00},
        {axis:"UIKit",value:0.75},
        {axis:"MapKit",value:0.50}
    ]
];
var database_data = [
    [
        {axis:"CoreData",value:1.00},
        {axis:"MySQL",value:1.00},
        {axis:"MongoDB",value:1.00},
        {axis:"SQL",value:0.75},
        {axis:"NoSQL",value:0.75},
        {axis:"Mongoose",value:1.00},
        {axis:"MAMP",value:0.50}
    ]
];
var other_technologies_data = [
    [
        {axis:"GIT",value:1.00},
        {axis:"OS X",value:1.00},
        {axis:"XCode",value:1.00},
        {axis:"Webstorm",value:1.00},
        {axis:"Atom",value:1.00}
    ]
];

//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var langueges_color = d3.scale.ordinal().range(["#a70bad"]);
var other_tech_color = d3.scale.ordinal().range(["#0bad2e"]);
var database_color = d3.scale.ordinal().range(["#0c4fad"]);
var frontend_color = d3.scale.ordinal().range(["#EDC951"]);
var backend_color = d3.scale.ordinal().range(["#f44242"]);


var languagesChartOptions = {
    w: threeChartWidth,
    h: threeChartHeight,
    margin: threeChartMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
var otherTechChartOptions = {
    w: threeChartWidth,
    h: threeChartHeight,
    margin: threeChartMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
var frontEndChartOptions = {
    w: threeChartWidth,
    h: threeChartHeight,
    margin: threeChartMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
var frontEndTabChartOptions = {
    w: threeChartTwiceWidth,
    h: threeChartTwiceHeight,
    margin: threeChartTwiceMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
var backendChartOptions = {
    w: threeChartWidth,
    h: threeChartHeight,
    margin: threeChartMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
var databaseChartOptions = {
    w: threeChartWidth,
    h: threeChartHeight,
    margin: threeChartMargin,
    maxValue: 0.5,
    levels: 5,
    roundStrokes: true,
    color: database_color
};
//Call function to draw the Radar chart
console.log("=======================");
console.log(languagesChartOptions)
RadarChart(".languages_chart", languages_data, languagesChartOptions);
RadarChart(".other_technologies_chart", other_technologies_data, otherTechChartOptions);
RadarChart(".frontend_chart", frontend_data, frontEndChartOptions);
RadarChart(".backend_chart", backend_data, backendChartOptions);
RadarChart(".database_chart", database_data, databaseChartOptions);
RadarChart(".frontend_tab_chart", frontend_data, frontEndTabChartOptions);
RadarChart(".languages_tab_chart", languages_data, languagesChartOptions);
RadarChart(".otherTech_tab_chart", other_technologies_data, otherTechChartOptions);
RadarChart(".backend_tab_chart", backend_data, backendChartOptions);
RadarChart(".database_tab_chart", database_data, databaseChartOptions);