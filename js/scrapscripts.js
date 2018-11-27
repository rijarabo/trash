
//                       0          1         2         3         4

var TrashColorArray 	= ['#FFC300','#32CD32','#1E90FF','#808080','#A0522D'];
var TrashDescArray    = ['Plastic, metal and cardboard containers',
                          'Glass',
                          'Paper and cardboard',
                          'Organic, food scraps',
                          'General garbage']
// COLOR CODES AND VALUES:
// 0  pmc                    Plastic, metal and cardboard containers
// 1  glass                  Glass
// 2  pc                     Paper and cardboard
// 3  organic                Organic, food scraps
// 4  garbage                General garbage

//                       0          1         2         3         4         5           6
var DayColorArray 	  = ['#C71585','#FF6347','#DDA0DD','#FFD700','#7B68EE', '#3CB371', '#40E0D0'];
// COLOR CODES:          mon        tue       wed       thu       fri       sat         sun

//                       0          1         2         3         4         5          6         7         8         9
var PerColorArray 	  = ['#C71585','#FF6347','#DDA0DD','#7B68EE','#808080','#B0E0E6','#40E0D0','#87CEEB','#6495ED', '#4169E1'];

var PerDescArray      = ['Once a month',
                          'Every 2 weeks',
                          'Every Day',
                          'Every Day except Sunday',
                          'No information available',
                          'Once a week',
                          'Twice a week',
                          'Three times a week',
                          'Four times a week',
                          'Five times a week']

// COLOR CODES AND VALUES:
// 0    0.25  Once a month
// 1    0.5   Every 2 weeks
// 2    7     Every Day
// 3    6     Every Day except Sunday
// 4    NA    No information available
//
// 5    1     Once a week
// 6    2     Twice a week
// 7    3     Three times a week
// 8    4     Four times a week
// 9    5     Five times a week

var OpacityArray      = [0,          1];


function getColorTrash (s) {
  switch(s) {
    case 'pmc':             return {color: TrashColorArray[0], detail: TrashDescArray[0]};
    case 'glass'  :         return {color: TrashColorArray[1], detail: TrashDescArray[1]};
    case 'pc':              return {color: TrashColorArray[2], detail: TrashDescArray[2]};
    case 'garbage':         return {color: TrashColorArray[3], detail: TrashDescArray[3]};
    case 'organic':         return {color: TrashColorArray[4], detail: TrashDescArray[4]};
  }
}

// function getColorDay (s) {
//   switch(s) {
//     case '0.25':            return {color:PerColorArray[0], detail:PerDescArray[0]};
//     case '0.5':             return {color:PerColorArray[1], detail:PerDescArray[1]};
//     case '7':               return {color:PerColorArray[2], detail:PerDescArray[2]};
//     case '6':               return {color:PerColorArray[3], detail:PerDescArray[3]};
//     case 'NA':              return {color:PerColorArray[4], detail:PerDescArray[4]};
//     case '1':               return {color:PerColorArray[5], detail:PerDescArray[5]};
//     case '2':               return {color:PerColorArray[6], detail:PerDescArray[6]};
//     case '3':               return {color:PerColorArray[7], detail:PerDescArray[7]};
//     case '4':               return {color:PerColorArray[8], detail:PerDescArray[8]};
//     case '5':               return {color:PerColorArray[9], detail:PerDescArray[9]};
//   }
// }


function getColor (display) {
  switch(display) {
    case 'start':   return {color: ColorArray[0]};
    case 'end'  :   return {color: ColorArray[1]};
    case 'same' :   return {color: ColorArray[2]};
  }
}

function getColorDay (per) {
  switch(per) {
    case '0.25':            return {color: "#C71585"};
    case '0.5':             return {color: "#FF6347"};
    case '7':               return {color: "#DDA0DD"};
    case '6':               return {color: "#7B68EE"};
    case 'NA':              return {color: "#808080"};
    case '1':               return {color: "#B0E0E6"};
    case '2':               return {color: "#40E0D0"};
    case '3':               return {color: "#87CEEB"};
    case '4':               return {color: "#6495ED"};
    case '5':               return {color: "#4169E1"};
  }
}

//
// function getColorDay(s) {
//   return s ="0.25"  ? "#C71585" :
//          s ="0.5"   ? "#FF6347" :
//          s ="7"     ? "#DDA0DD" :
//          s ="6"     ? "#7B68EE" :
//          s ="NA"    ? "#808080" :
//          s ="1"     ? "#B0E0E6" :
//          s ="2"     ? "#40E0D0" :
//          s ="3"     ? "#87CEEB" :
//          s ="4"     ? "#6495ED" :
//                       "#4169E1" ;
// }

// var PerColorArray 	  = ['#C71585','#FF6347','#DDA0DD','#7B68EE','#808080','#B0E0E6','#40E0D0','#87CEEB','#6495ED', '#4169E1'];

// var PerArray          = ["0.25","0.5","7","6","NA","1","2","3","4","5"];

// function getColorDay(s) {
//   return s =PerArray[0] ? PerColorArray[0] :
//          s =PerArray[1] ? PerColorArray[1] :
//          s =PerArray[2] ? PerColorArray[2] :
//          s =PerArray[3] ? PerColorArray[3] :
//          s =PerArray[4] ? PerColorArray[4] :
//          s =PerArray[5] ? PerColorArray[5] :
//          s =PerArray[6] ? PerColorArray[6] :
//          s =PerArray[7] ? PerColorArray[7] :
//          s =PerArray[8] ? PerColorArray[8] :
//                           PerColorArray[9] ;
// }

// function PergetOpacity(s) {
//   return s ='pmc' ? OpacityArray[1] :
//                  OpacityArray[0] ;
// }

// function getOpacity2 (display) {
//   switch(display) {
//     case 'pmc':             return {opacity: OpacityArray[0]};
//     case 'glass'  :         return {opacity: OpacityArray[0]};
//     case 'pc':              return {opacity: OpacityArray[0]};
//     case 'garbage':         return {opacity: OpacityArray[0]};
//     case 'organic':         return {opacity: OpacityArray[0]};
//   }
// }
