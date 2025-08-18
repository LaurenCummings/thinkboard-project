import { useState } from 'react';
import { useNavigate } from 'react-router';

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div>NoteDetailPage</div>
  )
}

export default NoteDetailPage;