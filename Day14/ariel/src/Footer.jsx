import './Footer.css'
function Footer(){
    return(
        <div className='FooterSection'>
            <div className='firstPartOfFooterSection'>
                <p>Follow Us</p>
                <div>
                    <a href="https://linkedin.com"> linkedin</a>
                    <a href="https://instagram.com"> Instagram</a>
                    <a href="https://x.com"> X</a>
                </div>
            </div>
            <div className='secondPartOfFooterSection'>
                <div>P&G Family</div>
                <div>Terms & Condition</div>
                <div>Privacy</div>
                <div>Ad Choices </div>
                <div>Sitemap</div>
                <div>Your Privacy Choices</div>
            </div>
        </div>
    );
}
export default Footer