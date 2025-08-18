import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async() => {
      try {

      } catch (error) {

      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  return (
    <div>NoteDetailPage</div>
  )
}

export default NoteDetailPage;