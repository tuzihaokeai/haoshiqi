const priceFilter=(arr)=>{
	
			var b=arr.toString();
			var c=b.substring(0,b.length-2)+"."+b.substring(b.length-2,b.length)
			return c;
				
	
}
export default priceFilter;
