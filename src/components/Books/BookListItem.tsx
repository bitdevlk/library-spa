import { FunctionComponent, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import { render } from "react-dom";
import Confrmation from "../Alerts/Confirmation";

const BookListItem: FunctionComponent = () => {
    const handleOnEditClick = () => {

    }
    const handleOnDeleteClick = () => {

    }


    return (
        <Row className="bookListItem my-1 mx-0 d-flex align-items-center">
            <Col className="ps-0" xs={9}>
                <div className="fs-3 d-flex align-items-center py-1"> {1} . book name 1 </div>
            </Col>
            <Col className="d-flex justify-content-end bookActionIcons" xs={3}>
                <Edit className="btnEdit me-3" onClick={handleOnEditClick} />
                <Trash2 className="btnDelete" onClick={handleOnDeleteClick} />
            </Col>

            <Confrmation isVisible={true} />
        </Row>

    )
}

export default BookListItem;