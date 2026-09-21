// src/app/components/Footer.tsx
'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-4 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-500 dark:text-slate-400">

        {/* Author / Copy */}
        <span>© {new Date().getFullYear()} LouisVolant.com. All rights reserved.</span>

        {/* Links */}
        <span className="text-slate-300 dark:text-slate-800">|</span>
        <a
          href="https://www.louisvolant.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Personal Page
        </a>

        <span className="text-slate-300 dark:text-slate-800">|</span>
        <a
          href="https://www.louisvolant.com/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Portfolio
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Theme"
          className="ml-1 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {darkMode ? <Sun className="h-3.5 w-3.5 text-amber-500" /> : <Moon className="h-3.5 w-3.5 text-indigo-600" />}
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>

      </div>
    </footer>
  );
}
