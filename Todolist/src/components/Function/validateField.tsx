export const validateField = (dateString:string) => {
    if(dateString) {
      const date=new Date(dateString);
      const time=date.getTime();
      if(time<new Date().getTime()){
        return 'Time Expired'
      }
    };
  }  