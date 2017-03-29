 	const Myfilter=(data)=>{
 		console.log(data);
        
 		if(data){
 			
 			
 			
 			let newString = data.toString()
 			//frjeskn
 			
	 		let number = newString.indexOf(".")
	 		
	 		return newString.slice(0,number+3)

 		}
    }

export default Myfilter