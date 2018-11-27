
// DATA DOWNLOADED FROM:
// http://geodados.cm-lisboa.pt/datasets/circuitoscontentores

// **********************************
//             MODALS              //
// **********************************

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).on('load',function(){
    $('#StartModalLong').modal('show');
});

// **********************************
//                MAP              //
// **********************************

// Map center

var centerMap =[38.732393,-9.170408]; // LISBON CENTER
// var centerMap =[38.748779,-9.191700]; // MY CENTER
var zoomMap= 14;
var map = L.map('my-map').setView(centerMap, zoomMap);

// Tutorial to add google layers and style:
// https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant
// style google map:
// https://developers.google.com/maps/documentation/javascript/styling
// https://mapstyle.withgoogle.com/

var googlestyle = L.gridLayer.googleMutant({
    type: 'roadmap',
    styles:
    [
          {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
          },
          {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
          },
          {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
          },
          {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
          },
          {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
          },
          {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
          },
          {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
          },
          {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
          },
          {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
          },
          {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
          },
          {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
          },
          {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
          },
          {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
          },
          {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
          },
          {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
          },
          {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
          },
          {
          "featureType": "water",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
          },
          {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
          },
          {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
          }
          ]
}).addTo(map);

// Get user location
// https://github.com/domoritz/leaflet-locatecontrol

L.control.locate().addTo(map);

// **********************************
// Define arrays of style options //
// **********************************

//                       0          1         2         3         4         5          6         7         8         9
var PerColorArray 	  = ['#C71585','#FF6347','#DDA0DD','#7B68EE','#808080','#B0E0E6','#40E0D0','#87CEEB','#6495ED', '#4169E1'];

const GetColorPer = function(per) {
  switch(per) {
    case "0.25":            return {color: PerColorArray[0]};
    case "0.5":             return {color: PerColorArray[1]};
    case "7":               return {color: PerColorArray[2]};
    case "6":               return {color: PerColorArray[3]};
    case "NA":              return {color: PerColorArray[4]};
    case "1":               return {color: PerColorArray[5]};
    case "2":               return {color: PerColorArray[6]};
    case "3":               return {color: PerColorArray[7]};
    case "4":               return {color: PerColorArray[8]};
    case "5":               return {color: PerColorArray[9]};
  }
}

// **********************************
// Define popup content            //
// **********************************

function onEachFeature (feature,layer) {
  var popup=layer.bindPopup(`
    <b style='font-size: 120%'>Type of garbage:</b> ${feature.properties.det}<br/>
    <b style='font-size: 120%'>Periodicity: </b> ${feature.properties.per} times a week
  `)
}

// **********************************
// Define style functions          //
// **********************************

function PMCStyle(feature) {
  return {
    weight: 0,
    opacity: 0.8,
    fillOpacity: 0.3,
    fillColor: '#9ACD32',
    radius: 4
  };
}

// **********************************
//           ADD LAYERS            //
// **********************************

// each layer must be added to a variable that will be included
// in the layer control

var pmc = L.geoJson(pmcvar, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng)
  },
  style: PMCStyle,
  onEachFeature: onEachFeature
}).addTo(map)
