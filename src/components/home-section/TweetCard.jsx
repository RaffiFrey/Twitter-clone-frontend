import React, {useState} from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import {Avatar, Button, Menu, MenuItem} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {MoreHoriz} from "@mui/icons-material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function TweetCard() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    function handleClick(event){
        setAnchorEl(event.currentTarget);
    };
    function handleClose() {
        setAnchorEl(null);
    };

    function handleDelete() {
        handleClose();
    }

    function handleOpenReplayModel() {
        console.log('open replay model');
    }

    function handleCreateRetweet() {
        console.log('create retweet');
    }

    function handleLikeTweet() {
        console.log('handle like tweet');
    }

    return (
        <div className={''}>
            {/*
               <div className={'flex items-center font-semibold text-gray-700 py-2'}>
                <RepeatIcon />
                <p>You Retweet</p>
            </div>
            */}
            <div className={'flex space-x-5'}>
                <Avatar onClick={() => navigate(`/profile/${5}`)}
                        className={'cursor-pointer'}
                        alt={'username'}
                        src={'https://lumiere-a.akamaihd.net/v1/images/clone-wars-chronological-order-ahsoka_tall_6768d628.jpeg?region=336,0,864,864'}
                />
                <div className={'w-full'}>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex cursor-pointer items-center space-x-2'}>
                            <span className={'font-semibold'}>Raphael Frey</span>
                            <span className={'text-gray-600'}>@Chixsaw . 2m</span>
                            <img className={'ml-2 w-5'}
                                 src={'https://abs.twimg.com/responsive-web/client-web/verification-card-v2@3x.8ebee01a.png'}
                                 alt={''}/>
                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHoriz/>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}>
                                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                                <MenuItem onClick={handleDelete}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className={'mt-2'}>
                        <div onClick={()=>navigate(`/tweet/${3}`)} className={'cursor-pointer'}>
                            <p className={'mb-2 p-0'}>even though i don't like all, the franchise is still nice</p>
                            <img className={'w-[100%] w-full border border-gray-400 p-5 rounded-md'}
                                 src={'https://i.redd.it/bckhazhsx8vb1.jpg'} alt={''}/>
                        </div>
                        <div className={'py-5 flex flex-wrap justify-between items-center'}>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <ChatBubbleOutlineIcon className={'cursor-pointer'} onClick={handleOpenReplayModel}/>
                                <p>43</p>
                            </div>
                            <div className={`${true ? 'text-pink-600' : 'text-gray-600'} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetweet}
                                            className={'cursor-pointer'}/>
                                <p>5</p>
                            </div>
                            <div className={`${true ? 'text-pink-600' : 'text-gray-600'} space-x-3 flex items-center`}>
                                {true ? <FavoriteIcon onClick={handleLikeTweet}
                                                      className={'cursor-pointer'}/> :
                                    <FavoriteBorderIcon onClick={handleLikeTweet}
                                                        className={'cursor-pointer'}/>}
                                <p>54</p>
                            </div>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <BarChartIcon className={'cursor-pointer'} onClick={handleOpenReplayModel}/>
                                <p>430</p>
                            </div>
                            <div className={'space-x-3 flex items-center text-gray-600'}>
                                <FileUploadIcon className={'cursor-pointer'} onClick={handleOpenReplayModel}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}