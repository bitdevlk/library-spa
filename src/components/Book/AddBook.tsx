import React, { FunctionComponent, PropsWithChildren } from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
type AddBookPropsModel = {
    handleOnAddBookClick: () => void;
}
const AddBook: React.FC<AddBookPropsModel> = (props: PropsWithChildren<AddBookPropsModel>) => {
    const { handleOnAddBookClick } = props;
    return (
        <Row className="my-4 addBookSection">
            <Col className="px-0 d-flex align-items-center ">
                <Plus className="addIcon" onClick={handleOnAddBookClick} />
                <div className="d-inline fs-5 ms-1 " onClick={handleOnAddBookClick}>Add Book</div>
            </Col>
        </Row>
    );
}
export default AddBook;