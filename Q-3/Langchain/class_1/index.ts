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
// const text=` The day my daughter died, I became the villain of my own life story.

// When your child dies of cancer, there are fundraisers and flower delivery vans and friends taking shifts sitting up with you through the long black nights and washing your hair.

// When your child dies and it’s your fault, there are no homemade casseroles filling your freezer, no one to hold your hair back as acrid vomit wracks your body through the early morning hours, bilious and yellow from the lack of meal trains organized on your behalf.

// There are half-hearted assurances and crepe-thin oaths that you did nothing wrong, but no one holds your hand as you trudge, desperate and empty, behind a too-small casket, upturned palms wretchedly empty `
// // step:-1  const prompt=`nutshell the ${text}`;
// // step 2 
// const prompt = `Generate a list of three made-up book titles along \ 
// with their authors and genres. 
// Provide them in JSON format with the following keys: 
// book_id, title, author, genre.`
// const text = `
// Making a cup of tea is easy! First, you need to get some \ 
// water boiling. While that's happening, \ 
// grab a cup and put a tea bag in it. Once the water is \ 
// hot enough, just pour it over the tea bag. \ 
// Let it sit for a bit so the tea can steep. After a \ 
// few minutes, take out the tea bag. If you \ 
// like, you can add some sugar or milk to taste. \ 
// And that's it! You've got yourself a delicious \ 
// cup of tea to enjoy.
// `

// const prompt = `
// you will be provided with text delimited by triple quotes. 
// If it contains a sequence of instructions, \ 
// re-write those instructions in the following format:
// Step 1 - ...
// Step 2 - …
// …
// Step N - …

// into 9 step If the text does not contain a sequence of instructions, \ 
// then simply write "No steps provided."

// """${text}"""
// `
// // -------------------------------------step-4----------------
// // const text = `
// // The sun is shining brightly today, and the birds are \
// // singing. It's a beautiful day to go for a \ 
// // walk in the park. The flowers are blooming, and the \ 
// // trees are swaying gently in the breeze. People \ 
// // are out and about, enjoying the lovely weather. \ 
// // Some are having picnics, while others are playing \ 
// // games or simply relaxing on the grass. It's a \ 
// // perfect day to spend time outdoors and appreciate the \ 
// // beauty of nature.
// // `

// // const prompt = `
// // ou will be provided with text delimited by triple quotes. 
// // If it contains a sequence of instructions, \ 
// // re-write those instructions in the following format:

// // Step 1 - ...
// // Step 2 - …
// // …
// // Step N - …

// // If the text does not contain a sequence of instructions, \ 
// // then simply write "No steps provided."

// // """${text}"""
// // `
// -----------------------------------step -4 --------------------------------
// train the model 
// const text = `
// In a charming village, siblings Jack and Jill set out on \ 
// a quest to fetch water from a hilltop \ 
// well. As they climbed, singing joyfully, misfortune \ 
// struck—Jack tripped on a stone and tumbled \ 
// down the hill, with Jill following suit. \ 
// Though slightly battered, the pair returned home to \ 
// comforting embraces. Despite the mishap, \ 
// their adventurous spirits remained undimmed, and they \ 
// continued exploring with delight.
// `

// const prompt = `
// Perform the following actions: 
// 1 - Summarize the following text delimited by triple \
// quotes with 1 sentence.
// 2 - Translate the summary into French.
// 3 - List each name in the French summary.
// 4 - Output a json object that contains the following \
// keys: french_summary, num_names.

// Separate your answers with line breaks.

// Text:
// """${text}"""
// `
// ----------------------Step-5 ----------------------------------------------------
// const prompt = `
// Your task is to determine if the student's solution \
// is correct or not.
// To solve the problem do the following:
// - First, work out your own solution to the problem. 
// - Then compare your solution to the student's solution \ 
// and evaluate if the student's solution is correct or not. 
// Don't decide if the student's solution is correct until 
// you have done the problem yourself.

// Use the following format:
// Question:
// """
// question here
// """
// Student's solution:
// """
// student's solution here
// """
// Actual solution:
// """
// steps to work out the solution and your solution here
// """
// Is the student's solution the same as actual solution \
// just calculated:
// """
// yes or no
// """
// Student grade:
// """
// correct or incorrect
// """

// Question:
// """
// I'm building a solar power installation and I need help \
// working out the financials. 
// - Land costs $100 / square foot
// - I can buy solar panels for $250 / square foot
// - I negotiated a contract for maintenance that will cost \
// me a flat $100k per year, and an additional $10 / square \
// foot
// What is the total cost for the first year of operations \
// as a function of the number of square feet.
// """
// Student's solution:
// """
// Let x be the size of the installation in square feet.
// Costs:
// 1. Land cost: 100x
// 2. Solar panel cost: 250x
// 3. Maintenance cost: 100,000 + 100x
// Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
// """
// Actual solution:
// ` 
// a thing which is not exists in real world is known as hallucinations--------------------------------
const text = `
OVERVIEW
- Part of a beautiful family of mid-century inspired office furniture, 
including filing cabinets, desks, bookcases, meeting tables, and more.
- Several options of shell color and base finishes.
- Available with plastic back and front upholstery (SWC-100) 
or full upholstery (SWC-110) in 10 fabric and 6 leather options.
- Base finish options are: stainless steel, matte black, 
gloss white, or chrome.
- Chair is available with or without armrests.
- Suitable for home or business settings.
- Qualified for contract use.

CONSTRUCTION
- 5-wheel plastic coated aluminum base.
- Pneumatic chair adjust for easy raise/lower action.

DIMENSIONS
- WIDTH 53 CM | 20.87”
- DEPTH 51 CM | 20.08”
- HEIGHT 80 CM | 31.50”
- SEAT HEIGHT 44 CM | 17.32”
- SEAT DEPTH 41 CM | 16.14”

OPTIONS
- Soft or hard-floor caster options.
- Two choices of seat foam densities: 
 medium (1.8 lb/ft3) or high (2.8 lb/ft3)
- Armless or 8 position PU armrests 

MATERIALS
SHELL BASE GLIDER
- Cast Aluminum with modified nylon PA6/PA66 coating.
- Shell thickness: 10 mm.
SEAT
- HD36 foam

COUNTRY OF ORIGIN
- Italy
`
const prompt = `
fact_sheet_chair = """
OVERVIEW
- Part of a beautiful family of mid-century inspired office furniture, 
including filing cabinets, desks, bookcases, meeting tables, and more.
- Several options of shell color and base finishes.
- Available with plastic back and front upholstery (SWC-100) 
or full upholstery (SWC-110) in 10 fabric and 6 leather options.
- Base finish options are: stainless steel, matte black, 
gloss white, or chrome.
- Chair is available with or without armrests.
- Suitable for home or business settings.
- Qualified for contract use.

CONSTRUCTION
- 5-wheel plastic coated aluminum base.
- Pneumatic chair adjust for easy raise/lower action.

DIMENSIONS
- WIDTH 53 CM | 20.87”
- DEPTH 51 CM | 20.08”
- HEIGHT 80 CM | 31.50”
- SEAT HEIGHT 44 CM | 17.32”
- SEAT DEPTH 41 CM | 16.14”

OPTIONS
- Soft or hard-floor caster options.
- Two choices of seat foam densities: 
 medium (1.8 lb/ft3) or high (2.8 lb/ft3)
- Armless or 8 position PU armrests 

MATERIALS
SHELL BASE GLIDER
- Cast Aluminum with modified nylon PA6/PA66 coating.
- Shell thickness: 10 mm.
SEAT
- HD36 foam

COUNTRY OF ORIGIN
- Italy
Text:
"""${text}"""
`

main(prompt);
