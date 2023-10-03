import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div className='footer_main_container'>
            <div className='footer_parent bg-dark'>
                <footer className="text-white bg-dark">
                    <div className="child">
                        <em>Copyright </em>
                        <em className='bi-c-circle'> 2023: Mauricio Avendaño   </em>
                    </div>
                    <div className='child'>
                        <a href="https://github.com/Sirmauricio10000" target="_blank" className='a'>
                            <em className='bi-github icon em' >  </em>
                        </a>
                        <a href="https://www.facebook.com/Mauricio1907" target="_blank" className='a'>
                            <em className='bi-facebook icon em'>  </em>
                        </a>
                        <a href="https://www.linkedin.com/in/mauricio-avenda%C3%B1o-gonzalez-00032821b" target="_blank" className='a'>
                            <em className='bi-linkedin icon em'>  </em>
                        </a>
                        <a href="http://envmau.eba-xam5kmwy.us-west-2.elasticbeanstalk.com" target="_blank" className='a'>
                            <em className='bi-briefcase-fill icon em'>  </em>
                        </a>
                    </div>
                </footer>
            </div>
        </div>

    )
}