# S. Dhivyaloshni — AI & Data Science Engineering Portfolio

A cinematic, high-contrast, recruiter-focused personal portfolio website engineered with React 19, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

---

## 1. Threat Summary & Security Controls

| Threat Zone | Identified Vector | OWASP Reference | Countermeasure Implemented |
| :--- | :--- | :--- | :--- |
| **Input Surfaces** | Form submission & email inquiries | OWASP A03 / LLM02 | Client-side input validation, length bounding, parameter escaping before URI encoding. |
| **Planning & Reasoning** | Interactive AI simulation prompts | OWASP LLM01 | Isolated client-side simulation sandboxing without unauthenticated server execution. |
| **Tool Execution** | External navigation & repo links | OWASP A01 | Strict `rel="noopener noreferrer"` on all outbound URLs, preventing tab-nabbing. |
| **Memory & State** | Cross-user data leakage | OWASP A01 / LLM05 | Zero persistent user state in shared cache; verified owner-bound Firestore security rules. |
| **Inter-System Comm** | API key leakage | OWASP A07 | Zero hardcoded tokens or client API keys; all external secrets injected via Cloud Secret Manager. |

---

## 2. Technical Stack

- **Frontend Framework**: React 19 + TypeScript (Vite 6)
- **Styling**: Tailwind CSS v4 + Editorial Paper Grain & High-Contrast Editorial Grid
- **Typography**: Cormorant Garamond (Editorial Display Serif), Manrope (High-Legibility Modern Sans-Serif)
- **Palette**: Warm Ivory (`#EDE9DF`), Secondary (`#E3DED2`), Deep Green-Black (`#17211B`), Muted Slate (`#526057`), Accent Emerald (`#3F7D68`), Heritage Gold (`#C5A66A`), Soft Green Tint (`#DCE8DF`)
- **Animations**: Framer Motion (`motion/react`) + Custom State Machine Presenter
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

---

## 3. Environment & Prerequisites

Ensure the following tooling and Google Cloud services are enabled:

```bash
# Verify gcloud CLI installation
gcloud version

# Authenticate and configure active project
gcloud auth login
gcloud config set project <PROJECT_ID>

# Enable necessary Google Cloud APIs
gcloud services enable \
  run.googleapis.com \
  secretmanager.googleapis.com \
  firestore.googleapis.com \
  cloudbuild.googleapis.com
```

---

## 4. Secret Management Setup

Dynamic secret injection via Google Cloud Secret Manager:

```bash
# Create and populate the secret
gcloud secrets create GEMINI_API_KEY --replication-policy="automatic"
echo -n "YOUR_API_KEY" | gcloud secrets versions add GEMINI_API_KEY --data-file=-

# Grant the default Cloud Run service account access to read the secret
gcloud secrets add-iam-policy-binding GEMINI_API_KEY \
  --member="serviceAccount:YOUR_PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

---

## 5. Database Security Configuration

Deploy secure, owner-bound Firestore security rules to prevent unauthorized reads/writes:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/interactions/{interactionId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

---

## 6. Cloud Run Deployment Flow

Build and deploy the application container to Google Cloud Run:

```bash
# Build & Deploy to Cloud Run
gcloud run deploy dhivyaloshni-portfolio \
  --source . \
  --region asia-southeast1 \
  --platform managed \
  --allow-unauthenticated \
  --set-secrets GEMINI_API_KEY=GEMINI_API_KEY:latest
```

---

## 7. Required Campaign Verification Binding

Apply the mandatory resource label to register the service for automated challenge verification:

```bash
gcloud run services update dhivyaloshni-portfolio \
  --update-labels=dev-tutorial=cloud-run-ai-challenge \
  --region asia-southeast1
```

---

## 8. Local Development

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Compile production build & run TypeScript verification
npm run build
npm run lint
```
