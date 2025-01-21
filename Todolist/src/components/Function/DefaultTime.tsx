export function defaultTime() {
    const date=new Date();
    let minutes=date.getMinutes();
    let days=date.getDate();
    let months=date.getMonth()+1;
    let year=date.getFullYear();
    const daysInMonth=new Date(year,months,0).getDate();
    let hours=date.getHours();
    if(minutes<30){
        minutes = 30;
    }else{
        if(hours==23){
            days++;
            if(days>daysInMonth){
                days=1;
                months++;
            }
            if(months>12){
                months=1;
                year++;
            }  
        }else{
            hours +=1;
        }
        minutes = 0;
    }
    if(hours<9){
        hours=9;
        minutes=0;
    }
    const month = String(months).padStart(2, '0');  
    const day = String(days).padStart(2, '0');
    const hour=String(hours).padStart(2, '0');
    const minute=String(minutes).padStart(2, '0');
    return `${year}-${month}-${day}T${hour}:${minute}+0700`;
}