import React from 'react';

const ModalData = ({modalData}) => {
    return (
        <div>
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
  <label class="modal-box relative" for="">
    <p class="py-4 text-black font-serif font-semibold text-lg">{modalData.title}</p>
  </label>
</label></div>
    );
};

export default ModalData;