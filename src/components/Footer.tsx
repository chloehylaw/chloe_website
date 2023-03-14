import Link from 'next/link';
import {useState} from 'react';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Footer({
                                   toggleTheme,
                                   isDark,
                               }: {
    toggleTheme: () => void;
    isDark: boolean;
}) {
    return (
        <footer className="bg-white dark:bg-gray-900 text-center dark:text-white border-gray-200 dark:border-gray-600">
            <div
                className="p-4 text-center">
                Designed & Built by
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://www.linkedin.com/in/chloehylaw/"
                > Chloe Law</a
                >
            </div>
        </footer>
    );
}