import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async() => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
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