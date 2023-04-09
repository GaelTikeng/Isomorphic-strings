
	// Javascript function to check if two
	// strings are isomorphic
	
	let size = 256; // inintialize the maximum number of characters in a string
	
	function Isomorphicstring(string1, string2)
	{
		
		let x = string1.length
		let y = string2.length
		
		if(x != y)
			return false
			
		// seen characters in str2
		let seen = new Array(size)
		
		for(let i = 0; i < size; i++)
			seen[i]= false
		
		let map = new Array(size)
		map.fill(0); // fill the map with 0s
		
		for(let i = 0; i < size; i++)
			map[i]= -1
	
		// go through all characters of the string one by one
		for (let i = 0; i < y; i++)
		{
			
			if (map[string1[i].charCodeAt()] == -1)
			{
				
				if (seen[string2[i].charCodeAt()] == true)
					return false

				// Mark current character of
				// string2 as visited
				seen[string2[i].charCodeAt()] = true

				// Store mapping of current characters
				map[string1[i].charCodeAt()] = string2[i].charCodeAt()
			}

			else if (map[string1[i].charCodeAt()] != string2[i].charCodeAt())
				return 0
		}

		return 1
	}
	
	let res = Isomorphicstring("aab", "xxy")
	console.log(res)

	res = Isomorphicstring("aab", "xyz")
	console.log(res)
