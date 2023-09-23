import { OpenAI } from 'langchain/llms/openai';
import 'dotenv/config';

//  console.log(process.env.OPENAI_API_KEY);

const llm = new OpenAI({
 openAIApiKey: process.env.OPENAI_API_KEY,
 temperature: 0.9,
});

async function main(prompt: string) {
 const result = await llm.predict(`${prompt}`);
 // Handle the result...
 console.log(result)
}
const text=` The day my daughter died, I became the villain of my own life story.

When your child dies of cancer, there are fundraisers and flower delivery vans and friends taking shifts sitting up with you through the long black nights and washing your hair.

When your child dies and it’s your fault, there are no homemade casseroles filling your freezer, no one to hold your hair back as acrid vomit wracks your body through the early morning hours, bilious and yellow from the lack of meal trains organized on your behalf.

There are half-hearted assurances and crepe-thin oaths that you did nothing wrong, but no one holds your hand as you trudge, desperate and empty, behind a too-small casket, upturned palms wretchedly empty `
const prompt=`nutshell the ${text}`;
main(prompt);
