// components/Modal.js
import './modal.css'


interface Props {
  isOpen: boolean
  onClose: any
  modalType: string
  sweepData?: any
}

const CustomModal: React.FC<Props> = ({ isOpen, modalType, onClose, sweepData }) => {
  if (!isOpen) return null; // Don't render modal if it's closed

  return (

    <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: "rgba(0, 0, 0, 0.3)" }} aria-hidden="false">
      {/* sweepstake modal=>  modalType: sweepstake */}
      {modalType == "sweepstake" &&
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true" className='fs-30'>&times;</span>
            </button>
            <div className="modal-body px-4 text-left">
              {sweepData}
            </div>
          </div>
        </div>
      }
      
      {/* success modal=> modalType: resultModal */}
      {modalType == "resultModal" &&
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document" >
          <div className="modal-content" style={{ backgroundColor: "rgba(0, 0, 0)", borderRadius: 40 }}>
            <div className="modal-body px-4 text-center " >
              <div className='d-flex justify-content-center'>
                <img src="/next-images/Modal/success.png" alt="success img" />
              </div>
              <p className='mb-0 mt-2 text-white fs-20' style={{ fontWeight: 700, letterSpacing: 1.1 }}>Submission Successful</p>
              <p className='mb-0 mt-2 text-white fs-12' style={{ opacity: 0.5 }}>Thank you for reaching out! We’ll get back to you soon!</p>
              <a onClick={onClose}
                className="btn btn-soft-primary btn-round d-flex justify-content-center mb-2 mt-4 mx-auto"
                style={{ width: "180px", padding: "10px 0px" }}>Done</a>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CustomModal
