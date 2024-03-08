import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Admin() {
  const [formHeight, setFormHeight] = useState({
    height: "auto",
  });
  const [formName, setFormName] = useState("Update Form");
  const [itemVisible, setItemVisible] = useState(true);
  const [updateStyle, setUpdateStyle] = useState({
    backgroundColor: "#198754",
    color: "white",
  });
  const [deleteStyle, setDeleteStyle] = useState({
    backgroundColor: "",
    color: "",
  });

  const [deleteItem, setDeleteItem] = useState({
    foodType:"",
    foodName:""
  });
  const [details, setDetails] = useState({
    foodType: "",
    foodName: "",
    price: null,
    image: "",
    calouries: null,
    proteins: "",
  });
  const formDetails = [
    {
      key: "foodType",
      data: {
        name: "Food Type",
        type: "text",
        placeholder: "Enter Food Item Type",
        key: "foodType",
        id: "AdminFormfoodType",
        value: details.foodType,
      },
    },
    {
      key: "foodName",
      data: {
        name: "Food Name",
        type: "text",
        placeholder: "Enter Food Item Name",
        key: "foodName",
        id: "AdminFormfoodName",
        value: details.foodName,
      },
    },
    {
      key: "price",
      data: {
        name: "Price",
        type: "number",
        placeholder: "Enter Food Item Price",
        key: "price",
        id: "AdminFormprice",
        value: details.price,
      },
    },
    {
      key: "image",
      data: {
        name: "Image Path",
        type: "text",
        placeholder: "Enter Food Path",
        key: "image",
        id: "AdminFormimage",
        value: details.image,
      },

      // value:""
    },
    {
      key: "calouries",
      data: {
        name: "Calouries",
        type: "number",
        placeholder: "Enter Calouries Details",
        key: "calouries",
        id: "AdminFormcalouries",
        value: details.calouries,
      },

      // value:""
    },
    {
      key: "proteins",
      data: {
        name: "Protein Type",
        type: "text",
        placeholder: "Enter Protein Type",
        key: "proteins",
        id: "AdminFormproteins",
        value: details.proteins,
      },
    },
  ];

  const handleFetch = async (e) => {
    e.preventDefault();
    if (
      details.foodType === "" ||
      details.foodName === "" ||
      details.price === null ||
      details.image === ""
    ) {
      alert("Enter Required Data");
    } else {
      const data = {
        foodType: details.foodType.toString(),
        details: {
          foodType: details.foodType.toString(),
          foodName: details.foodName.toString(),
          image: details.image.toString(),
          price: parseInt(details.price.toString()),
          calories: parseInt(details.calouries.toString()),
          protein: details.proteins.toString(),
        },
      };
      const res = await fetch("https://foodorderwebsite.onrender.com/updatefooditems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        alert("updated successfully");
        setDetails({
          foodType: "",
          foodName: "",
          price: "",
          image: "",
          calouries: "",
          proteins: "",
        });
      } else {
        alert("invalid data or data already exists");
        console.log(json.success);
      }
    }
  };

  const handleDelete = async(e) => {
    e.preventDefault();
    if(deleteItem.foodType===""||deleteItem.foodName===""){
        alert("Fill All the Fields");
    }
    else{
      const res =await fetch("https://foodorderwebsite.onrender.com/deleteitem",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(deleteItem)
      });
      const json=await res.json();
      console.log(json)
      if(json.success){
        alert("Deleted Successfully");
        setDeleteItem({foodType:"",foodName:""})
      }
      else{
        if(json.msg==="Invalid Input Data"){
          alert("Enter Data that present in DB")
        }
        else{
          alert("Getting an error msg: ",json.msg);
        }

      }
    }
    
  };
  const onChangeHandler = (e) => {
    const deleteItemName=(e.target.id).slice(6);
   setDeleteItem({ ...deleteItem, [deleteItemName]: e.target.value });
  };

  const getForm = (e) => {
    console.log(e.target.id);
    if (e.target.id === "form-update") {
      setFormHeight({
        height: "auto",
      });
      setItemVisible(true);
      setFormName("Update Form");
      setUpdateStyle({
        backgroundColor: "#198754",
        color: "white",
      });
      setDeleteStyle({
        backgroundColor: "",
        color: "",
      });
    } else {
      setFormHeight({
        height: "90vh",
      });
      setItemVisible(false);
      setFormName("Delete Form");
      setDeleteStyle({
        backgroundColor: "#198754",
        color: "white",
      });
      setUpdateStyle({
        backgroundColor: "",
        color: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div
        className="container"
        id="adminContentDiv"
        style={{
          backgroundColor: "#ededed",
          padding: "0px 0px  20px 0px",
          ...formHeight,
        }}
      >
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="col-12 col-md-7 col-lg-5"
            style={{
              border: "2px solid #198754",
              borderRadius: "5px",
              padding: "1px 0px",
              margin: "20px 0px 10px 0px",
            }}
          >
            <div className="row">
              <div className="col-6">
                <div
                  className="w-100"
                  id="form-update"
                  onClick={getForm}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: "3px 0px",
                    borderRadius: "5px",
                    margin: "0px 1px",
                    ...updateStyle,
                  }}
                >
                  GetUpdateForm
                </div>
              </div>
              <div
                className="col-6"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="w-100"
                  id="form-delete"
                  onClick={getForm}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: "3px 0px",
                    borderRadius: "5px",
                    margin: "0px 1px",
                    ...deleteStyle,
                  }}
                >
                  GetDeleteForm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="col-12 col-md-7 col-lg-5"
            style={{
              border: "3px solid #198754",
              borderRadius: "5px",
              padding: "10px 5px",
            }}
          >
            <form id="admin-page-form">
              <center>
                <h2 id="admin-heading" style={{ color: "white" }}>
                  {formName}
                </h2>
              </center>
              <hr />
              <div className="form row" id="admin-form-fields">
                {itemVisible ? (
                  formDetails.map((item) => {
                    return (
                      <div
                        className="col-12 mb-3"
                        id="form-field"
                        key={item.key}
                        style={{ marginTop: "-5px" }}
                      >
                        <label
                          for={item.data.id}
                          class="form-label"
                          style={{ marginTop: "-5px" }}
                        >
                          {item.data.name}
                        </label>
                        <input
                          {...item.data}
                          className="form-control"
                          required="true"
                          aria-required
                          style={{ margin: "-5px 0px" }}
                          onChange={(e) => {
                            const text = e.target.id.slice(9);
                            setDetails({
                              ...details,
                              [text]: [e.target.value],
                            });
                          }}
                        />
                      </div>
                    );
                  })
                ) : (
                  <>
                    <div
                      className="col-12 mb-3"
                      id="form-field"
                      style={{ marginTop: "-5px" }}
                    >
                      <label class="form-label" style={{ marginTop: "-5px" }}>
                        Food Type
                      </label>
                      <input
                        className="form-control"
                        id="deletefoodType"
                        placeholder="Enter Food Item Type"
                        required
                        aria-required
                        style={{ margin: "-5px 0px" }}
                        onChange={onChangeHandler}
                        value={deleteItem.foodType}
                      />
                    </div>
                    <div
                      className="col-12 mb-3"
                      id="form-field"
                      style={{ marginTop: "-5px" }}
                    >
                      <label class="form-label" style={{ marginTop: "-5px" }}>
                        Food Name
                      </label>
                      <input
                        className="form-control"
                        id="deletefoodName"
                        placeholder="Enter Food Item Name"
                        required
                        aria-required
                        style={{ margin: "-5px 0px" }}
                        onChange={onChangeHandler}
                        value={deleteItem.foodName}
                      />
                    </div>
                  </>
                )}
                {itemVisible ? (
                  <div className="col-12" id="admin-update-button">
                    <button
                      className="btn btn-success w-100"
                      onClick={handleFetch}
                    >
                      {" "}
                      Add Item{" "}
                    </button>
                  </div>
                ) : (
                  <div
                    className="col-12"
                    id="admin-delete-button"
                    style={{ display: "flex", justifyContent: "right" }}
                  >
                    <button
                      className="btn btn-success w-100"
                      onClick={handleDelete}
                    >
                      {" "}
                      Delete Item{" "}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
