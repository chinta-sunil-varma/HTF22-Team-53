import React from 'react'
import { Toolbar, Box, AppBar, IconButton, Typography, Button, Paper, TextareaAutosize } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// var base64Img = require('base64-img');
import axios from 'axios'


export const Alumni = () => {
    const [img, setImg] = React.useState({})
    const [textArea, setTextArea] = React.useState('')
    console.log(img);
    function change(e) {
        const data = e.target.files
        console.log(data[0]);
        // let reader=new FileReader()
        // reader.readAsDataURL(data[0])
        // reader.onload=((e)=>
        // {
        //   console.log(e.target.result );
        //   const data=e.target.result
        //   setImg({data:JSON.stringify(data)})


        // })
        setImg(data[0])

    }
    function textupdate(e)
    {
        const {value}=e.target
        setTextArea(value)
    }

    function submit(e) {

        if (img === {}) {

        }
        else {
            const form_data = new FormData()
            form_data.append('image', img)
            form_data.append('desc',textArea)
            form_data.append('ID','sunil')

            axios.post('http://localhost:5000/alumni/insert', form_data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((result) => {
                console.log(result.data);

            }).catch((err) => {
                console.log(err);
            });
        }
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dash-Board
                        </Typography>
                        <Button color="inherit">Chat</Button>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography variant='h4' component={'h2'} sx={{ fontFamily: 'Roboto, sans-serif', margin: '10px' }} >
                Everything Starts with a Intro.....
            </Typography>
            <Box>
                <Typography variant='body2' component={'p'} >Everything Starts when you start introducing yourself to
                    others. This simple trick is capable of bringing enormous joy to ones [Misery too :( ]. So, gear up to
                    reaveal as good info as yourself to others so that you can be helpful to someone who desperatley needs you
                    the most.  So the question is
                    <br></br>

                </Typography>
                <Typography variant='h6' textAlign={'center'} margin={3} fontWeight='bolder'>How can you make to Express yourself as Good as yourself? </Typography>
                <Typography variant='body2' >Answer to this question is very simple- Yourself! Make a blog to reach out the needy now! </Typography>
            </Box>
            <Typography variant='h6' textAlign={'center'} margin={3} fontWeight='bolder'>Tell About Yourself </Typography>
            <Box className='details'>
                <Paper elevation={6} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
                    <Typography variant='h6' textAlign={'center'} margin={2}
                    fontWeight='bolder'
                    >Upload your image</Typography>
                    <br></br>

                    <input type='file' onChange={change} required />
                    <Typography variant='h6' textAlign={'center'} 
                    fontWeight='bolder'
                    margin={2}>your description</Typography>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        
                        placeholder="your Desc :)"
                        style={{ width: 400 ,margin:'8px'}}
                        value={textArea}
                        onChange={textupdate}
                        required
                    />
                    <Button type='submit' variant='contained' onClick={submit}>submit your request</Button>


                </Paper>
            </Box>
        </>
    )
}
