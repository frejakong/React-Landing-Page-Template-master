
export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Listen from the future</h2>
          <p>
            Self-management music community
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <img src="img/universe.jpg" className="img-responsive" alt="" />{" "}
                </div>

          </div>
            <div className='portfolio-items'>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                    <img src="img/connect.jpg" className="img-responsive" alt="" />{" "}
                </div>

            </div>
            <div className='portfolio-items'>

                <div className='col-sm-6 col-md-4 col-lg-4'>
                    <img src="img/world.jpg" className="img-responsive" alt="" />{" "}
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}
