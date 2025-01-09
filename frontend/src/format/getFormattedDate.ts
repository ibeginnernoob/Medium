
export default function getFormattedDate(crypticDate:string){
    const date = new Date(crypticDate);
    const day = date.getDate();
    const suffix = (day % 10 === 1 && day !== 11) ? 'st' : 
                    (day % 10 === 2 && day !== 12) ? 'nd' :
                    (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    return `${day}${suffix} ${date.toLocaleString('en-US', {month: 'long'})}, ${date.getFullYear()}`
}