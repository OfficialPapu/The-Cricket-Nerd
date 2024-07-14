const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 p-4">
                <div className="footer-content text-center">
                    <h4 className="text-white">THE CRICKET NERD</h4>
                    <p className="text-gray-300">
                        "The Cricket Nerd: A one place digital destination for everything related to Nepal Cricket.<br/>
                        NEWS || INSIGHTS || PREVIEW || ANALYSIS
                        <br />
                        We bring all the analysis, insights and updates from on and off the field of Nepal Cricket."
                    </p>
                    <h3 className="text-white mt-4">Follow Us On</h3>
                    <ul className="socials flex justify-center mt-2 space-x-4">
                        <li>
                            <a href="https://www.facebook.com/thecricketnerd01?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-facebook-circle text-2xl'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.me/j/AbbAlJ2aLbmgcVxE/">
                                <i className='bx bxl-messenger text-2xl'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@thecricketnerd17?si=te9XFsUcdo8dGq9T" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-youtube text-2xl'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/thecricketnerd17?igsh=MXMwamxrOWMyeWh1" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-instagram text-2xl'></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom rounded-lg bg-black p-2 mt-4 text-center">
                    <p className="text-white">Copyright © 2024 The year of first publication of the work: All the rights are reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
