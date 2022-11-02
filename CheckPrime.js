function CheckPrime(number){
	count=0;
	for (i=1;i<=number;i++){
		if (number%i==0){
			count++
		}	
	}
	if (count==2){
		return true;
	}
	return false;	
}


ans = CheckPrime(13);
if (ans==true){
      console.log("Prime")
}else{
      console.log("Not Prime")
}