import React from 'react';
import { Link } from 'react-router-dom';

const Song = (props) => {
    const { track } = props;

    return (
        <div className='md:w-1/2 p-2'>
            <div className='bg-gray-custom mb-4 shadow-custom rounded-md'>
                <div className='p-4'>
                    <h5 className='text-xl font-bold text-white mb-2'>{track.artist_name}</h5>
                    <p className='text-light-gray mb-4'>
                        <strong><i className='fas fa-play'></i> Song</strong>: {track.track_name}
                        <br />
                        <strong><i className='fas fa-compact-disc'></i> Album</strong>: {track.album_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className='bg-black-custom text-white p-2 rounded-md block text-center hover:bg-light-blue'>
                        <i className='fas fa-chevron-right'></i> View lyrics
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Song;
