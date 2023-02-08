import { TableHead } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function Product() {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  let [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  let fetchProduct = async () => {
    let result = await axios.get(
      "https://p-9x7e.onrender.com/products/products"
    );
    if (result.data.error) {
      alert("some error occered in fetch");
    } else {
      let resultProduct = result.data.data;
      setProduct(resultProduct);
    }
  };

  let deleteProduct = async (id) => {
    try {
      let resData = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${id}`
      );
      if (resData.data.error) {
        alert("something went wrong");
      } else {
        alert(resData.data.message);
        fetchProduct();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  //addProduct modal open
  let modalOpen = () => {
    setOpen(true);
  };
  //EditProduct modal open
  let modalEditOpen = (data) => {
    setOpenEdit(true);
    setSelectedProduct(data);
  };

  return (
    <div>
      <Table className="table table-striped">
        <TableHead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Product image</th>
            <th>
              <Button onClick={modalOpen} >Add Product</Button>
            </th>
          </tr>
        </TableHead>
        <tbody>
          {product.map((element) => {
            return (
              <tr id={element._id}>
                <td>{element._id}</td>
                <td>{element.pName}</td>
                <td>{element.pDesc}</td>
                <td>{element.pPrice}</td>

                <td>
                  <img src={element.pImg} height="20px" width="20px"></img>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      modalEditOpen(element);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      deleteProduct(element._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {open && (
        <AddProduct
          open={open}
          setOpen={setOpen}
          product={product}
          setProduct={setProduct}
          fetchProduct={fetchProduct}
        />
      )}
      {openEdit && (
        <EditProduct
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          fetchProduct={fetchProduct}
        />
      )}
    </div>
  );
}

export default Product;
