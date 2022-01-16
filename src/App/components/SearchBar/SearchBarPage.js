import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import styles from './SearchBarPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSelectedCategory } from '../../State/Category/CategoryActions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const SearchBarPage = () => {

   useEffect (()=> {
    localStorage.clear();
    dispatch(addSelectedCategory(''))

   }, [])

    let selectedCategory = useSelector((state) => state.CategoryReducer.category);
    console.log("categ", selectedCategory);
   
    const dispatch = useDispatch();
    const history = useHistory();

    const pressEnterHandler = (event, searchType) => {
        console.log(searchType);
        if (event.key === 'Enter') {
           
            event.preventDefault();
            event.stopPropagation();

            switch(searchType) {
                case ('keyword'): 
                    localStorage.setItem('searchKeyword', event.target.value);
                    history.push('/category');
                    break;

                case('author'):
                    localStorage.setItem('searchAuthor', event.target.value);
                    history.push('/category');
                    break;
                
            }

            

        }
    }

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleFilter = () => {
        setDropDownOpen(!dropDownOpen);
    }

    const [selectedOrganization, setSelectedOrganization] = useState('Select Organization');

    const filterHandler = (value) => {
        setSelectedOrganization(value)
        localStorage.setItem('searchOrganization', value);
       
    }

    const searchButtonHandler = () => {
        history.push('/category');
    }

    return (

        <div>
            <div style={{marginLeft: '5rem'}}>
            <span > Keyword Search </span>
            <div className={styles.container}>
                
                <InputGroup className={styles.searchBar} >
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <Input placeholder="Search keyword" onKeyDown={(e) => pressEnterHandler(e,'keyword')} />
                </InputGroup>

                <br />
            </div>

            <span> Author Search </span>
            <div className={styles.container}>
                
                <InputGroup className={styles.searchBar} >
                    <InputGroupAddon addonType="prepend">
                    </InputGroupAddon>
                    <Input placeholder="Search author" onKeyDown={(e) => pressEnterHandler(e, 'author')} />
                </InputGroup>

                <br />
            </div>

            <div >
                <span>Search by Organization</span>
                <div >
                <Dropdown isOpen={dropDownOpen} toggle={toggleFilter} style={{marginTop: '1rem'}}>
                    <DropdownToggle caret>
                       {selectedOrganization}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={(e) => filterHandler("NASA Langley Research Center")}>NASA Langley Research Center</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("NASA Ames Research Center")}>NASA Ames Research Center</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("NASA Glenn Research Center")}>NASA Glenn Research Center</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("NASA Marshall Space Flight Center")}>NASA Marshall Space Flight Center</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Smithsonian Astrophysical Observatory")}>Smithsonian Astrophysical Observatory</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Button outline color="primary" style={{marginTop: "1rem"}} onClick={searchButtonHandler}>Search</Button>{' '}
                </div>
            </div>

            </div>

           </div>
    )

}
export default SearchBarPage;