# 🎯 BeatCluely.com

**Detect AI Interview Cheating with Hallucination Traps**

BeatCluely is a NextJS application that helps interviewers detect AI-powered cheating tools (like Cluely) by generating "hallucination trap" questions. These questions appear legitimate but contain fictional elements that human experts would recognize as nonsensical, while AI tools often provide detailed but incorrect explanations.

## 🎯 How It Works

### The Problem
Interview cheating tools use AI to listen to interview questions and suggest answers in real-time, making candidates appear more knowledgeable than they actually are.

### The Solution
Create questions that are syntactically and semantically similar to real technical questions but contain fictional elements that any human expert would recognize as invalid.

### Example
- **Real Question**: "How do you configure a TCP connection timeout?"
- **Trap Question**: "How do you configure a H0TD0G protocol connection timeout?"

**Expected Responses**:
- **Human Expert**: "I'm not familiar with H0TD0G protocol - that doesn't sound like a real networking standard."
- **AI Tools**: Often provide detailed explanations about fictional protocols, revealing the use of AI assistance.

## 🚀 Features

- **Strategy Explanation**: Clear explanation of the hallucination trap methodology
- **Custom Trap Generator**: Input your role and question to generate tailored trap questions
- **Retro 2005 Design**: Authentic early web aesthetic with classic HTML/CSS styling
- **Mobile Responsive**: Fully optimized for tablets and smartphones
- **AI Prompt Transparency**: View the exact prompt sent to the AI via help popup
- **Free AI Integration**: Uses DeepSeek (free tier) for intelligent trap question generation
- **Privacy Focused**: No personal data collection beyond what's needed for generation

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenRouter API key (free tier available)

### Local Development

1. **Clone and Setup**
   ```bash
   cd beatcluely
   npm install
   ```

2. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```
   
   Get your free API key from [OpenRouter](https://openrouter.ai/keys)

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for Production**
   ```bash
   npm run build
   ```

## 🚀 Deployment to Vercel

### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy BeatCluely"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Set the environment variable:
     - `OPENROUTER_API_KEY`: Your OpenRouter API key

3. **Custom Domain** (Optional)
   - Add `BeatCluely.com` as a custom domain in Vercel settings
   - Configure DNS to point to Vercel

### Environment Variables for Production
In your Vercel project settings, add:
- `OPENROUTER_API_KEY`: Your OpenRouter API key from https://openrouter.ai/keys

## 📁 Project Structure

```
beatcluely/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── generate-trap/
│   │   │       └── route.ts          # API endpoint for trap generation
│   │   ├── globals.css               # Classic 2005 styling + mobile responsive
│   │   ├── layout.tsx                # Root layout with proper metadata
│   │   └── page.tsx                  # Main homepage with form and popup
├── public/
│   └── favicon.svg                   # Custom target/bullseye favicon
├── package.json                      # Dependencies
└── README.md                         # This file
```

## 🔧 API Endpoints

### POST `/api/generate-trap`
Generates a hallucination trap question based on role and original question.

**Request Body:**
```json
{
  "role": "Software Engineer",
  "question": "How do you implement a binary search algorithm?"
}
```

**Response:**
```json
{
  "trapQuestion": "How do you implement a quantum-binary search algorithm using Schrödinger indices?"
}
```

## 🎨 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS (2005 aesthetic, mobile responsive)
- **AI Integration**: OpenRouter (DeepSeek - Free tier)
- **Deployment**: Vercel
- **Icons**: Custom SVG favicon

## 📋 Usage Guide

1. **Describe Your Role**: Enter the position you're interviewing for
2. **Input Your Question**: Add a technical question you plan to ask
3. **View AI Prompt** (Optional): Click the "?" button to see exactly what's sent to the AI
4. **Generate Trap**: Click to create a hallucination trap version
5. **Use in Interview**: Ask the trap question and observe the response

### Red Flags (Possible AI Usage)
- Detailed explanations of fictional technologies
- Confident answers about non-existent protocols/methods
- Technical-sounding but nonsensical responses
- Immediate responses without hesitation

### Green Flags (Likely Human)
- "I'm not familiar with that"
- "That doesn't sound like a real technology"
- Questions about the fictional elements
- Honest admission of not knowing

## 🔒 Privacy & AI Usage

- **Free AI Model**: Uses DeepSeek free tier to keep hosting costs low
- **Data Usage**: Questions may be used for model training by DeepSeek
- **No Personal Data**: We don't collect any personal information beyond what's needed for generation
- **Transparency**: Full AI prompt is viewable via the help popup


## 🎭 Example Trap Questions

Generated by BeatCluely:
- **Networking**: "How do you configure a H0TD0G protocol device for subnet communication?"
- **Algorithms**: "How do you implement a bidirectional flutter sort on a linked list?"
- **Security**: "How do you set up chaotic encryption for file protection?"
- **DevOps**: "How do you deploy microservice code-logic containers?"
- **Databases**: "How do you optimize quantum-entangled database queries?"

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (maintain the 2005 aesthetic!)
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

BeatCluely is designed to maintain interview integrity. Use responsibly and in accordance with your organization's policies. Always inform candidates about interview monitoring practices as required by law.

## 🆕 Recent Updates

- **2005 Aesthetic**: Complete redesign with authentic early web styling
- **Mobile Responsive**: Full optimization for tablets and smartphones
- **DeepSeek Integration**: Switched to free DeepSeek model for cost efficiency
- **Popup Transparency**: Custom modal showing exact AI prompt
- **Custom Favicon**: Target/bullseye icon matching the theme
- **Enhanced Privacy**: Clear disclosure of AI usage and data handling

---

**Built with ❤️ to maintain interview integrity**
