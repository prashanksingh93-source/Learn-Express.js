import express from 'express';

const port=3000;
const app=express();

app.use(express.json());

let notes=[];


//get all notes
app.get('/notes',(req,res)=>{
    res.json({
        success:true,
        data:notes
    })
});


//add new note
app.post('/notes',(req,res)=>{
    let {title,content}=req.body;
    let newNote={
        id:notes.length+1,
        title,
        content
    }
    notes.push(newNote);
    res.status(201).json({
        success:true,
        message:'note i uploaded',
        data:newNote
    })
})

app.get('/notes/:id',(req,res)=>{
    const note=notes.find((n)=>{return n.id===parseInt(req.params.id)});
    if(!note){
      return res.status(404).json({
        success: false,
        message:'note not found'
      })
    }
    res.json({
        success:true,
        data:note
    })
})

//update a note
app.put('/notes/:id',(req,res)=>{
    let note=notes.find((n)=>{return n.id===parseInt(req.params.id)})
     if(!note){
      return res.status(404).json({
        success: false,
        message:'note not found'
      })
    }
    const {title,content}=req.body;
    note.title=title||note.title;
    note.content=content||note.content;
    res.json({
        success:true,
      message : 'update a note',
      data:note
})
})


//delete a note 
// Delete a note
app.delete('/notes/:id', (req, res) => {
    const noteIndex = notes.findIndex(
        (n) => n.id === parseInt(req.params.id)
    );

    if (noteIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Note not found'
        });
    }

    const deleted = notes.splice(noteIndex, 1);

    res.json({
        success: true,
        message: 'Note deleted successfully',
        data: deleted[0]
    });
});
app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)})
