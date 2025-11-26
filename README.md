# Be The Witness - The Musical Web App

A beautiful Angular web application showcasing "Be The Witness" - The Musical That Will Turn Your Life Around.

## Features

- **Home Page**: Hero section with quick navigation to all sections
- **Welcome**: Message from Fr Wim Hoekstra, Parish Priest
- **Origins**: History and background of The Witness musical
- **Songs**: Complete lyrics and quotes from the musical
- **Team**: Production and administration team information
- **Prayer**: Together we Pray section

## Technology Stack

- Angular 17 (Standalone Components)
- TypeScript
- CSS3 with modern design patterns
- Responsive design for mobile and desktop

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm start
```

The app will be available at `http://localhost:4200`

## Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist/be-the-witness` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   └── footer/          # Footer component
│   ├── pages/
│   │   ├── home/            # Home page
│   │   ├── welcome/         # Welcome page
│   │   ├── origins/         # Origins page
│   │   ├── songs/           # Songs page
│   │   ├── team/            # Team page
│   │   └── prayer/          # Prayer page
│   ├── app.component.ts     # Main app component
│   └── app.routes.ts        # Routing configuration
├── index.html
├── main.ts
└── styles.css               # Global styles
```

## Design Features

- Modern, clean UI with gradient backgrounds
- Responsive design for all screen sizes
- Smooth animations and transitions
- Beautiful typography using Playfair Display and Inter fonts
- Color scheme inspired by the musical's theme

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Mary Queen of the Family Parish, Blacktown.

