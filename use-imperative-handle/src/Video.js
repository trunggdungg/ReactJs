import video1 from './videos/Download.mp4'
import { forwardRef } from 'react';
function Video(props,ref) {
    return (
        <video
            src={video1}
            width={280}
            ref={ref}// ref này chính là videoRef trong App.js
        >
        </video>
    )

}

export default forwardRef(Video);