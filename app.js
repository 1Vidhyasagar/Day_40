function datetime(){
    let dt=new Date().getTime();
    let date=("0"+ dt.getDate()).slice(-2);
    let hours=dt.getHours();
    let minutes=dt.getMinutes();
    let seconds=dt.getseconds();
    var output=date+hours+":"+minutes+":"+seconds;
    return output;
}
module.exports={datetime}