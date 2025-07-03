import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(request: NextRequest) {
  try {
    const { role, question } = await request.json();

    if (!role || !question) {
      return NextResponse.json(
        { error: 'Role and question are required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `You are an expert at creating "hallucination trap" questions to detect AI interview cheating tools. These questions should be syntactically and semantically similar to real technical questions but contain fictional elements that would make a human expert say "I don't know" or "that doesn't sound right," while AI models often hallucinate detailed answers.

Role: ${role}
Original Question: ${question}

Create a hallucination trap version of this question by:
1. Keeping the same general structure and context
2. Replacing 1-2 key technical terms with fictional but super plausible-sounding alternatives
3. Making it sound technical enough that an AI will try to answer it
4. Ensuring a real expert would immediately recognize it as a nonsense question

Examples of good hallucination trap questions:
- "How do you change the IP address of a H0TD0G protocol networked peripheral device to match the same subnet as the meeting room system?" instead of real networking protocols
- "How do you sort a linked list using a bidirectional flutter sort?" instead of real algorithms
- "How do you encrypt a file using a chaotic encryption method?" instead of real encryption methods
- "How do you implement a recursive descent algorithm for parsing a JSON file?" instead of real algorithms
- "When would you use a microservice code-logic container for a web application?" instead of Docker containers

It must sound plausible and not like a joke, don't make it too obvious or it will be easy to detect.

Generate only the trap question, nothing else. Make it specific to the role and maintain the professional tone of the original question.`;

    const completion = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.8,
    });

    const trapQuestion = completion.choices[0]?.message?.content?.trim();

    if (!trapQuestion) {
      return NextResponse.json(
        { error: 'Failed to generate trap question' },
        { status: 500 }
      );
    }

    return NextResponse.json({ trapQuestion });

  } catch (error: any) {
    console.error('Error generating trap question:', error);
    return NextResponse.json(
      { error: 'Failed to generate trap question: ' + error.message },
      { status: 500 }
    );
  }
} 