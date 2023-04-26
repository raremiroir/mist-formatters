// Capitalization
export const textCapitalize = {
   first: (str:string) => { // Capitalize the first letter of a string
      return str.charAt(0).toUpperCase() + str.slice(1);
   },
   all: (str: string) => { // Capitalize the first letter of each word in a string
	   return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
   }
}

