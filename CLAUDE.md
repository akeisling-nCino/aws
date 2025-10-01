# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains an AWS Certified Cloud Practitioner (CLF-C02) quiz application built with React and TypeScript. The project is a comprehensive practice quiz tool with 400+ questions covering all four CLF-C02 exam domains.

## Development Commands

Navigate to the quiz app directory first:
```bash
cd aws-clf-quiz/quiz-app
```

### Essential Commands
- **Development server**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - TypeScript compilation + Vite build
- **Lint**: `npm run lint` - ESLint code quality checks
- **Preview**: `npm run preview` - Preview production build locally
- **Install dependencies**: `npm install`

### Testing
No test framework is currently configured in the project.

## Architecture & Structure

### Core Application Flow
1. **App.tsx** - Main application component managing quiz state
2. **Question Bank** - Large collection of questions in `/src/data/questions.ts`
3. **Quiz Logic** - Random question selection (20 questions per quiz)
4. **Component Structure**:
   - `QuizHeader` - Application title and branding
   - `QuizStats` - Progress tracking and score display
   - `QuizQuestion` - Individual question display with answer options
   - `QuizResults` - Final score and quiz completion screen

### Key Technical Details
- **State Management**: React useState for quiz state (no external state library)
- **Question Selection**: Random sampling from 400+ question bank
- **Answer Shuffling**: Options randomized to prevent memorization
- **TypeScript**: Strict typing with interfaces for Question and QuizState
- **Styling**: Plain CSS (no UI framework)

### Data Structure
Questions follow this interface:
```typescript
interface Question {
  question: string;
  options: string[];
  correct: number; // Index of correct answer
  explanation: string;
}
```

## Configuration

### Build Configuration
- **Vite Config**: Base path set to `/aws/` for deployment
- **ESLint**: Modern flat config with TypeScript + React rules
- **TypeScript**: Project references structure with separate app/node configs

### Key Files
- `vite.config.ts` - Build configuration with critical base path
- `eslint.config.js` - Code quality rules
- `src/data/questions.ts` - Question bank (extensive file)
- `src/types/quiz.ts` - TypeScript interfaces

## Content Management

### Adding Questions
Questions are stored in `src/data/questions.ts` and cover CLF-C02 domains:
- Cloud Concepts (24%)
- Security and Compliance (30%) 
- Cloud Technology and Services (34%)
- Billing, Pricing, and Support (12%)

### Question Guidelines
Each question should include:
- Clear, exam-relevant question text
- 4 multiple choice options
- Correct answer index
- Detailed explanation for learning

## Deployment Notes
- Vite base path configured for `/aws/` subdirectory deployment
- Static site ready for GitHub Pages or similar hosting
- No backend dependencies - fully client-side application