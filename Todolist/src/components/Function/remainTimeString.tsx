export function remainTimeString(dateString:string) {
    const pickedDate=new Date(dateString);
    const now=new Date();
    let value:string='';
    let year=pickedDate.getFullYear()-now.getFullYear()
    let month=pickedDate.getMonth()-now.getMonth()
    const daysInMonth=new Date(now.getFullYear(),now.getMonth(),0).getDate()
    let day=pickedDate.getDate()-now.getDate()
    let hour=pickedDate.getHours()-now.getHours()
    let minute=pickedDate.getMinutes()-now.getMinutes()-1
    const second=60-now.getSeconds()
    if(minute<0){
        minute+=60;
        hour--;
    }
    if(hour<0){
        hour+=24;
        day--;
    }
    if(day<0){
        month--;
        day+=daysInMonth;
    }
    if(month<0){
        month+=12;
        year--;
    }
    if(year!=0){
        value+=String(year)+'Y:'+String(month)+'M:'+String(day)+'D ';
    }else{
        if(month!=0){
            value+=String(month)+'M:'+String(day)+'D ';
        }else{
            if(day!=0){
                value+=String(day)+'D ';
            }
        }
    }
    value+=String(hour).padStart(2,'0');
    value+=':'+String(minute).padStart(2, '0');
    value+=':'+String(second).padStart(2,'0');
    return value;
}