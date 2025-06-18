// import translate from 'google-translate-api-x'; ❌ hapus dulu
import { askGemini } from './askGemini.js';
import { informationSpeed } from './infoSpeed.js';

function boldifyLabels(text) {
  const labels = ['Swing:', 'Intraday:', 'Entry', 'SL', 'TP'];
  labels.forEach(label => {
    const regex = new RegExp(`\\b(${label})`, 'gi');
    text = text.replace(regex, '**$1**');
  });
  return text;
}

function detectLanguage(messageText) {
  if (/[一-龥]/.test(messageText)) return 'zh-CN';
  if (/[ぁ-んァ-ン]/.test(messageText)) return 'ja';
  return 'en';
}

async function detectCategory(processedText, mainCategories) {
  const prompt = `
You are a helpful AI. Analyze the question: "${processedText}".
Identify the most accurate category from this list:
${mainCategories.join(', ')}.

- "ask about project" is for questions related to the project, such as tokenomics, partnerships, supply, liquidity, contract, etc.
- "ask bot" is for questions about the bot’s functions, features, issues, or settings.
- "proposal" is for messages offering services, help, collaborations, or new ideas.
- "others" is for messages that do not match any category above.
- "greeting" is for simple greetings like "hi", "hello", "good morning", or "hey".
- "compliment" is for messages praising the bot, project, or community.

If no category matches, return exactly "others". No explanations, just return the category.
  `;
  try {
    const result = await askGemini(prompt);
    return result.trim().toLowerCase();
  } catch (error) {
    console.error(`[CategoryDetect] Error:`, error.message);
    return 'others';
  }
}

export async function handleMSG1(messageText) {
  let processedText = messageText;
  detectLanguage(messageText); // hasilnya tidak dipakai, bisa dihapus jika tak digunakan

  const mainCategories = [
    'ask about project', 'ask bot', 'proposal',
    'others', 'greeting', 'compliment'
  ];

  const category = await detectCategory(processedText, mainCategories);
  let prompt = '';

  switch (category) {
    case 'ask about project':
    case 'ask bot':
      prompt = `Hey Gemini! 👋\nHere's some fun info about Bean project:\n${informationSpeed()}\nSomeone just asked: "${processedText}".\nPlease answer with clear and chill response (max 50 words). Thanks! 🌟`;
      break;
    case 'greeting':
      prompt = `They greeted: "${processedText}". Reply with excited and cheerful greeting (max 20 words).`;
      break;
    case 'compliment':
      prompt = `They complimented: "${processedText}". Reply with playful compliment back (max 20 words).`;
      break;
    case 'others':
      prompt = `Give a fun, positive, and playful answer that explains this clearly to a general audience: ${processedText}. Keep it under 250 words. Do not repeat the question.`;
      break;
  }

  try {
    let responMessage = '';
    if (prompt)
      responMessage = await askGemini(prompt);

    responMessage = boldifyLabels(responMessage);
    return responMessage || '...';
  } catch (e) {
    console.error('❌ Error generating response:', e.message);
    return 'Sorry, I couldn’t process that.';
  }
}
