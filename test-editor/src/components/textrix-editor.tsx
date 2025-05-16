import 'textrix/themes/textrix.min.css';

import { useEffect, useRef, useState } from 'react';
import { Editor } from 'textrix';
import { BubbleMenu, FloatingMenu, Media, Emoji, CodeBlock } from 'textrix/features';

// https://www.youtube.com/embed/g7oKeH_NtTQ


export default function TextrixEditor() {
	const editorRef = useRef(null);
    const [editor, setEditor] = useState<Editor | null>(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = new Editor({
                element: editorRef.current,
				formats: {
					"core": true,
					"lists": true
				},
                features: [
                    BubbleMenu,
                    FloatingMenu,
					Media,
					Emoji,
					CodeBlock
                    // Media.configure({
                    //     fetchMediaEmbedData: async ({ url }) => {
                    //         return {
                    //             mediaId: 'abc123',
                    //             iframeSrc: url,
                    //             title: 'Embedded Media',
                    //         };
                    //     },
                    //     getOptimizedImageUrl: ({ src, layout }) => {
                    //         const widths = {
                    //             grid: 500,
                    //             'inset-center': 800,
                    //             'outset-center': 1200,
                    //             'fill-width': 5000,
                    //         };
                    //         const width = layout ? widths[layout] : 1000;
                    //         const imageUrl = new URL(src);
                    //         imageUrl.searchParams.set('width', `${width}px`);
                    //         return imageUrl.toString();
                    //     },
                    //     maxImageSizeBytes: 10 * 1024 * 1024, // 10 MB
                    //     onMaxFileSizeError: (file) => {
                    //         alert(`${file.name} is too large!`);
                    //     },
                    // }),                    
                ],
                onUpdate: ({ editor }) => {
                    // Save the doc
                    const docJSON = editor.getJSON();
                    console.log(docJSON.content);
                },
            });
            setEditor(editor);
        }

        return () => {
            editor?.destroy();
            setEditor(null);
        };
    }, []);

	// setInterval(() => {
    //     const json = editor?.getJSON();
    //     console.log(json);
    // }, 20000);

	return (
		<div
				ref={editorRef}
				className='mt-40'
			/>
	)
}