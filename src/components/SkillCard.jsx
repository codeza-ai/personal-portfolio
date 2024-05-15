import CircularProgress from '@mui/material/CircularProgress';
// import { CircularProgress } from "@nextui-org/react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    display: 'flex',
    gap : 10,
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'whitesmoke',
    boxShadow: 24,
    borderRadius: 5,
    p: 4
};

import React from 'react';
import './SkillCard.css';


const SkillCard = ({ skillName, skillLevel, imgSource, skillDesc }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="skill-card" onClick={handleOpen}>
                <img src={imgSource} alt={skillName} className='skill-image' />
                <div className='skill-card-desc'>
                    <h4 className='skill-card-title'>{skillName}</h4>
                    <CircularProgress variant="determinate" style={{ color: 'orange' }} value={skillLevel} />
                    <h5>Skill Level: {skillLevel}</h5>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <CircularProgress variant="determinate" style={{ color: 'green' }} value={skillLevel} />
                        <h5>{skillName}</h5>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {skillDesc}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default SkillCard;