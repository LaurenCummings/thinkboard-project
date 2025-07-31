import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("you got 20 notes");
});

export default router;


app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Note created successfully!"})
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note updated successfully!"})
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note deleted successfully!"})
});