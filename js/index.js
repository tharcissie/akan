var down = document.getElementById('result1'); 
var downn = document.getElementById('result2'); 
          
        function calculate() { 
            var year = document.getElementById('year').value;
            var mm = document.getElementById('month').value; 
            var dd = document.getElementById('day').value; 
            var gender = document.getElementById('gender').value;  


            if( mm > 13 || mm <= 0 ) {
                alert( "Please provide a valid month!" );
                return false;
             }
            if( dd > 31 || mm <= 0 ) {
                alert( "Please provide a valid day!" );
                return false;
            }
            if( year == '' ) {
                alert( "Please provide a valid year!" );
                return false;
            }
            if( mm == '' ) {
                alert( "Please provide a valid month!" );
                return false;
            }
            if( dd == '' ) {
                alert( "Please provide a valid day!" );
                return false;
            }
             if( year >4 && year < 4 ) {
                alert( "Please provide a valid year!" );
                return false;
            }
  
            res = []; 
              
            for (var i = 0, len = year.length; i < len; i += 1) { 
                res.push(+year.charAt(i)); 
            }

            var y=0
            for (var i = 3; i>1 ; i--){
                y = 10 * y + res[i];
            }
            var yy=String(y).split("").reverse().join("");

            var cc=0;
            for (var i =0; i<2 ; i++){
                cc = 10 * cc + res[i];
                }

            var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
            day = Math.floor(day);    
            
            

            var akan;
            if( gender == 'Female'){
                if( day == 1){
                    akan = 'Adwoa';
                }
                else if( day == 2){
                    akan = 'Abenaa';
                }
                else if( day == 3){
                    akan = 'Akua';
                }
                else if( day == 4){
                    akan = 'Yaa';
                }
                else if( day == 5){
                    akan = 'Afua';
                }
                else if( day == 6){
                    akan = 'Ama';
                }
                else {
                    akan = 'Akosua';
                }
               
            }

            else {
                if( day == 1){
                    akan = 'Kwadwo';
                }
                else if( day == 2){
                    akan = 'kwabena';
                }
                else if( day == 3){
                    akan = 'Kwaku';
                }
                else if( day == 4){
                    akan = 'Yaw';
                }
                else if( day == 5){
                    akan = 'Kofi';
                }
                else if( day == 6){
                    akan = 'Kwame';
                }
                else {
                    akan = 'Kwasi';
                }
               
            }

            if (day==1){
                name='Monday';
            }
            else if(day==2){
                name='Tursday';
            }
            else if(day==3){
                name='Wednesday';
            }
            else if(day==4){
                name='Thursday';
            }
            else if(day==5){
                name='Friday';
            }
            else if(day==6){
                name='Saturday';
            }
            else {
                name='Sunday';
            }

            down.innerHTML = name;
            downn.innerHTML =  akan;

            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
        }
