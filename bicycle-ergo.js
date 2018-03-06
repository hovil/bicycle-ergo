var seattube_length = 58;
var toptube_length = 55;
var headtube_length = 14;
var chainstay_hz_length = 41;
var chainstay_vt_length = 52;
var wheelbase = 105;
var bb_drop = 8;
var stem_height =10;
var stem_length = 12;
var crank_length = 16.5;
var wheelsize = 31;

project.currentStyle = {
    strokeColor: 'black',
    strokeWidth: 3
};

var basex = 100;
var basey = 100;

// Create a Paper.js Path to draw a line into it:
var path = new Path();
var start = new Point(basex,basey);

// Move to start and draw a line from there
//path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
// path.lineTo(start + [ 100, -50 ]);
// var path2 = new Path.Circle({
//     center: view.center,
//     radius: 30,
//     strokeColor: 'black'
//});



var BB = new Path.Circle({
    center: start,
    radius: 4,
    fillColor: 'black'
});

var seattube = new Path.Line(start,start + [0,-seattube_length]);

var tt_end = new Point(seattube.lastSegment.point.x+toptube_length,seattube.lastSegment.point.y)
var toptube = new Path.Line(seattube.lastSegment.point,tt_end);

var ht_end = new Point(toptube.lastSegment.point.x,toptube.lastSegment.point.y+headtube_length-3);
var headtube = new Path.Line(toptube.lastSegment.point,ht_end);

var downtube = new Path.Line(start,headtube.lastSegment.point);

var cs_end = new Point(start.x-chainstay_hz_length,start.y-bb_drop);
var hz_chainstay = new Path.Line(start,cs_end);
var vt_chainstay = new Path.Line(seattube.lastSegment.point,cs_end);

var rearwheel = new Path.Circle(cs_end,wheelsize);
var frontwheel = new Path.Circle(cs_end + [wheelbase,0],wheelsize);

var fork = new Path.Line(frontwheel.interiorPoint,ht_end);

var stem = new Path.Line(tt_end,tt_end - [0,stem_height]);
var stem_offset = new Path.Line(stem.lastSegment.point,stem.lastSegment.point +[stem_length,0]);

var handlebars = new Path.Arc(stem_offset.lastSegment.point,stem_offset.lastSegment.point + [5,5],stem_offset.lastSegment.point + [-3,12]);
