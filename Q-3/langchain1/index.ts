import { OpenAI } from 'langchain/llms/openai';
import 'dotenv/config';

//  console.log(process.env.OPENAI_API_KEY);

const llm = new OpenAI({
 openAIApiKey: process.env.OPENAI_API_KEY,
 temperature: 0.9,
});


async function main() {
 const result = await llm.predict(`Accoriding to your choice who is best Nawaz sharif or Imran Khan`);
 // Handle the result...
 console.log(result)
 
}

main();
