export const checkValiData =(email,password)=>{
   const isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   const ispasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if(!isemailValid) return "please enter valid email";
   if(!ispasswordValid) return "please enter valid password";

   return null;
}