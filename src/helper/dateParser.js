import moment from "moment/moment";
import "moment/locale/en-gb";
moment.locale("en-gb");
const date = {
  parse: (date)=>{
    const parsed = moment(date).format("LLLL").split(",");
    let day = parsed[0];
    let eventDate = parsed[1].slice(0, -5);
    return `${day},${eventDate}`;
  },
  extract: (date)=>{
    let textArray = date.split("");
    textArray.length = 10;
    return textArray.join("");
  }
}
export {date};