import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import styles from "./styles.module.css"
import { IItems } from '@/src/types'


const url = 'http://localhost:8080/items'
const Items = async () => {
    const { data } = await axios.get(url);
    return (
        <div className={styles.container}>
            <div className={styles.itemCards}>
                {
                    data.map(({ id, title, image, description, price }: IItems) => {
                        return (

                            <div className={styles.product} key={id}>
                                <Image src={image} alt='Image' width={150} height={150} />
                                <div className='title'>{title}</div>
                                <div className='description'>{description}</div>
                                <div className='price'> <h3>{price}</h3></div>
                                <button className={styles.button} >INDI AL </button> 

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )


}


export default Items