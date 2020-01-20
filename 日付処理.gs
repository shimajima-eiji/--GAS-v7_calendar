var zeroPadding = function(num, digit) {
  if(digit > -1) digit *= -1;
  return ('0' + num).slice(digit);
}

var setDate = function(day) {
  const setWeek = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'Thursday',
    5: 'friday',
    6: 'saturday',
  }
  
  var object = new Date();
  object.setDate(object.getDate() + (day || 0));
  const result = {
    base: object,
    year: object.getFullYear(),
    month: zeroPadding(object.getMonth() + 1, 2),
    day: zeroPadding(object.getDate(), 2),
    hour: object.getHours(),
    minute: object.getMinutes(),
    second: object.getSeconds(),
    weeknum: object.getDay(),
    unixfull: object.getTime()
  };
  result.ym = '' + result.year + result.month;
  result.ymd = '' + result.ym + result.day;
  result.md = '' + result.month + result.day;
  result.hm = '' + result.hour + result.minute;
  result.hms = '' + result.hour + result.minute + result.second;
  result.ymdhm = '' + result.ymd + result.hm;
  result.ymdhms = '' + result.ymd + result.hms;
  result.week = i18n().getWeek()[setWeek[result.weeknum]];
  result.unix = Math.floor( result.unixfull / 1000 );
  return result;
}
