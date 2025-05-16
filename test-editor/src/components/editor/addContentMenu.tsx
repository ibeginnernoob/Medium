import { Plus} from 'lucide-react';
import AddContentOptions from './addContentOptions';

export default function AddContentMenu() {
    return (
        <div className="flex flex-row items-center gap-6">
            <button className="p-1 border border-solid border-gray-600 rounded-full">
                <Plus className="text-black" strokeWidth={'1.2px'} size={22} />
            </button>
            <AddContentOptions />
        </div>
    );
}
