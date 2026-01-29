import { GoogleGenerativeAI } from "@google/generative-ai";



const genAI = new GoogleGenerativeAI(import.meta.env.VITE_SECRET_KEY);

export default genAI;



