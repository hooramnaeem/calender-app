// getting month
const monthElement=document.getElementById("month")
// getting day
const dayElement=document.getElementById("day")
// getting date
const dateElement=document.getElementById("date")
// getting year
const yearElement=document.getElementById("year")

const date=new Date();

const month=date.getMonth();
monthElement.innerHTML=date.toLocaleDateString("en",{
    month:"long",
});

dayElement.innerHTML=date.toLocaleDateString("en",{
    weekday:"long",
});

dateElement.innerHTML=date.getDate();

yearElement.innerHTML=date.getFullYear();