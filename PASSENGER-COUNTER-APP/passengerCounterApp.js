let getCount = document.getElementById('counter');
        let count = 0;
        function increment(){
            count++;
            getCount.innerHTML = count
        }
        
        function save(){
            // console.log(count)
            document.getElementById('pre-entries').innerHTML += " " + count + " - ";
            getCount.innerHTML = 0;
            count = 0;
        }