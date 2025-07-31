import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("You just fetched the notes");
});

router.post("/", (req, res) => {
    res.status(201).json({message:"Note created successfully!"})
});

export default router;


app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note updated successfully!"})
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note deleted successfully!"})
});