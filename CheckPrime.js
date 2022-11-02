function CheckPrime(number){
	count=0;
	for (i=1;i<=number;i++){
		if (number%i){
			count++
		}	
	}
	if (count==2){
		return true;
	}
	return false;	
}


CheckPrime(13)