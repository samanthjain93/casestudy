import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";

function EditProduct({ fetchProduct, selectedProduct, setOpenEdit, openEdit }) {
  const [editedProduct, setEditedProduct] = useState(selectedProduct);

  useEffect(() => {
    setEditedProduct({ ...selectedProduct });
  }, [selectedProduct]);

  //close the Editmodal
  let closeModal = () => {
    setOpenEdit(false);
    setEditedProduct({
      pName: "",
      pPrice: "",
      pDesc: "",
      pImg: "",
    });
  };

  let EditFunction = async () => {
    try {
      let editRes = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${selectedProduct._id}`,
        editedProduct
      );
      if (editRes.data.error) {
        alert("something went wrong");
      } else {
        fetchProduct();
        closeModal();
        alert(editRes.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  console.log(selectedProduct);

  return (
    <div>
      <Modal show={openEdit}>
        <ModalHeader>Edit The Product</ModalHeader>
        <ModalBody>
          <Form>
            <div className="mb-2">
              <label>Name</label>
              <input
                name="name"
                type="text"
                value={editedProduct.pName}
                placeholder="insert Product name"
                onChange={(e) => {
                  setEditedProduct({ ...editedProduct, pName: e.target.value });
                }}
              ></input>
            </div>
            <div className="mb-2">
              <label>Price</label>
              <input
                name="price"
                label="price"
                value={editedProduct.pPrice}
                type="number"
                placeholder="insert Product price"
                onChange={(e) => {
                  setEditedProduct({
                    ...editedProduct,
                    pPrice: e.target.value,
                  });
                }}
              ></input>
            </div>
            <div className="mb-2">
              <label>Discription</label>
              <textarea
                name="disc"
                label="Description"
                value={editedProduct.pDesc}
                type="text"
                placeholder="insert description of your product"
                onChange={(e) => {
                  setEditedProduct({ ...editedProduct, pDesc: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="mb-2">
              <label>Image URL</label>
              <input
                value={editedProduct.pImg}
                name="imageUrl"
                type="text"
                placeholder="insert image URL"
                onChange={(e) => {
                  setEditedProduct({ ...editedProduct, pImg: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <Button onClick={EditFunction} className="mx-3">
                Update
              </Button>
              <Button onClick={closeModal}>Close</Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default EditProduct;
