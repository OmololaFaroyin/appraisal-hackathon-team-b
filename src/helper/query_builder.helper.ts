/**
 * Helper to concat query param object into a string
 * 
 * @param query - Query param as object with keys & value
 * @descriptions {searchText: 'value'} => ?searchText=value 
 * @returns {string}
 */
 export const queryBuilder = (query?: { [key: string]: any }) => {
  if(!query) return ''
 let extraQueryParam = '';
 let name = (_name: string) => `&${_name}=`;
 for (let key of Object.keys(query || {})) {
   extraQueryParam =
     extraQueryParam +
     `${
       typeof query[key] == 'object'
         ? Object.keys(query[key] || {}).length
           ? name(key) + JSON.stringify(filterEmptyProperties(query[key]))
           : ''
        : typeof query[key] === 'undefined' || query[key] === "" || query[key]===null
        ? ''
         : name(key) + query[key]
     }`;
 }
 return `?${extraQueryParam.substring(1)}`;
};

/**
* Filters object properties that has null, undefined or empty string as thier value
* 
* @param obj - Target object
* @returns 
*/
export const filterEmptyProperties = (obj: {[_key:string]:any})=>{
 const _retObj: {[_key:string]:any} = {}
 for(let key in obj){
   if(typeof obj[key] === 'undefined' || obj[key] === "" || obj[key]===null){}
   else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])){
     obj[key] = filterEmptyProperties(obj[key])
   }
   else{_retObj[key] = obj[key]}
 }
 return _retObj
}