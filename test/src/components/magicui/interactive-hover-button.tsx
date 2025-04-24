import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                'group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold',
                className
            )}
            {...props}
        >
            <div className="flex px-2.5 items-center h-full w-full justify-between bg-rgba(0, 0, 0, 0.8)">
                <div className="bg-white h-2 w-2 rounded-full bg-primary transition-all duration-500 group-hover:scale-[100.8]"></div>
                <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    {children}
                </span>
            </div>
            <div className="absolute px-1 top-0 z-10 bg-white flex h-full w-full items-center justify-center text-primary-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="m-0 p-0 text-black">{children}</span>
                <ArrowRight className="h-4 mr-[-10px] p-0" color="black" />
            </div>
        </button>
    );
});

InteractiveHoverButton.displayName = 'InteractiveHoverButton';
