# 📝 En spelifierad produktivitetsapp via Next.js, Docker och Prisma

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green)

En produktivitetsapp där du blir starkare genom att klara av dina vardagssysslor. Här erbjuds en stilren hemsida för mobilen byggd med **Next.js 16**, **Docker 29.2.1** och **Prisma 7.4.2**. 
Projektet låter dig skapa en "att göra"-lista som du bockar av för att få belöningar och bli starkare.

Detta projekt är under ständig utveckling via ett **Agile Scrum** ramverk, där all planering kan följas på tillhörande Github Projects.

---

## 📑 Innehåll
- 📖 [Om projektet](#-om-projektet)
- ✨ [Funktioner](#-funktioner)
- 🛠 [Teknologier](#-teknologier)
- 📸 [UI](#-UI)
- ⚙️ [Installation](#-installation)
- 🚀 [Användning](#-användning)
- 📂 [Projektstruktur](#-projektstruktur)
- 📈 [Arbetsflöde](#-arbetsflöde)
- 🗓 [Sprintplan](#-sprintplan)
- 🤝 [Bidra](#-bidra)
- 📚 [Lärdomar](#-lärdomar)
- 📜 [Licens](#-licens)
- ✍️ [Kontakt](#-kontakt)

---

## 📖 Om projektet
Detta är ett soloprojekt med syfte att öva på att **utveckla ett fullstack-ramverk** där **frontend** står i särskild fokus. Parallellt med detta sker arbetsflödet som på en faktisk arbetsplats med **Agile Scrum**, för att öva upp arbetsvana med agil planering samt 'version control'.

---

## ✨ Funktioner
- ✅ Startsida med huvudfunktioner
- ✅ Direkt åtkomst till "att göra"-lista
- ✅ Lägg och ta bort uppgifter
- ✅ Boka av färdiga uppgifter
- ✅ Skapa din karaktär

---

## 📸 UI

**Wireframe:**


<img src="app/Image/Wireframe.png" width="200">

**App:**

<img src="app/Image/Homepage.png" width="300">

---

## 🛠 Teknologier
- [Next.js 16](https://nextjs.org/)
- [DOCKER 29.2.1](https://www.docker.com/)
- [Prisma 7.4.2](https://www.prisma.io/)
- [PostgreSQL 17.3](https://www.postgresql.org/)
- [Git 2.46.1](https://git-scm.com/)
- [Figma](https://www.figma.com/)
- [WAVE](https://wave.webaim.org/)

---
## ✅ Förutsättningar
**Följande krävs inför installation:**

- Node.js
- PostgreSQL
- npm

## ⚙️ Installation
```bash

# Klona repo
git clone https://github.com/velvel77/gamified-productivity

# Gå in i projektmappen
cd gamified-productivity

# Installera beroenden
npm install

# Skapa en ".env"-fil i root-foldern och skriv in adress för databas, exempel:

DATABASE_URL=postgresql://user:password@localhost:5432/gamified_productivity

# Skapa schema för databasen:
npx prisma migrate dev

# Fyll databasen med initial information:
npx prisma db seed

# Starta utvecklingsserver
npm run dev

# Appen körs på:
http://localhost:3000

# Frontend för databas:
npx prisma studio

```

---

## 🚀 Användning
* Skapa uppgifter
* Ta bort uppgifter
* Bocka i uppgift som klar
* Skapa karaktär
* Ta bort karaktär

---

## 📂 Projektstruktur

```
|-- actions/                 
|   |-- actions.ts           # Server actions (backendlogik)

|-- app/                     # Next.js App Router
|   |-- about/               # Om-sida
|   |-- api/                 # API-routes
|   |-- data/                # Datakällor / statisk data
|   |-- favorites/           # Favoritvy
|   |-- generated/           # Genererade resurser
|   |-- image/               # Bildhantering
|   |-- monster/             # Monsterrelaterade sidor
|   |-- favicon.ico
|   |-- globals.css          # Global styling
|   |-- layout.tsx           # Root layout
|   |-- page.tsx             # Startsida

|-- components/              # Återanvändbara React-komponenter
|   |-- character/           # Karaktärsrelaterade komponenter
|   |   |-- create-character-form.tsx
|   |
|   |-- modal/               # Modal-komponenter
|   |
|   |-- navigation/
|   |   |-- header.tsx       # Navigationsheader
|   |
|   |-- tasks/               # Task / todo-komponenter
|   |   |-- add-task-form.tsx
|   |   |-- todo-task-row.tsx
|   |
|   |-- ui/                  # UI-layoutkomponenter
|       |-- main-body-grid.tsx
|       |-- main-character-widget.tsx
|       |-- todo-list-grid.tsx

|-- lib/
|   |-- db.ts                # Prisma databasanslutning

|-- prisma/
|   |-- schema.prisma        # Databasschema

|-- types/
|   |-- character.ts         # TypeScript-typer
|   |-- task.ts

|-- public/                  # Statisk media

|-- Dockerfile               # Docker-konfiguration
|-- compose.yaml             # Docker Compose setup
|-- .env                     # Miljövariabler
|-- package.json             # Projektberoenden
|-- tsconfig.json            # TypeScript-konfiguration
```

---

## 📈 Arbetsflöde

* 👥 Soloprojekt i agila sprintar (SCRUM)
* 📋 Planering och uppgiftshantering via GitHub Projects
* 🎨 Design och wireframes skapade i Figma
* 🌱 Feature branches
* 🔍 PR + kodgranskning

---

## 🗓 Sprintplan

### Sprint 1 - Grundläggande struktur

* Satte upp Next.js-projektet
* Skapade initial wireframe på Figma
* Installerade Docker och Prisma
* Initierade PostgreSQL genom Docker
* Skapade tabeller för databas
* Skapade minimalistisk startsida med navbar

### Sprint 2 - Grundläggande struktur

* Skapade server actions som alternativ till backend
* Skapade sidans "att göra"-lista
* Skapade footer med karaktärs-info
* Kopplade logik mellan databas och frontend genom server actions

---

## 🤝 Bidra

Vill du bidra?

1. Forka projektet
2. Skapa en feature-branch (`git checkout feature/my-feature`)
3. Commit & push
4. Skicka en Pull Request

---

## 📚 Lärdomar

* Skillnaden mellan Server & Client Components i Next.js
* Databashantering via Prisma och PostgreSQL
* Lokal utveckling via Docker
* Server actions för att kommunicera mellan frontend och databas
* Att agera både utvecklare, produktägare och SCRUM master i soloprojekt
* Arbetsflöde via Github Projects

---

## 📜 Licens

Copyright 2026 Velvet Paul

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## ✍️ Kontakt

https://www.linkedin.com/in/velvetpaul/