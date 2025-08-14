import { Link } from "react-router";

function NoteCard({ note }) {
  return (
    <Link to={`/note/${note._id}`}>NoteCard</Link>
  )
}

export default NoteCard;