import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

function NotesNotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon />
            </div>
            <h3 className="text-2xl font-bold">No notes yet</h3>
        </div>
    )
}

export default NotesNotFound;