import { Button, Modal } from "react-bootstrap";

function ModalLeitner(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    About Leitner
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="p-1">
                    The leitner box is a way to memorize information.
                    This method is based on a timed review of the content so
                    that after reviewing several times at scheduled intervals,
                    the information is transferred to your long-term memory.
                    The words that you want to memorize are set in the form of
                    flash cards, then these cards are asked 5 times and at certain
                    intervals, for example, every 3 minutes, and if you remember t
                    he meaning, it is transferred to a later stage. This word return
                    s to the first step and the review cycle starts from the beginning.
                    If you remember in five consecutive steps, it will be transferred to
                    the learned words.
                </p>
            </Modal.Body>

        </Modal>
    );
}

export default ModalLeitner