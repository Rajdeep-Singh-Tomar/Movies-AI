import { GoogleGenerativeAI } from "@google/generative-ai";
import {SECRET_KEY} from './env';


const genAI = new GoogleGenerativeAI(SECRET_KEY);

export default genAI;



