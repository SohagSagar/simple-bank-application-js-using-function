
function depositBtn(){
   var depositeAmount=document.getElementById('depositAmount');
   var currentDeposit=document.getElementById('currentDeposit');
   var currentBalance=document.getElementById('currentBalance');

   function addMoney(currentAmount,newAmount){
        return Number(currentAmount)+Number(newAmount);
   }
    
    if(typeof(depositAmount.value)!=Number && depositAmount.value>0){
        // update deposit
        var totalDeposit=addMoney(currentDeposit.innerText, depositAmount.value)
        currentDeposit.innerText=totalDeposit;
        // update balance
        var totalBalance=addMoney(currentBalance.innerText,depositAmount.value);
        console.log(totalBalance);
        currentBalance.innerText=totalBalance;
        depositeAmount.value='';
    }
}
function withdawBtn(){
    var currentWithdraw=document.getElementById('currentWithdaw');
    var withdawAmount=document.getElementById('widrawAmount');
    var currentBalance=document.getElementById('currentBalance');

    function getMoney(currentAmount,newAmount,status){
        if(status==true){
            return Number(currentAmount)+Number(newAmount);
        }
        if(status==false){
            return Number(currentAmount)-Number(newAmount);
        }
    }
    if(typeof(withdawAmount.value)!=Number && withdawAmount.value>0){
        
        var totalWithdraw=getMoney(currentWithdraw.innerText,withdawAmount.value,true);
        var totalBalance=getMoney(currentBalance.innerText,withdawAmount.value,false);
        // debugger;
        if((totalBalance<0 && totalBalance<totalWithdraw)){
            document.getElementById('alart').removeAttribute('hidden');
        }
        else{
            // withdraw amount
            currentWithdraw.innerText=totalWithdraw;
            // update balance
            currentBalance.innerText=totalBalance;
        }     
        withdawAmount.value='';
    }
}