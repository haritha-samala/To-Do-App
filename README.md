# Todo List Application 📝

A modern, responsive todo list application featuring local storage persistence, task management, and an engaging video background. Built with vanilla JavaScript and designed for optimal user experience.

## ✨ Features

- Task management (add, edit, delete)
- Real-time task status updates
- Local storage persistence
- Interactive background video
- Responsive design
- Input validation
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Modern web browser with ES6 support
- Local development server (recommended)

### Installation

1. Clone the repository

```bash
git clone https://github.com/haritha-samala/ToDo-List-App.git
```

2. Navigate to project directory

```bash
cd todo-list-app
```

3. Place your video file in the assets directory

```bash
assets/calendar.mp4
```

4. Open `index.html` in your browser or serve through a local server

## 🛠️ Technologies

- HTML5
- CSS3 (with custom properties)
- Vanilla JavaScript (ES6+)
- Bootstrap Icons v1.11.3
- Google Fonts (Handlee, Nunito)

## 📁 Project Structure

```
project-root/
│
src
├── index.html         # Main HTML
├── styles.css         # Styling
├── index.mjs          # JavaScript logic
└── assets/
    └── calendar.mp4   # Background video
```

## 🎨 Design System

### Color Palette

```css
--clr-dark: #282828    /* Background */
--clr-light: #f3f3f3   /* Text */
--clr-blue: #539fa2    /* Primary */
--clr-border: #82b0b4  /* Accents */
--clr-hover: #4a8f90   /* Interactive */
--clr-yellow: #ffa500  /* Highlights */
```

### Typography

- Primary: "Handlee" (cursive)
- Secondary: "Nunito" (sans-serif)
- Base size: 1.5rem
- Letter spacing: 2px

## 💾 Local Storage

Tasks are automatically persisted with the following structure:

```javascript
{
    value: "Task text",
    checked: false
}
```

## 📱 Responsive Behavior

- Fluid layouts using flexbox
- Mobile-first approach
- Breakpoint at 600px for mobile optimization
- Adaptive video background
- Touch-friendly interactive elements

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

### Common Issues

1. Video Playback

   - Verify MP4 format compatibility
   - Check file path configuration
   - Ensure browser supports HTML5 video

2. Task Persistence

   - Enable localStorage in browser
   - Clear cache if needed
   - Check browser console for errors

3. Icon Display
   - Verify internet connection for CDN
   - Check icon class names
   - Confirm Bootstrap Icons version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

3. Commit changes

```bash
git commit -m 'Add some AmazingFeature'
```

4. Push to branch

```bash
git push origin feature/AmazingFeature
```

5. Open a pull request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Linkedin - [https://www.linkedin.com/in/naga-haritha-samala]

Project Link: [https://github.com/haritha-samala/Tood-List-App](https://github.com/haritha-samala/ToDo-List-App)

---

Made with ❤️ by Naga Haritha Samala
