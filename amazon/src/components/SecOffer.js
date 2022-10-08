import React from 'react'

const SecOffer = () => {
    return (
        <>
            <div className='SecOffer'>
            <div className='bigbox'>
                <div className='box'>
                    <h2 style={{marginTop:'-50px'}}>Clothing</h2>
                    <img src='/img/offers/clothing.jpg' />
                    <img src='/img/offers/footwear.jpg' style={{ marginLeft: '20px' }} /><br />
                    <img src='/img/offers/watches.jpg' />
                    <img src='/img/offers/bags.jpg' style={{ marginLeft: '20px' }} />

                </div>
                <div className='box'>
                <h2 style={{marginTop:'-50px'}}>Up to 70% off |kitchen &...</h2>
                    <img src='/img/offers/s1.jpg' />
                    <img src='/img/offers/s2.jpg' style={{ marginLeft: '20px' }} /><br />
                    <img src='/img/offers/s3.jpg' />
                    <img src='/img/offers/s4.jpg' style={{ marginLeft: '20px' }} />

                </div>


                <div className='box'>
                <h2 style={{marginTop:'-50px'}}>  Up to 20% off | Travel tickets</h2>
              
                    <img src='/img/offers/plan.jpg' />
                    <img src='/img/offers/train.jpg' style={{ marginLeft: '20px' }} /><br />
                    <img src='/img/offers/bus.jpg' />
                    <img src='/img/offers/travel-bag.jpg' style={{ marginLeft: '20px' }} />

                </div>
            </div>

            <img src="/img/offers/emi.jpg" alt="" style={{
                marginLeft: '150px',
                marginTop:'100px'
        }}/>
            </div>
        </>
    )
}

export default SecOffer