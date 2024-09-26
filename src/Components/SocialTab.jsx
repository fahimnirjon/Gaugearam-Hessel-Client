import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiLinkedin } from 'react-icons/si';
import { SocialIcon } from 'react-social-icons';
import useAuth from '../hooks/useAuth';
import useAxiosOpen from '../hooks/useAxiosOpen';

const SocialTab = () => {
    const {googleSignIn} = useAuth();
    const axiosOpen = useAxiosOpen();

    const handleGoogle = () =>{
        googleSignIn()
        .then(result=> {
            console.log(result.user);
            const userInfo = {
                email: result.user.email,
                name: result.user?.displayName
            }
            axiosOpen.post('/users', userInfo)
            .then(res=>{
                console.log(res.data)
            })
        })
    }
    return (
        <div>
            <p className='text-center mb-4 text-sm font-medium'>Or sign in with</p>
            <div className='divider'></div>
            
            <div className='justify-center gap-4 text-3xl flex mb-5'>
                <button onClick={handleGoogle} className=''>
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