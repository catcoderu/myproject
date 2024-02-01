
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { IProducts } from '@/src/types'
import styles from "./style.module.css"


const url = 'http://localhost:8080/products'
const NewProducts = async () => {
    const { data } = await axios.get(url);    
    return (
        <div className={styles.cards}>
            <div className={styles.container}>
                {
                    data.map(({ id, image, description, price }:IProducts) => {
                        return (
                            
                            <div className={styles.product} key={id}>
                                <Image src={image} alt='Image' width={250} height={300} />
                                <div className='description'>{description}</div>
                                <div className='price'> <h3>{price}</h3></div>
                                
                                
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )


}


export default NewProducts