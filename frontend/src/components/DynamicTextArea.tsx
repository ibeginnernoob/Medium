import React, { useRef, useEffect } from 'react';

const DynamicTextarea = ({ placeholder, className, onChange }: {
  placeholder?: string;
  className?: string;
  onChange?: (e:any) => void;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      placeholder={placeholder}
      className={`min-h-[40px] w-full resize-none overflow-hidden ${className}`}
      onChange={handleInput}
      rows={1}
    />
  );
};

export default DynamicTextarea;