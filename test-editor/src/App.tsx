// Tetrix all the way for blog editor

import 'textrix/themes/textrix.min.css';
import { useEffect, useRef, useState } from 'react';
import { Editor } from 'textrix';
import { BubbleMenu, FloatingMenu, Media, Emoji } from 'textrix/features';

function App() {
    const editorRef = useRef(null);
    const [editor, setEditor] = useState<Editor | null>(null);

    useEffect(() => {
        if (editorRef.current) {            
            const editor = new Editor({
                element: editorRef.current,
                features: [BubbleMenu, FloatingMenu, Media, Emoji],
            });
            setEditor(editor);			
		}

        return () => {
            editor?.destroy();
            setEditor(null);
        };
    }, []);

	setInterval(() => {
		const json = editor?.getJSON()
		console.log(json)
	}, 10000)

    return (
        <div>
            <h1>Textrix Editor in React</h1>
            <div ref={editorRef} />
        </div>
    );
}

export default App;
