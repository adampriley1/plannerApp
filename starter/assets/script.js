var currentDayDisplayEl = $('#currentDay');
//display current date

displayDate(); 

// handle displaying the time
function displayDate() {

//eusures current time updated ever second 
    setInterval(() => { 
        //gets current time 
       const now = dayjs(); 
       //format the time 
        const formattedTime = now.format('dddd, MMMM D'); 
        //text field displays formatted time 
        currentDayDisplayEl.text(formattedTime); 
    }, 1000); }


//gets the current hour from dayjs
    const nowHour = dayjs().format('H'); 

    //loop to go through each.time-block element
    
    $('.time-block').each(function() {
        $(this) 
        const elementHour = $(this).attr('data-hour')

        if (elementHour < nowHour) {
            $(this).addClass('past');
        }
        

        if (elementHour < nowHour) {
            $(this).addClass('present');
        }


        if (elementHour > nowHour) {
            $(this).attr('class','future')
        }
        
    });