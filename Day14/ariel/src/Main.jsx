import './Main.css'
function Main({ name, name1, name2 }) {
    return (

        <div className='MainSection'>
            <div>{name}</div>
            <div>{name1}</div>
            <div>{name2}</div>
            <div className='partOneOfMainSection'>
                <h2 >Laundry 101 - the Perfect Guide on How to do laundry</h2>

                <p> If you've ever wanted a comprehensive guide to refer to whenever you have a quick question about dosing washing powder or liquid detergent, sorting your laundry before washing, protecting your garments, or certain fabric care labels, this is your place to be.</p>
            </div>
            <div className='secondPartOfMainSection'>
                <img src="https://images.ctfassets.net/qozw5xyqia8b/46jy3L00qX5v2gi0EwKpxu/e0092313025880b1737e41f0a59b9ae0/bathroom_big.png?fm=avif" alt="" />

            </div>
        </div>
    );
}
export default Main