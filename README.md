# Portar.in - Industrial 3D Model Visualization Platform

A cutting-edge Next.js 14 web application for visualizing and sharing industrial 3D models with stunning glassmorphism UI, Three.js 3D rendering, and D3.js data visualizations.

## ✨ Features

- 🎨 **Modern UI**: Glassmorphism design with dark mode and neon accents
- 🎯 **3D Visualization**: Real-time 3D model viewing with Three.js and React Three Fiber
- 📊 **Data Analytics**: D3.js powered progress rings, charts, and timelines
- 🎭 **Smooth Animations**: Framer Motion for butter-smooth interactions
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- 🔗 **Share Projects**: Shareable links for project collaboration
- ⚡ **Performance**: Optimized rendering with 60fps target

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router & TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Data Viz**: D3.js
- **Animations**: Framer Motion, React Spring
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **State Management**: Zustand
- **HTTP Client**: Axios, SWR

## 📦 Installation

1. **Clone the repository**
```bash
cd portar-revamp
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Colors
- **Primary**: `#0EA5E9` (Electric Blue)
- **Secondary**: `#A855F7` (Cyber Purple)
- **Accent**: `#10B981` (Neon Green)
- **Background**: `#0a0a0a` (Deep Black)
- **Surface**: `#1a1a1a` (Dark Gray)

### Custom Animations
- `animate-float`: Floating animation for elements
- `animate-glow`: Glowing effect
- `animate-slide-up`: Slide up entrance animation

## 📁 Project Structure

```
portar-revamp/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Landing page
│   ├── projects/            # Projects pages
│   │   ├── page.tsx         # Projects gallery
│   │   └── shared/
│   │       └── [token]/
│   │           └── page.tsx # Shared project view
│   └── viewer/
│       └── page.tsx         # 3D model viewer
├── components/
│   ├── 3d/                  # Three.js components
│   │   ├── ModelViewer.tsx
│   │   └── SimpleModelViewer.tsx
│   ├── effects/             # Visual effects
│   │   ├── ParticleSystem.tsx
│   │   └── GradientOrb.tsx
│   ├── layout/              # Layout components
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── ui/                  # UI components
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedButton.tsx
│   │   ├── SearchBar.tsx
│   │   └── ModelCard.tsx
│   └── visualizations/      # D3.js components
│       ├── ProgressRing.tsx
│       ├── ProjectChart.tsx
│       └── TimelineViz.tsx
├── lib/                     # Utility functions
│   └── utils.ts
├── types/                   # TypeScript types
│   └── index.ts
├── public/
│   └── models/              # 3D model files (.glb)
└── styles/
    └── globals.css          # Global styles
```

## 🎯 Usage

### Adding 3D Models

Place your GLB/GLTF model files in the `public/models/` directory:

```
public/
└── models/
    ├── machine-1.glb
    ├── machine-2.glb
    └── machine-3.glb
```

### Using Components

**Glass Card:**
```tsx
import { GlassCard } from '@/components/ui/GlassCard'

<GlassCard className="p-6">
  <h3>Your Content</h3>
</GlassCard>
```

**3D Model Viewer:**
```tsx
import { SimpleModelViewer } from '@/components/3d/SimpleModelViewer'

<SimpleModelViewer 
  modelUrl="/models/your-model.glb"
  autoRotate={true}
/>
```

**Progress Ring:**
```tsx
import { ProgressRing } from '@/components/visualizations/ProgressRing'

<ProgressRing progress={75} size={120} />
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=https://api.portar.in
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 🚀 Deployment

### Deploy to Vercel

```bash
vercel --prod
```

### Deploy to Netlify

```bash
netlify deploy --prod
```

## 📊 Performance

- ✅ Optimized 3D rendering
- ✅ Code splitting
- ✅ Image optimization with next/image
- ✅ Dynamic imports for heavy components
- ✅ Lazy loading for models
- ✅ 60fps animations

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
}
```

### Adding Custom Animations

Add to `tailwind.config.ts`:

```typescript
animation: {
  'your-animation': 'your-keyframes 2s ease-in-out infinite',
},
keyframes: {
  'your-keyframes': {
    '0%, 100%': { /* styles */ },
    '50%': { /* styles */ },
  },
}
```

## 📝 License

ISC License

## 👨‍💻 Author

Portar.in Team

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ using Next.js, Three.js, and D3.js
