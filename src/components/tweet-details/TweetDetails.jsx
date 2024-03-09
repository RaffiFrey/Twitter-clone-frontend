import React from 'react';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useNavigate} from "react-router-dom";
import TweetCard from "../home-section/TweetCard";
import {Divider} from "@mui/material";

export default function TweetDetails() {
    const navigate=useNavigate();
    function handleBack() {
        navigate(-1);
    }
    return (
        <React.Fragment>
            <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-50`}>
                <KeyboardBackspaceIcon className={'cursor-pointer'} onClick={handleBack} />
                <h1 className={'py-5 text-xl font-bold opacity-90 ml-5'}>Tweet</h1>
            </section>
            <section>
                <TweetCard/>
                <Divider sx={{margin: '2rem 0rem'}}/>
            </section>
            <section>
                {[1,1,1].map((item) => <TweetCard />)}
            </section>

        </React.Fragment>
    );
}