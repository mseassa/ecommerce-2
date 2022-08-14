import React from 'react'
import styles from './Loader.module.css'

function Loader() {
    return (
        <>
            <div className={`${styles.loaderContainer} d-flex justify-content-center align-items-center py-5`}>
                <div className={`${styles.dottedLoader}`}>
                    
                </div>
            </div>
        </>
    )
}

export default Loader