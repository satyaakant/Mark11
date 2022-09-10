 var dateofBirth = document.querySelector("#date-of-birth");
 var luckynum = document.querySelector("#lucky-num");
 var checkBtn = document.querySelector("#check-btn");
 var output = document.querySelector("#message");
 checkBtn.addEventListener('click',checkBirthdayisLucky);
 function checkBirthdayisLucky(){
    output.style.display="none"
    const dob=dateofBirth.value;
    const sum=calculatesum(dob);
    const luckynumber=luckynum.value
    if(sum&&dob)
    compareValue(sum,luckynumber);
    else{
    output.innerText="Atleast enter the values 🤷‍♂️";
    output.style.display="block"
    }
 }
function calculatesum(dob){
    dob= dob.replaceAll("-"," ");
    let sum=0;
    for(let i=0 ; i<dob.length ; i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;

}
function compareValue(sum,luckynumber){
    if(sum%luckynumber===0){
        output.innerText="Your Birthday is lucky 🥳";
        output.style.display="block"
    }
    else{
        output.style.display="block"
        output.innerText="Your Birthday is not lucky 😞";
    }
}