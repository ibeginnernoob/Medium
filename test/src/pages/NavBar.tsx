import '../App.css';
import { BookOpen } from 'lucide-react';
import { InteractiveHoverButton } from '../components/magicui/interactive-hover-button';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="flex flex-row items-center">
                <BookOpen className="h-5 w-5" color="white" strokeWidth={1.2} />
                <span className="ml-2 text-base font-roboto text-white">
                    BlogVerse
                </span>
            </div>
            <InteractiveHoverButton className="text-xs bg-rgba(0, 0, 0, 0.8) text-white py-1.5 px-0 border-gray-600 w-20 rounded-md">
                Sign In
            </InteractiveHoverButton>
        </nav>
    );
}
