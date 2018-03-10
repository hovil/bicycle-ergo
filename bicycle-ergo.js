var seattube_length = 58;
var toptube_length = 55;
var headtube_length = 14;
var chainstay_hz_length = 41;
var chainstay_vt_length = 52;
var wheelbase = 105;
var bb_drop = 8;
var seat_height = 5;
var handlebar_stemheight =10;
var handlebar_stemlength = 12;
var seat_stemheight = 10;
var seat_stemoffset = 2;
var crank_length = 16.5;
var wheelsize = 31;

project.currentStyle = {
    strokeColor: 'black',
    strokeWidth: 3
};

var basex = 100;
var basey = 100;

//Anchor point
var start = new Point(basex,basey);

var BB = new Path.Circle({
    center: start,
    radius: 4,
    fillColor: 'black'
});

// Main triangle
var seattube_end = new Point(start+[0,-seattube_length]);
var seattube = new Path.Line(start,start + [0,-seattube_length]);
var tt_end = new Point(seattube.lastSegment.point.x+toptube_length,seattube.lastSegment.point.y)
var toptube = new Path.Line(seattube.lastSegment.point,tt_end);
var ht_end = new Point(toptube.lastSegment.point.x,toptube.lastSegment.point.y+headtube_length-3);
var headtube = new Path.Line(toptube.lastSegment.point,ht_end);
var downtube = new Path.Line(start,headtube.lastSegment.point);

// Seat
var seat = new Point(seattube_end + [0, - seat_stemheight]);
var seat_stem = new Path.Line(seattube.lastSegment.point,seat);

// Rear chainstay
var cs_end = new Point(start.x-chainstay_hz_length,start.y-bb_drop);
var hz_chainstay = new Path.Line(start,cs_end);
var vt_chainstay = new Path.Line(seattube.lastSegment.point,cs_end);

// Wheels
var rearwheel = new Path.Circle(cs_end,wheelsize);
var frontwheel = new Path.Circle(cs_end + [wheelbase,0],wheelsize);

// Front Fork
var fork = new Path.Line(frontwheel.interiorPoint,ht_end);

// Handlebars
var handlebar_stem = new Path.Line(tt_end,tt_end - [0,handlebar_stemheight]);
var handlebar_stemoffset = new Path.Line(handlebar_stem.lastSegment.point - [2,0] ,handlebar_stem.lastSegment.point +[handlebar_stemlength,0]);
var handlebars = new Path.Arc(handlebar_stemoffset.lastSegment.point,handlebar_stemoffset.lastSegment.point + [5,5], handlebar_stemoffset.lastSegment.point + [-3,12]);
