import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {

  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreatePage;