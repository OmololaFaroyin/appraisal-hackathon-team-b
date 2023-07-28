export const isWorkspaceUserAnAdmin = (role:any) => {
   if (role === "SUPER_ADMIN") {
        // console.log("true")
    return true} 
   else if (role === "HYBRID_ADMIN") {
    // console.log("true")
    return true}
   else if(role === "TMS_ADMIN") {
    // console.log("false")
    return true}
   else if(role === "AMS_ADMIN") {
    // console.log("true")
    return true}
   else {
    // console.log("false")

    return false
   }

}