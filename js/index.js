
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
        // notification message
        document.getElementById('depositAlart').style.display='block';
        document.getElementById('errorAlart').style.display='none';
        document.getElementById('withdrawAlart').style.display='none';
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
            // notification message
            document.getElementById('errorAlart').style.display='block';
            document.getElementById('depositAlart').style.display='none';
            document.getElementById('withdrawAlart').style.display='none';
        }
        else{
            // withdraw amount
            currentWithdraw.innerText=totalWithdraw;
            // update balance
            currentBalance.innerText=totalBalance;
            // notification message
            document.getElementById('errorAlart').style.display='none';
            document.getElementById('depositAlart').style.display='none';
            document.getElementById('withdrawAlart').style.display='block';
        }     
        withdawAmount.value='';
    }
}