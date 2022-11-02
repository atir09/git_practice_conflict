function CheckPrime(number){
	factors=0;
	for (i=1;i<=number;i++){
		if (number%i==0){
			factors++
		}	
	}
	if (factors==2){
		return true;
	}
	return false;	
}

ans=CheckPrime(13)
if (ans==true){
	console.log('It is a Prime Number')
}else {
	console.log('It is Not a Prime Number')
}