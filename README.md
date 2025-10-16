## 🚀 Project Overview

### 🧠 Task A — API Integration
A simple, responsive web interface that integrates with the **Google Gemini 2.0 Flash API**.  
Users can type a prompt or question, send it to the API, and view the model’s generated response in real time.

### 🎨 Task B — Reusable UI Components
Two standalone components created for flexibility and reusability:
1. **Blur Text Component** — Text initially appears blurred and becomes sharp on hover or via a prop.
2. **Custom Link Component** — Styled link with smooth hover transitions and configurable options.

---

## 🛠️ Tech Stack

| Category | Tools / Frameworks |
|-----------|--------------------|
| Frontend | React.js, HTML, CSS, JavaScript |
| API | Google Generative Language API (Gemini 2.0 Flash) |
| Styling | Pure CSS |
| Build Tool | Create React App |
| Deployment | Vercel / Netlify (optional) |

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

git clone https://github.com/Karthi-47/gemini-api-task.git
cd gemini-api-task

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Configure Environment Variables

Create a file named .env.local in the root folder and add your Gemini API key:

REACT_APP_GEMINI_KEY=your_api_key_here


⚠️ Do not commit this file.
Ensure .env.local is listed in .gitignore so your API key stays private.

### 4️⃣ Start the Application
npm start


The app will start on http://localhost:3000
.

### 🧩 Folder Structure
```
gemini-api-task/
│
├── public/
│   ├── index.html
│
├── src/
│   ├── components/
│   │   ├── BlurText.js
│   │   └── CustomLink.js
│   ├── App.js
│   ├── index.js
│
├── .env.local        # (Not committed)
├── .gitignore
├── package.json
└── README.md
```

### 💡 Approach & Implementation Details
#### 🔹 Task A — Gemini API Integration

Implemented using fetch() with a secure API key.

Prompt and response handled dynamically through React state.

Used loading spinner and error messages for better user experience.

Structured the request according to Gemini’s latest generateContent endpoint format.

Followed best practices to keep the API key secure using environment variables.

#### 🔹 Task B — Reusable UI Components
##### 1. BlurText Component

Displays text in a blurred state.

Becomes clear on hover or when a sharp prop is true.

CSS transitions for smooth blur effect.

##### 2. CustomLink Component

Styled anchor tag with hover transitions.

Accepts props like text, url, and color.

Demonstrates component reusability and dynamic styling.
' fix and give me the code