# 🤖 Shifra AI

Shifra AI is a ready-to-deploy AI chatbot platform that enables businesses, startups, and website owners to integrate an intelligent conversational assistant into their websites with minimal setup.

The platform provides customizable chatbot widgets, AI-powered responses, website embedding capabilities, and a subscription-based monetization system powered by Razorpay.

## 🌐 Live Demo

🔗 **Live Application: https://shifraai-stdj.onrender.com/

---

## ✨ Features

- 🤖 AI-powered conversational chatbot
- 🌐 Easy website embedding
- 🎨 Customizable chatbot interface
- 🔐 Secure user authentication
- 💳 Subscription plans with Razorpay integration
- 📊 User dashboard and chatbot management
- ⚡ Real-time messaging experience
- 📱 Responsive design for desktop and mobile
- 🚀 SaaS-ready architecture

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Payments
- Razorpay Subscription Integration

### AI
- OpenAI API / Gemini API

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later)
- npm or yarn
- MongoDB
- Razorpay Account
- OpenAI/Gemini API Key

---

### 1. Clone the Repository

```bash
git clone https://github.com/Karan1845-coder/Shifra.git
cd Shifra
```

---

### 2. Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_openai_api_key
# OR
GEMINI_API_KEY=your_gemini_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

CLIENT_URL=http://localhost:3000
```

---

### 4. Start MongoDB

If running locally:

```bash
mongod
```

Or use a MongoDB Atlas connection string.

---

### 5. Run the Backend

```bash
cd server
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

---

### 6. Run the Frontend

```bash
cd client
npm start
```

Frontend will run on:

```bash
http://localhost:3000
```

---

### 7. Access the Application

Open your browser and visit:

```bash
http://localhost:3000
```

Create an account, choose a subscription plan, configure your chatbot, and start embedding it into your website.

---

## 🌐 Deployment

### Frontend

Deploy using:

- Vercel
- Netlify

### Backend

Deploy using:

- Render
- Railway
- AWS
- DigitalOcean

### Database

- MongoDB Atlas

---

## 🔌 Embedding Shifra AI

After creating your chatbot, copy the generated embed code and paste it before the closing `</body>` tag of your website:

```html
<script src="https://your-domain.com/widget.js"></script>
<script>
  Shifra.init({
    chatbotId: "YOUR_CHATBOT_ID"
  });
</script>
```

The chatbot will automatically appear on your website and start assisting visitors.

## 🚀 How It Works

1. User signs up on Shifra AI.
2. Selects a subscription plan.
3. Completes payment through Razorpay.
4. Creates and configures their chatbot.
5. Receives an embed script.
6. Adds the script to their website.
7. Visitors can interact with the AI chatbot directly on the website.

## 🎯 Use Cases

- Customer Support Automation
- Lead Generation
- FAQ Assistance
- E-commerce Support
- Educational Platforms
- SaaS Products
- Business Websites

## 🔮 Future Enhancements

- Multi-language support
- Analytics dashboard
- Chat history management
- Voice-enabled conversations
- CRM integrations
- Custom AI training on company data

## 👨‍💻 Author

Karan

GitHub: https://github.com/Karan1845-coder

---

⭐ If you find this project useful, consider giving it a star.
