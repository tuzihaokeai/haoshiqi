 	const Myunique=()=>{
		
        
			var res=[];
			var json={};
			for(var j=0;j<this.length;j++){
				if(!json[this[j]]){
					res.push(this[j]);
					json[this[j]]=1
				}
			}
			return res

 		
    }

export default Myunique