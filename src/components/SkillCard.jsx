import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
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
                    <h3 className='skill-card-title'>{skillName}</h3>
                    <CircularProgress variant="determinate" style={{ color: 'yellow' }} value={skillLevel} />
                    <h4>Skill Level: {skillLevel}</h4>
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
                        {skillName}
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