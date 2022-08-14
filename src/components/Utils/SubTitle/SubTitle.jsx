import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SubTitle.css'

const SubTitle = ({title, btntitle, pathText}) => {
  return (
<>
<Container fluid className='bg-white'>
<div className="d-flex justify-content-between align-items-center py-2 mb-4">
            <div className=''>
              <h2 className="sub-title">{title}</h2>
            </div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="btn btn-primary rounded-0">{btntitle}</div>
                </Link>
            ) : null}
        </div>
</Container>





</>
  )
}

export default SubTitle