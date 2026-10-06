import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-4 h-4', size }) => {
  const normalized = name.toLowerCase().trim();
  const style = size ? { width: size, height: size } : undefined;

  // 1. Java
  if (normalized.includes('java') && !normalized.includes('script')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M8.8 19.3c1.7.3 3.5.3 5.2 0 1.2-.2 2.3-.6 3.1-1.3-.8.7-2.1 1.2-3.4 1.4-1.6.2-3.3.2-4.9-.1zm-1.2-2.1c2.1.4 4.3.4 6.4.1 1.4-.2 2.7-.7 3.6-1.5-.9.8-2.3 1.3-3.8 1.5-2 .2-4 .2-6.2-.1zm8.3-6.6c.6.6.9 1.4.7 2.2-.2.9-.8 1.7-1.6 2.1-.8.4-1.8.4-2.6.2-1.3-.3-2.3-1.1-2.9-2.3-.5-.9-.6-2-.3-3 .3.5.8 1 1.4 1.2.7.3 1.4.3 2.1.1 1.1-.3 2.1-1 3.2-.5zm-4.5-5.2c.4 1.1.2 2.4-.4 3.4-.6 1-1.6 1.7-2.7 2-.5.1-1.1.1-1.6-.1-.5-.2-.9-.6-1-1.1-.1-.7.2-1.4.6-1.9.8-1 2.1-1.7 3.4-2.1.6-.2 1.2-.3 1.7-.2z"
          fill="#E76F00"
        />
        <path
          d="M6.5 21.5c3.5.6 7.2.6 10.7 0 1.4-.3 2.8-.8 3.8-1.8-1.2 1-2.9 1.6-4.6 1.8-3.1.5-6.4.5-9.9 0zm10.7-9.8c.8-.7 1.2-1.7 1-2.7-.2-1-.8-1.9-1.7-2.4-.4.6-.6 1.3-.5 2 .1.7.5 1.3 1.2 1.7v1.4z"
          fill="#5382A1"
        />
      </svg>
    );
  }

  // 2. Spring Boot
  if (normalized.includes('spring')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M21.5 12.3c-.3 4.2-3.1 7.6-7.2 8.7-4.1 1-8.3-.7-10.4-4.2C1.8 13.2 2.6 8.8 5.8 6.1 9 3.5 13.6 3.6 16.7 6.4l-2.6 2.6c-1.8-1.4-4.4-1.4-6.2-.1-1.8 1.3-2.4 3.7-1.3 5.7 1.1 1.9 3.4 2.8 5.5 2.1 2.1-.7 3.5-2.6 3.5-4.8H12v-3.5h9.4c.1.5.1 1 .1 1.6z"
          fill="#6DB33F"
        />
      </svg>
    );
  }

  // 3. Angular
  if (normalized.includes('angular')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M12 2L2 5.5l1.6 12.7L12 22l8.4-3.8 1.6-12.7L12 2z" fill="#DD0031" />
        <path d="M12 2v20l8.4-3.8 1.6-12.7L12 2z" fill="#C3002F" />
        <path d="M12 5.2L6.8 17h2.2l1-2.6h4l1 2.6h2.2L12 5.2zm1.4 7.2h-2.8L12 8.6l1.4 3.8z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 4. React
  if (normalized.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      </svg>
    );
  }

  // 5. Flutter
  if (normalized.includes('flutter')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M14.3 2L4 12.3l3.2 3.2L20.7 2h-6.4z" fill="#42A5F5" />
        <path d="M14.3 12.8L8.6 18.5l3.2 3.2 8.9-8.9h-6.4z" fill="#0D47A1" />
        <path d="M11.8 15.3l-2.4 2.4 2.4 2.4 2.4-2.4-2.4-2.4z" fill="#01579B" />
      </svg>
    );
  }

  // 6. Dart
  if (normalized.includes('dart')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M4 4l8.5 2.5L16 11 8 19l-4-4V4z" fill="#0175C2" />
        <path d="M12.5 6.5L20 9l-4 8-4-4 2-4-1.5-2.5z" fill="#00B4AB" />
        <path d="M8 19l4 4 6-4-2-2-8 2z" fill="#01579B" />
      </svg>
    );
  }

  // 7. Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M19.7 5.7L12.5 1.5c-.3-.2-.7-.2-1 0L4.3 5.7c-.3.2-.5.5-.5.8v8.4c0 .4.2.7.5.8l7.2 4.2c.3.2.7.2 1 0l7.2-4.2c.3-.2.5-.5.5-.8V6.5c0-.3-.2-.6-.5-.8zm-7.7 12.6L6 14.8V8.6l6 3.5v6.2zm1-7.9L7.2 7l4.8-2.8 5.8 3.4-4.8 2.8zm5-1.8l-4 2.3V5.5l4-2.3v5.2z"
          fill="#FF2D20"
        />
      </svg>
    );
  }

  // 8. PHP
  if (normalized === 'php' || normalized.includes('php/')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <ellipse cx="12" cy="12" rx="11" ry="6.5" fill="#777BB4" />
        <path
          d="M7.5 10h1.8c.8 0 1.2.4 1 1.1-.2.8-.7 1.2-1.5 1.2h-.9l-.4 1.7H6.3L7.5 10zm1.5 1.6c.3 0 .5-.2.6-.5.1-.3 0-.5-.3-.5h-.7l-.2.9h.6zm3.5-1.6l-.3 1.3h1.2c.7 0 1.1.4 1 1-.2.8-.7 1.7-1.5 1.7h-1.2l-.4 1.7h-1.2l1.4-5.7h1zm3.7 0h1.8c.8 0 1.2.4 1 1.1-.2.8-.7 1.2-1.5 1.2h-.9l-.4 1.7h-1.2l1.2-4zm1.5 1.6c.3 0 .5-.2.6-.5.1-.3 0-.5-.3-.5h-.7l-.2.9h.6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M4 11h6v2H8v6H6v-6H4v-2zm9 4.5c.5.5 1.1.8 1.8.8.8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.5-1.2-1.3-.5-2.2-1.1-2.2-2.3 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .4 2.6 1l-1.1 1.3c-.4-.4-1-.7-1.5-.7-.6 0-1 .3-1 .7 0 .5.4.7 1.3 1.1 1.5.6 2.4 1.2 2.4 2.4 0 1.6-1.2 2.5-3 2.5-1.3 0-2.3-.5-3-1.3l1.3-1.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 10. JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 13h2v4.5c0 1.2-.7 1.7-1.8 1.7-.8 0-1.5-.3-1.9-.8l1-1.2c.2.3.5.5.9.5.4 0 .7-.2.7-.6V13zm6.5 2.5c.5.5 1.1.8 1.8.8.8 0 1.2-.4 1.2-.9 0-.6-.5-.8-1.5-1.2-1.3-.5-2.2-1.1-2.2-2.3 0-1.4 1.1-2.4 2.7-2.4 1.1 0 2 .4 2.6 1l-1.1 1.3c-.4-.4-1-.7-1.5-.7-.6 0-1 .3-1 .7 0 .5.4.7 1.3 1.1 1.5.6 2.4 1.2 2.4 2.4 0 1.6-1.2 2.5-3 2.5-1.3 0-2.3-.5-3-1.3l1.3-1.6z" fill="#000000" />
      </svg>
    );
  }

  // 11. PostgreSQL
  if (normalized.includes('postgres')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M12 2C6.5 2 2 6.5 2 12c0 4.1 2.5 7.6 6.1 9.1.5.1.7-.2.7-.5v-1.8c-2.5.5-3-1.2-3-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.5 0-1 .4-1.8 1-2.4-.1-.2-.4-1.2.1-2.4 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.5-.3.9 0 1.7.1 2.5.3 1.8-1.3 2.6-1 2.6-1 .5 1.2.2 2.2.1 2.4.6.6 1 1.4 1 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5C19.5 19.6 22 16.1 22 12c0-5.5-4.5-10-10-10z"
          fill="#336791"
        />
        <circle cx="12" cy="11" r="5" fill="#FFFFFF" opacity="0.9" />
        <path d="M12 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" fill="#336791" />
      </svg>
    );
  }

  // 12. SQL Server
  if (normalized.includes('sql server')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#F25022" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#7FBA00" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#00A4EF" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#FFB900" />
      </svg>
    );
  }

  // 13. MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M12 3C7 3 3 6.5 3 11c0 2.5 1.3 4.8 3.4 6.3L5 21l4.2-1.7c.9.4 1.8.7 2.8.7 5 0 9-3.5 9-8s-4-9-9-9z"
          fill="#00758F"
        />
        <path
          d="M12 6c-3 0-5.5 2-5.5 4.5 0 1.5.9 2.8 2.3 3.6L8 16.5l2.6-1c.5.3 1 .4 1.4.4 3 0 5.5-2 5.5-4.5S15 6 12 6z"
          fill="#F29111"
        />
      </svg>
    );
  }

  // 14. Generic SQL / Database
  if (normalized === 'sql' || normalized.includes('database')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }

  // 15. Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 1.9C14.4 11.8 16.2 13 19 13c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-1.9C16.6 7.2 14.8 6 12 6zM5 13c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5 1 .3 1.8 1.1 2.6 1.9C7.4 18.8 9.2 20 12 20c2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-1-.3-1.8-1.1-2.6-1.9C9.6 14.2 7.8 13 5 13z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  // 16. HTML / HTML5
  if (normalized.includes('html')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M4 2l1.6 18.2L12 22l6.4-1.8L20 2H4z" fill="#E34F26" />
        <path d="M12 3.8v16.4l5.1-1.4 1.3-15H12z" fill="#EF652A" />
        <path d="M12 7.6h4.5l-.3 3.2H12V14h3.9l-.4 4.2-3.5 1v-2.3l1.8-.5.2-1.8H12V7.6zm0 0H7.5l.3 3.2H12V7.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 17. CSS / CSS3
  if (normalized.includes('css')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M4 2l1.6 18.2L12 22l6.4-1.8L20 2H4z" fill="#1572B6" />
        <path d="M12 3.8v16.4l5.1-1.4 1.3-15H12z" fill="#33A9DC" />
        <path d="M12 7.6h4.5l-.3 3.2H12V14h3.9l-.4 4.2-3.5 1v-2.3l1.8-.5.2-1.8H12V7.6zm0 0H7.5l.3 3.2H12V7.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 18. Git
  if (normalized === 'git') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M21.7 10.6L13.4 2.3c-.4-.4-1-.4-1.4 0l-2 2 2.5 2.5c.5-.2 1-.1 1.4.3.4.4.5.9.3 1.4l2.4 2.4c.5-.2 1-.1 1.4.3.5.5.5 1.4 0 2-.5.5-1.4.5-2 0-.4-.4-.5-.9-.3-1.4L13.4 9v5.2c.2.1.3.3.4.5.5.5.5 1.4 0 2s-1.4.5-2 0-.-1.4 0-2c.2-.2.3-.4.5-.5V8.8L9.5 6.4 2.3 13.5c-.4.4-.4 1 0 1.4l8.3 8.3c.4.4 1 .4 1.4 0l9.7-9.7c.4-.4.4-1 0-1.4z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // 19. GitHub
  if (normalized.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  }

  // 20. Docker
  if (normalized.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M22.5 10.5c-.4-.3-1.1-.4-1.7-.2-.2-.5-.6-1-1.1-1.3-.2 0-.4-.1-.6-.1-.2-.8-.7-1.6-1.5-2.1l-.8.5c.7.4 1.1 1.1 1.2 1.9-1.2.2-2.3.8-3 1.8H2v2.5c0 4.1 3.4 7.5 7.5 7.5h6.3c3.7 0 6.7-3 6.7-6.7 0-1.4-.4-2.7-1.1-3.8h1.1zm-15-4h2.2v2H7.5v-2zm3 0h2.2v2h-2.2v-2zm3 0h2.2v2h-2.2v-2zm-6 3h2.2v2H7.5v-2zm3 0h2.2v2h-2.2v-2zm3 0h2.2v2h-2.2v-2zm3 0h2.2v2h-2.2v-2z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // 21. Maven
  if (normalized.includes('maven')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" fill="#C71A36" />
        <path d="M12 2v20l8-5V7l-8-5z" fill="#A8152D" />
        <path d="M12 7l-5 3v6l5-3 5 3v-6l-5-3z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 22. Linux
  if (normalized.includes('linux')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M12 2c-2.8 0-5 2.2-5 5 0 1.2.4 2.2 1 3.1-.7 1.2-1 2.6-1 4.1 0 1.6.4 3 1.1 4.3C7.4 19.3 7 20.2 7 21c0 .6.4 1 1 1h8c.6 0 1-.4 1-1 0-.8-.4-1.7-1.1-2.5.7-1.3 1.1-2.7 1.1-4.3 0-1.5-.3-2.9-1-4.1.6-.9 1-1.9 1-3.1 0-2.8-2.2-5-5-5z"
          fill="#FCC624"
        />
        <circle cx="10" cy="6.5" r="1" fill="#000000" />
        <circle cx="14" cy="6.5" r="1" fill="#000000" />
        <ellipse cx="12" cy="8.5" rx="1.5" ry="1" fill="#E95420" />
      </svg>
    );
  }

  // 23. IntelliJ IDEA
  if (normalized.includes('intellij')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#000000" />
        <rect x="2" y="2" width="20" height="20" rx="3" fill="url(#ij-grad)" />
        <path d="M6 16.5h4v1.5H6v-1.5zm1-9h2v6H7v-6zm5 0h2v4.5c0 .8-.5 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-.5h2v.5c0 .3.2.5.5.5s.5-.2.5-.5V7.5z" fill="#FFFFFF" />
        <defs>
          <linearGradient id="ij-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F97A12" />
            <stop offset="0.5" stopColor="#B0168F" />
            <stop offset="1" stopColor="#087CFA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 24. VS Code
  if (normalized.includes('vs code') || normalized.includes('vscode')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M17.5 2.5l-8 7.5-4-3.5L2 8.5v7l3.5 2 4-3.5 8 7.5 4.5-2.2V4.7l-4.5-2.2z" fill="#007ACC" />
        <path d="M17.5 2.5v19l4.5-2.2V4.7l-4.5-2.2z" fill="#1F9CF0" />
        <path d="M9.5 10l8-7.5v19l-8-7.5 4-4-4-4z" fill="#0065A9" />
      </svg>
    );
  }

  // 25. REST API
  if (normalized.includes('rest') || normalized.includes('api')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    );
  }

  // 26. JPA / Hibernate
  if (normalized.includes('jpa') || normalized.includes('hibernate')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#59666C" />
        <path d="M8 8h3v8H8zm5 0h3v8h-3z" fill="#BCAE79" />
      </svg>
    );
  }

  // 27. RAG / AI
  if (normalized.includes('rag') || normalized.includes('ai')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  // 28. Google Sheets
  if (normalized.includes('sheet')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#0F9D58" />
        <path d="M14 2v6h6" fill="#A1D9B7" />
        <rect x="7" y="11" width="10" height="7" rx="0.5" fill="#FFFFFF" />
        <path d="M7 14h10M12 11v7" stroke="#0F9D58" strokeWidth="1" />
      </svg>
    );
  }

  // 29. Queues
  if (normalized.includes('queue')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
      </svg>
    );
  }

  // 30. Sanctum / Auth
  if (normalized.includes('sanctum') || normalized.includes('auth')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    );
  }

  // 31. Blade
  if (normalized.includes('blade')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }

  // Default fallback: Terminal / Code chip icon
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
