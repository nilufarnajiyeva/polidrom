            // function polindrom(_str) {
            //     var a,cem=0,yeni;
            //     var m=121;
            //     // yeni=m  
            //     while(m>0){
            //         a=m%10
            //         cem=(cem*10)+a;
            //         m/=10;
            //     }
            //     if(yeni===cem){
            //         alert("polindrom");
            //     }
            //     else{
            //         alert("polindrom  deyil")
            //     }
            // }
            // function polindrom(_reqem){

            // }
function polindrome(str) {


    var soz = string.length;


    for (let i = 0; i < soz / 2; i++) {


        if (string[i] !== string[soz - 1 - i]) {
            alert('polindrom deyil');
        }
    }
    alert('polindromdu');
}


var string = prompt('eded daxil et: ');

var value = polindrome(string);