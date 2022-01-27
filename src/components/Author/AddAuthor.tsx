import React, { FunctionComponent, PropsWithChildren } from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
type AddAuthorPropsModel = {
    handleOnAddAuthorClick: () => void;
}
const AddAuthor: React.FC<AddAuthorPropsModel> = (props: PropsWithChildren<AddAuthorPropsModel>) => {
    const { handleOnAddAuthorClick } = props;
    return (
        <Row className="my-4 addAuthorSection">
            <Col className="px-0 d-flex align-items-center ">
                <Plus className="addIcon" onClick={handleOnAddAuthorClick} />
                <div className="d-inline fs-4 ms-1" onClick={handleOnAddAuthorClick}>Add Author</div>
            </Col>
        </Row>
    );
}
export default AddAuthor;