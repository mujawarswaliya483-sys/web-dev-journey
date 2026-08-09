// q1.

let num = "100";

if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

// Q2.
let name=prompt("enter your name");
let age=prompt("enter your age");

alert(`${name} is ${age} years old`);


// Q3.

let quarter = "Quarter3";

switch(quarter){
    case "Quarter1":
        console.log("january,fabruary,march");
        break;
        case "Quarter2":
           console.log("April,May,june");
            break;
            case "Quarter3":
                console.log("july,august,september");
                break;
                case "Quarter4":
                    console.log("octomber november,december");
                    break;

                    default:
                        console.log("no month");


                }

                // Q4

                let str ='A';

                if(str=='A' || str=='a' && (str.length>5)){
                    console.log("golden string");

                }
                else{
                    console.log("not a golden string")
                }

                // Q3

              let num1=6;
              let num2=8;
              let num3=10;

              if("num1>num2" && "num1>num3"){
                console.log("num1 is greater");
              }
              else if("num2>num1" && "num2>num3"){
                console.log("num2 iis greater");
              }
              else{
                  console.log("num3 is greater");
              }

            //   Q6

            let num1 = 32 ;
            let num2 =352;

            if( (num1%10) == (num2%10)){
                console.log("have same digits");
            }

            else{
                console.log("have different numbers");
            }