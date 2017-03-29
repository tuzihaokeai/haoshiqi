 	const Myunique=()=>{
		
        
			var res=[];
			var json={};
			for(var j=0;j<this.length;j++){
				if(!json[this[i]]){
					res.push(this[i]);
					json[this[i]]=1
				}
			}
			return res

 		
    }

export default Myunique