import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiLinkedin } from 'react-icons/si';
import { SocialIcon } from 'react-social-icons';

const SocialTab = () => {
    return (
        <div>
            <p className='text-center mb-4 text-sm font-medium'>Or sign in with</p>
            <div className='divider'></div>
            
            <div className='justify-center gap-4 text-3xl flex mb-5'>
                <button className=''>
                <FcGoogle />
                </button>
                <button className=''>
                <FaGithub />
                </button>
                <button>
                <SiLinkedin />
                </button>
                <button>
                <BsTwitterX />
                </button>
            </div>
        </div>
    );
};

export default SocialTab;