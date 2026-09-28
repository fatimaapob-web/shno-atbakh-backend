# 🍳 شنو أطبخ؟

مشروع تخرج Full-Stack: تطبيق يقترح وصفات حسب المكونات اللي عندك، مع مساعدة ذكية اسمها **مرام**.

## ترتيب المشروع

```
shno-atbakh/
├── client/   الواجهة (React + Vite + Tailwind)
└── server/   الباكند (Node.js + Express + PostgreSQL + Gemini)
```

## التشغيل

### 1. السيرفر (المنفذ 3000)
```bash
cd server
npm install
cp .env.example .env   # ثم عبّي القيم
npm run dev
```

### 2. الواجهة (المنفذ 5173)
```bash
cd client
npm install
npm run dev
```

## الفريق

| العضوة | الدور |
|---|---|
| سارة | Team leader — ميزة «شنو أطبخ؟» ومساعدة الـ AI «مرام» (frontend + backend) |
| فاطمة | Backend — المستخدمين، المفضلة، الاستكشاف، وجبات الأسبوع، قاعدة البيانات |
| زهراء | Frontend — الصفحات والهوية البصرية |

## ميزة مرام (AI)

```http
POST /api/suggest
```

```json
{ "ingredients": ["دجاج", "رز"], "people": 2, "mealType": "غداء", "lang": "ar" }
```

`people` و`mealType` و`lang` اختيارية. `lang` تكون `ar` أو `en`.

تفاصيل روابط الباكند الباقية موجودة في [`server/README.md`](server/README.md).

> رسومات شخصية مرام مولّدة بمساعدة الذكاء الاصطناعي.
