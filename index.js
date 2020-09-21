var down = document.getElementById('result'); 
          
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

            /*formular to calculate the day i used 
            day = year_code + month_code + century_code + date_number -leap_year_code)%7
            */    
             
            var year_code = (yy+(yy/4))%7;
            
            var month_code;
            if(mm == 1){
                month_code=0;
            }
            else if(mm == 2 ){
                month_code=3;
            }
            else if(mm == 3 ){
                month_code=3;
            }
            else if(mm == 4 ){
                month_code=6;
            }
            else if(mm == 5 ){
                month_code=1;
            }
            else if(mm == 6 ){
                month_code=4;
            }
            else if(mm == 7 ){
                month_code=6;
            }
            else if(mm == 8 ){
                month_code=2;
            }
            else if(mm == 9 ){
                month_code=5;
            }
            else if(mm == 10 ){
                month_code=0;
            }
            else if(mm == 11){
                month_code=3;
            }
            else{
                month_code=5;
            }
            
            var century_code = (cc-18)%7;
            
            var day
            if( year % 100 !== 0 || year % 4 == 0){
                day = (year_code + month_code + century_code + dd -1) % 7;
            }
            if( year % 4 == 0 && Math.sqrt(year) == 0){
                day = (year_code + month_code + century_code + dd -1 ) % 7;
            }
            else{
                day = (year_code + month_code + century_code + dd) % 7;
            }

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

            down.innerHTML = 'Your AKAN name is ' +  akan;
        } 