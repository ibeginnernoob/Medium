import '../App.css'

import { useState } from "react";
import AddContentOptions from "./editor/addContentMenu";
import AddContentMenu from "./editor/addContentMenu";
import H3Content from "./editor/contentDisplay/H3Content";

export default function BlogEditor() {
	const [content, setContent] = useState<any>([])

    return (
        <div className="h-screen w-full px-60 py-20 flex justify-center">
			<div className="w-full bg-blue-100">
				<div className='bg-black'>
					<div>

					</div>
					<div>

					</div>
					<div className='bottom-arrow'></div>
				</div>
			</div>			
        </div>
    );
}
