export default {
  data(){
    return{
      format:  'YYYY-MM-DD',
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    }
  },
  methods: {
    parse (str) {
        var  result = "";
        if(str.length===4){
            var nowtime = new Date().getFullYear().toString().substring(2,4);
            str=nowtime+str
            for(var i=0;i<str.length;i++){
                result += str[i];
                if(i % 2 == 1) result += '-';
            }
            result='20'+result.substring(0,8);
        }else{
            for(var i=0;i<str.length;i++){
                result += str[i];
                if(i % 2 == 1) result += '-';
            }
            result='20'+result.substring(0,8);
        }
        var time = new Date(result);
        return isNaN(time.getTime()) ? null : time;
    },
    stringify (time) {
      var format = this.format;
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      var date = time.getDate();
      var monthName = this.months[time.getMonth()];
      var map = {
        YYYY: year,
        MMM: monthName,
        MM: ('0' + month).slice(-2),
        M: month,
        DD: ('0' + date).slice(-2),
        D: date
      };
      return format.replace(/Y+|M+|D+/g, function (str) {
        return map[str];
      });
    }
  }
};

