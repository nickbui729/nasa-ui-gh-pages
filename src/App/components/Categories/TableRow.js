import React, { useState, useEffect } from "react";
import styles from './TableStyles.module.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// props is a singular article
const TableRow = (props) => {
    //console.log("xx", props.article.center.name)
    // let article = props.article;
    // console.log("single article", article);
    // let outer = article.authorAffiliations;
    // outer.map( (item)=> {console.log(item.meta.author.name)} )

    useEffect (() => {
        if (!props.article.downloads[0]) {
            setButtonColor('secondary');
            setButtonStatus(true);
            setButtonText('No PDF');
        }

    }, [])

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener', 'noreferrer');
        if (newWindow) newWindow.opener = null;

    }

    const [buttonColor, setButtonColor] = useState('primary');
    const [buttonText, setButtonText] = useState('Open PDF');
    const [buttonStatus, setButtonStatus] = useState(false);

    return (

        <>
            <tr className={styles.trow} onClick={() => { setModal(true) }}>
                <th> {props.articleId} </th>

                <td className={styles.articleTitle} >
                    {props.article.title && props.article.title}
                </td>


                <td className={styles.authorName}> {props.article.authorAffiliations && props.article.authorAffiliations.map((item) => {
                    return item.meta.author.name + " "
                })}
                </td>

                <td>
                    {
                        props.article.distributionDate && props.article.distributionDate.substring(0, 7)
                    }
                </td>

                <td>
                    {
                        props.article.center && props.article.center.name
                    }
                </td>

            </tr>


            <div>

                <Modal isOpen={modal} toggle={toggleModal} centered="true" size="lg">
                    <ModalHeader toggle={toggleModal} style={{ margin: "1rem" }}>Additional Information</ModalHeader>
                    <ModalBody style={{ margin: "1rem" }}>
                        <h5>{props.article.title}</h5>
                        <br></br>
                        <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                            {props.article.abstract && props.article.abstract}
                        </p>
                        <div style={{ marginLeft: "2rem", marginRight: "2rem" }}> <span style={{ fontStyle: "italic" }}>Author(s):</span>  {props.article.authorAffiliations && props.article.authorAffiliations.map((item) => {
                            return item.meta.author.name + "  "
                        })} </div>
                        <br></br>
                        <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                            <span style={{ fontStyle: "italic" }}>Date Published: </span> {
                                props.article.distributionDate && props.article.distributionDate.substring(0, 7)
                            }
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        
                        <Button disabled={buttonStatus} color={buttonColor} onClick={(e) => {
                            e.preventDefault();
                            openInNewTab(`https://ntrs.nasa.gov${props.article.downloads[0].links.pdf}`)
                                                   
                        }}>{buttonText}</Button>{' '}

                        <Button color="secondary" onClick={toggleModal}>Cancel</Button>

                    </ModalFooter>
                </Modal>

            </div>

        </>

    )


}

export default TableRow;