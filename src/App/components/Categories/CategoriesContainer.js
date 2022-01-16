import React, { useState, useEffect } from "react";
import styles from './Categories.module.css';
import CategoryCard from "./CategoryCard";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const CategoriesContainer = () => {

    useEffect (() => {
        localStorage.clear();
    }, [])

    const [filterInput, setFilterInput] = useState('');
    console.log(filterInput);

    let categoryToImageMap = {
        'Aerodynamics': 'https://wallpapercave.com/wp/wp9250064.jpg',
        'Astronomy': 'https://wallpaperaccess.com/full/281737.jpg',
        'Astrophysics': 'https://cutewallpaper.org/21/astrophysics-wallpapers/Free-download-an-equation-of-the-lord-by-TheGeminiSage-.jpg',
        'Communications and Radar': 'https://images3.alphacoders.com/248/thumb-1920-248907.jpg',
        'Composite Materials' : 'https://rokmangear.com/wp-content/uploads/2018/01/Carbon-fiber-best-wallpaper.jpg',
        'Instrumentation and Photography': 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        'Optics': 'https://wallpaperaccess.com/full/364465.jpg',
        'Plasma Physics': 'https://c1.wallpaperflare.com/preview/320/813/216/sun-coronal-mass-ejection-energy-space.jpg',
        'Solar Physics': 'https://w0.peakpx.com/wallpaper/101/526/HD-wallpaper-solar-system-moon-sun-planet-space-nature-earth.jpg',
        'Space Radiation': 'https://ak.picdn.net/shutterstock/videos/4039753/thumb/1.jpg'

    }


    return (
        <>
            <div className={styles.filterContainer}>

                <div className={styles.filterBar}>
                    <label>Filter By</label>
                    <InputGroup className={styles.searchBar} >
                        <InputGroupAddon addonType="prepend">
                        </InputGroupAddon>
                        <Input placeholder="Search term" onChange={(e)=>setFilterInput(e.target.value)}/>
                    </InputGroup>
                    <br />
                </div>

            </div>
            <div className={styles.container}>

                {
                    Object.entries(categoryToImageMap).map((key, value) => {
                    
                        if (filterInput == "") {
                            return <CategoryCard category={key} imageUrl={value} />
                        } else if (key[0].toLowerCase().includes(filterInput.toLowerCase())) {
                            return <CategoryCard category={key} imageUrl={value} />
                        }
                  
                            
                        
                       
                    })
                }

            </div>
        </>
    )
}

export default CategoriesContainer;