import OpenAI from "openai";
import { GPT_KEY } from "../utils/constants";
const openAi = new OpenAI({
  apiKey: GPT_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});
export default openAi;
