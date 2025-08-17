import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

function NotesNotFound() {
    return (
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div>
                <NotebookIcon />
            </div>
        </div>
    )
}

export default NotesNotFound;