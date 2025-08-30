# E-Cell FCRIT Official Website

A modern, responsive website for the Entrepreneurship Cell of FCRIT, Vashi built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Interactive Components**: Smooth animations and engaging user interactions
- **Contact Forms**: Working contact and registration forms with validation
- **Event Management**: Dynamic event galleries and information
- **Team Management**: Dynamic team member profiles with detailed information
- **Testimonials**: Rotating testimonials from industry experts and alumni
- **SEO Optimized**: Server-side rendering for better search visibility
- **Performance**: Optimized for fast loading and smooth user experience

## 🏗 Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/              # Reusable React components
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero section with slideshow
│   │   ├── About.tsx       # About E-Cell section
│   │   ├── Counter.tsx     # Statistics counter
│   │   ├── Events.tsx      # Events showcase
│   │   ├── Team.tsx        # Team members
│   │   ├── Testimonials.tsx # Testimonials carousel
│   │   └── Contact.tsx     # Contact form
│   └── ui/                 # UI components (future)
├── data/                   # Static data and content
│   ├── team.ts            # Team member data
│   ├── events.ts          # Events information
│   └── testimonials.ts    # Testimonials and speakers
├── lib/                    # Utility functions and configurations
│   └── utils.ts           # Common utilities
└── types/                  # TypeScript type definitions
```

## 🛠 Development

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecell-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Content Management

The website uses structured data files for easy content management:

### Adding Team Members

Edit `src/data/team.ts` to add new team members:

```typescript
{
  id: newId,
  name: "Member Name",
  position: "Position",
  department: "Department",
  email: "email@fcrit.ac.in",
  image: "/team/member-photo.jpg",
  bio: "Member biography...",
  achievements: ["Achievement 1", "Achievement 2"]
}
```

### Adding Events

Edit `src/data/events.ts` to add new events:

```typescript
{
  id: newId,
  title: "Event Title",
  category: "summit", // or workshop, hackathon, etc.
  date: "Event Date",
  location: "Event Location",
  description: "Event description...",
  highlights: ["Highlight 1", "Highlight 2"]
}
```

### Adding Testimonials

Edit `src/data/testimonials.ts` to add new testimonials:

```typescript
{
  id: newId,
  name: "Person Name",
  role: "Their Role",
  company: "Company/Organization",
  testimonial: "Their testimonial...",
  rating: 5
}
```

## 🎯 Key Requirements Implemented

1. ✅ **List and summary of all past events** - Dynamic events section with detailed information
2. ✅ **Past and current core committee members** - Comprehensive team management system
3. ✅ **Current team with images, positions, and branches** - Detailed team profiles
4. ✅ **Selection procedure for joining E-CELL** - Information in team section
5. ✅ **Year of establishment (2019)** - Prominently displayed throughout
6. ✅ **Working contact and registration forms** - Fully functional forms with validation
7. ✅ **Dynamic content management** - Structured data for easy updates

## 🚀 Features Implemented

### ✨ Modern Design

- **Dark theme** with purple/pink gradient accents
- **Glassmorphism effects** and subtle animations
- **Mobile-responsive** design that works on all devices
- **Professional typography** and spacing

### 🔧 Functionality

- **Smooth scrolling** navigation
- **Interactive elements** with hover effects
- **Form validation** with error handling
- **Loading states** and success messages
- **Carousel/slider** for testimonials and events

### 📊 Data Management

- **TypeScript interfaces** for type safety
- **Structured data files** for easy content updates
- **Reusable components** for consistency
- **SEO-friendly** meta tags and structure

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `out` folder to your hosting provider

### Custom Domain Setup

The website is designed to be hosted at `ecell.fcrit.ac.in`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://ecell.fcrit.ac.in
NEXT_PUBLIC_CONTACT_EMAIL=ecell@fcrit.ac.in
```

### Customization

- **Colors**: Edit `tailwind.config.ts` for theme colors
- **Fonts**: Modify `src/app/layout.tsx` for font imports
- **Content**: Update data files in `src/data/`

## 📞 Contact & Support

**E-Cell FCRIT Vashi**  
Established: 2019  
Email: ecell@fcrit.ac.in  
Website: [ecell.fcrit.ac.in](https://ecell.fcrit.ac.in)

## 📄 License

This project is developed for E-Cell FCRIT and is proprietary to the institution.

---

**Built with ❤️ by the E-Cell FCRIT Team**
