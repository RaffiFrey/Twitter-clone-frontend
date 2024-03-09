import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    outline: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

export default function SubscriptionModal({open, handleClose}) {
    const [plan, setPlan] = useState('annually');

    const features = ['Prioritized rankings in conversations and search',
        'See approximately twice as many Tweets between ads in your For You and Following timelines.',
        'Add bold and italic text in your Tweets.',
        'Post longer videos and even in 1080p',
        'Edit Tweets, Bookmark Folders and early access to new features.'];

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={'flex items-center space-x-3'}>
                        <IconButton onClick={handleClose} aria-label={'delete'}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className={'flex justify-center py-10'}>
                        <div className={'w-[80%] space-y-10'}>
                            <div className={'p-5 rounded-md flex items-center justify-between bg-slate-200 shadow-lg'}>
                                <h1 className={'text-xl pr-5'}>Subscribers with a verified phone number will get a blue checkmark once approved.</h1>
                                <img className={'w-24 h-24'} src={'https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png'} alt={'blue subscriber batch'} />
                            </div>
                            <div className={'flex justify-between border rounded-full px-5 py-3 bg-slate-200 shadow-lg'}>
                                <div>
                                    <span onClick={() => setPlan('annually')} className={`${plan ==='annually' ? 'text-black' : 'text-gray-400'} cursor-pointer`}>Annually</span>
                                    <span className={'ml-5 text-green-600 text-sm'}>SAVE 12%</span>
                                </div>
                                <p onClick={() => setPlan('monthly')} className={`${plan ==='monthly' ? 'text-black' : 'text-gray-400'} cursor-pointer`}>
                                    Monthly
                                </p>
                            </div>
                            <div className={'space-y-3'}>
                                {features.map((item) => <div className={'flex items-center space-x-5'}>
                                    <FiberManualRecordIcon sx={{width: '7px', height: '7px'}}/>
                                    <p className={'text-sm'}>{item}</p>
                                </div>)}
                            </div>
                            {plan === 'annually' ? (<div
                                className={'cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'}>
                                <span className={'line-through italic'}>230,40 €</span>
                                <span className={'px-5'}>201,60 € year</span>
                            </div>) :
                                (<div className={'cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'}>
                                <span className={'px-5'}>230,40 €</span>
                                </div>)}
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
