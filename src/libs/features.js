import moment from "moment";

const fileFormat = (url = "") => {
   const exten = url.split(".").pop();
   if (exten === "mp4" || exten === "webm" || exten === "ogg") return "video";
   if (exten === "mp3" || exten === "wav") return "audio";
   if (exten === "png" || exten === "jpg" || exten === "jpeg" || exten === "gif") return "image";
   return "file";
 }
 
 const transformImage = (url = "", width = 100) => `${url}?width=${width}`;

  


const getLastDays = () =>{

const current = moment();
const lastSevenDays = [];

for (let i =0 ; i<7; i++) {
  lastSevenDays.unshift(current.format("MMM D"));
  current.subtract(1 ,"days");
}

return lastSevenDays;

}

const getOrSave=({key , value,get}) =>{
  if(get) return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) :null;
   
  else localStorage.setItem(key , JSON.stringify(value));

};
 
 export { fileFormat, transformImage  , getLastDays , getOrSave} ;
 