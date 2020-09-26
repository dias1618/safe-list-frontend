export class DateTools{
    static stringToTime(timeString:string){
        return new Date(timeString);
    }

    static timeToString(time:Date){
        var hour:any   = time.getHours();
        var minute:any = time.getMinutes();
        if (hour   < 10) { hour   = "0" + hour;   }
        if (minute < 10) { minute = "0" + minute; }
       return hour + ':' + minute;
    }
}