# PocketFlow MVP — Personal Finance Management Application
**PayStream Solutions Ltd**  
**Author / Developer:** Abdul Rehman Muhammad Siddiq  
**Module:** Pearson BTEC Level 4 Higher National Certificate in Computing — Unit 7 (Software Development Lifecycles)  

---

## 1. Project Overview
PocketFlow is a closed-beta Minimum Viable Product (MVP) designed for the UK gig-economy and self-employed workforce. It combines automated Open Banking transaction ingestion (via TrueLayer), HMRC tax-deductible expense categorization, multi-currency budget tracking, and an automated weekly savings-suggestion engine.

### **Core Technology Stack:**
* **Front-End Mobile Application:** React Native (cross-platform iOS & Android)
* **Back-End API Server:** Node.js (Express framework)
* **Database & Storage:** PostgreSQL (relational store in 3rd Normal Form) with AWS KMS encryption at rest
* **Security & Authentication:** OAuth 2.0 tokenized authentication, AES-256 GCM encryption, TLS 1.3 transport security, and device Keychain/Keystore credential isolation.

---

## 2. Repository Directory Structure
```text
pocketflow-mvp/
│
├── backend/                  # Node.js Express REST API & Business Logic
│   ├── src/
│   │   ├── controllers/      # Request handlers (Auth, Transactions, Savings)
│   │   ├── models/           # Sequelize / PostgreSQL entity models
│   │   ├── services/         # Core business logic (Velocity Calculator, Categorizer)
│   │   └── routes/           # API route definitions & middleware
│   ├── tests/                # Jest automated test suite (Unit & Integration)
│   ├── package.json          # Backend dependencies and scripts
│   └── .env.example          # Environment variable template
│
├── frontend/                 # React Native Mobile Application
│   ├── src/
│   │   ├── screens/          # UI Screens (Login, Dashboard, Budget, Goals)
│   │   ├── components/       # Reusable UI widgets and navigation wrappers
│   │   └── services/         # API client & Secure Keychain storage wrappers
│   ├── package.json          # Frontend dependencies and scripts
│   └── App.js                # Root application entry point
│
├── docs/                     # System design diagrams (DFD, ERD, FSM/EFSM) & RTM
└── README.md                 # Project build, run, and test instructions