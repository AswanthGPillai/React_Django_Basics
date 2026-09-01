import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')


    const fetchItems = async () => {
        try {
            const res = await axios.get('https://dummyjson.com/products')
            setData(res.data.products)

        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        fetchItems()
    }, [])



    const searchItem = data.filter(items => items.title.toLowerCase().startsWith(search.toLowerCase()))


    // Theme constants based on the reference image
    const ORANGE_COLOR = "#f98f3e";
    const ORANGE_BG_LIGHT = "#fff3ea";

    return (
        <div>

            {/* Breadcrumb */}
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: ORANGE_BG_LIGHT,
                    borderBottom: `1px solid ${ORANGE_COLOR}33`,
                }}
            >
                <div className="container">
                    <a
                        className="navbar-brand fw-bold"
                        href="#"
                        style={{ color: ORANGE_COLOR }}
                    >
                        Gloss<span style={{ color: "#757372" }}>Vault</span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav mx-auto gap-lg-2">

                            <li className="nav-item">
                                <a className="nav-link fw-medium text-dark" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link fw-medium"
                                    href="#"
                                    style={{ color: ORANGE_COLOR }}
                                >
                                    Product Lists
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium text-dark" href="#">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link fw-medium text-dark" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="btn px-4 fw-semibold"
                            style={{
                                backgroundColor: ORANGE_COLOR,
                                color: "#fff",
                                border: `1px solid ${ORANGE_COLOR}`,
                                borderRadius: "8px",
                            }}
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>


            <div className=' w-100 d-flex justify-content-center h-25 mt-5'>
                <input type="text" placeholder='Search By Title of the Product' className='form-control w-50' onChange={(e) => setSearch(e.target.value)} />
            </div>
            {searchItem.map((data) => (
                <div key={data.id} className="container-fluid bg-white py-4 px-3 px-lg-5 text-dark font-sans">
                    {/* CSS overrides for responsive borders and button styling */}
                    <style>{`
            @media (min-width: 768px) {
              .border-end-md {
                border-right: 1px solid #f0f0f0 !important;
              }
            }
            .btn-orange-primary {
              background-color: ${ORANGE_COLOR};
              border-color: ${ORANGE_COLOR};
              transition: background-color 0.2s ease-in-out;
            }
            .btn-orange-primary:hover {
              background-color: #e57c26;
              border-color: #e57c26;
            }
            .bg-orange-subtle-box {
              background-color: ${ORANGE_BG_LIGHT};
              border: 1px solid #fde1cc;
            }
          `}</style>



                    {/* Main Product Section */}
                    <div className="row g-4 lg-g-5 align-items-center">
                        {/* Product Image */}
                        <div className="col-lg-5">
                            <div
                                className="border rounded-4 position-relative d-flex align-items-center justify-content-center bg-light-subtle p-4"
                                style={{
                                    height: "500px",
                                    borderColor: "#eee",
                                    backgroundColor: "#fcfcfd",
                                }}
                            >

                                <img
                                    src={data.thumbnail}
                                    alt="Essence Mascara Lash Princess"
                                    className="img-fluid"
                                    style={{
                                        maxHeight: "85%",
                                        maxWidth: "80%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="col-lg-7 ps-lg-4">
                            <h1 className="fw-bold display-6 mb-3 text-dark">
                                {data.title}
                            </h1>

                            {/* Brand & Category */}
                            <div className="fs-6 mb-3 text-secondary">
                                <span>
                                    Brand:{" "}
                                    <span className="fw-medium" style={{ color: ORANGE_COLOR }}>
                                        {data.brand}
                                    </span>
                                </span>
                                <span className="mx-3 text-muted">|</span>
                                <span>
                                    Category:{" "}
                                    <span className="fw-medium" style={{ color: ORANGE_COLOR }}>
                                        {data.category}
                                    </span>
                                </span>
                            </div>

                            {/* Tags & SKU */}
                            <div className="d-flex align-items-center gap-2 mb-4 flex-wrap">
                                <span
                                    className="badge fw-normal px-3 py-2 rounded-2"
                                    style={{
                                        backgroundColor: ORANGE_BG_LIGHT,
                                        color: ORANGE_COLOR,
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    {data.tags[0]}
                                </span>
                                <span
                                    className="badge fw-normal px-3 py-2 rounded-2 me-2"
                                    style={{
                                        backgroundColor: ORANGE_BG_LIGHT,
                                        color: ORANGE_COLOR,
                                        fontSize: "0.85rem",
                                    }}
                                >
                                    {data.tags[1]}
                                </span>
                                <span className="border-start ps-3 text-secondary small">
                                    {data.sku}
                                </span>
                            </div>

                            {/* Rating */}
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <div className="d-flex gap-1 fs-5" style={{ color: ORANGE_COLOR }}>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                    <i className="bi bi-star text-black-50"></i>
                                    <i className="bi bi-star text-black-50"></i>
                                </div>
                                <span className="fw-semibold ms-2 text-dark">{data.rating} / 5</span>
                            </div>

                            {/* Price & Stock Box */}
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <span className="display-6 fw-bold text-dark">$ {data.price}</span>
                                    <del className="fs-5 text-secondary">${(data.price / (1 - data.discountPercentage / 100)).toFixed(2)}</del>
                                    <span
                                        className="badge fw-medium px-3 py-2 rounded-2"
                                        style={{
                                            backgroundColor: ORANGE_BG_LIGHT,
                                            color: ORANGE_COLOR,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {data.discountPercentage}% OFF
                                    </span>
                                </div>

                                {/* In Stock Container */}
                                <div className="bg-orange-subtle-box rounded-4 p-3 d-flex align-items-center gap-3 min-w-200">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            backgroundColor: ORANGE_COLOR,
                                        }}
                                    >
                                        <i className="bi bi-check-lg fs-6"></i>
                                    </div>
                                    <div>
                                        <div
                                            className="fw-semibold"
                                            style={{ color: ORANGE_COLOR, fontSize: "0.95rem" }}
                                        >
                                            In Stock
                                        </div>
                                        <div
                                            className="text-secondary"
                                            style={{ fontSize: "0.825rem" }}
                                        >
                                            {data.stock} units available
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p
                                className="text-secondary mb-4"
                                style={{ fontSize: "0.975rem", lineHeight: "1.6" }}
                            >
                                {data.description}
                            </p>

                            {/* Actions (Quantity + Buttons) */}
                            <div className="row g-3">


                                {/* Add to Cart */}
                                <div className="col-12 col-sm-5">
                                    <button
                                        type="button"
                                        onClick={() => alert(`${data.title} Added to Cart`)}
                                        className="btn btn-orange-primary text-white w-100 rounded-3 fw-medium d-flex align-items-center justify-content-center gap-2 shadow-sm"
                                        style={{ height: "48px", fontSize: "0.95rem" }}
                                    >
                                        <i className="bi bi-bag fs-5"></i>
                                        Add to Cart
                                    </button>
                                </div>

                                {/* Wishlist */}
                                <div className="col-12 col-sm-4">
                                    <button
                                        type="button"
                                        onClick={() => alert(`${data.title} Added to Wishlist`)}
                                        className="btn btn-white border w-100 rounded-3 fw-medium text-dark d-flex align-items-center justify-content-center gap-2 bg-white"
                                        style={{
                                            height: "48px",
                                            borderColor: "#ddd",
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        <i className="bi bi-heart fs-5"></i>
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Cards Grid */}
                    <div className="row g-4 mt-4">
                        {/* Product Specifications Card */}
                        <div className="col-lg-6">
                            <div
                                className="card border rounded-4 overflow-hidden h-100"
                                style={{ borderColor: "#eaeaea" }}
                            >
                                <div className="card-header bg-white py-3 px-4 border-0">
                                    <h5 className="mb-0 fw-semibold d-flex align-items-center gap-2 text-dark">
                                        <i
                                            className="bi bi-list-task fs-4"
                                            style={{ color: ORANGE_COLOR }}
                                        ></i>
                                        Product Specifications
                                    </h5>
                                </div>

                                <div className="card-body p-0 border-top">
                                    <div className="row g-0">
                                        {/* Spec Cell 1 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-bag fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Weight
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.weight}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spec Cell 2 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-box-seam fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Dimensions (cm)
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.dimensions.width} × {data.dimensions.height} × {data.dimensions.depth}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spec Cell 3 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-box-seam fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Minimum Order Qty
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.minimumOrderQuantity}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spec Cell 4 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-border-style fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    SKU
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.sku}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spec Cell 5 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-tag fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Category
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.category}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Spec Cell 6 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-tags fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Tags
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.tags[0]},{data.tags[1]}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Shipping & Policies Card */}
                        <div className="col-lg-6">
                            <div
                                className="card border rounded-4 overflow-hidden h-100"
                                style={{ borderColor: "#eaeaea" }}
                            >
                                <div className="card-header bg-white py-3 px-4 border-0">
                                    <h5 className="mb-0 fw-semibold d-flex align-items-center gap-2 text-dark">
                                        <i
                                            className="bi bi-truck fs-4"
                                            style={{ color: ORANGE_COLOR }}
                                        ></i>
                                        Shipping &amp; Policies
                                    </h5>
                                </div>

                                <div className="card-body p-0 border-top">
                                    <div className="row g-0">
                                        {/* Policy Cell 1 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-truck fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Shipping
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.shippingInformation}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Policy Cell 2 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-shield-check fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Warranty
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.warrantyInformation}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Policy Cell 3 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-bottom"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-arrow-counterclockwise fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Return Policy
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.returnPolicy}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Policy Cell 4 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-box-seam fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Stock
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.stock} units
                                                </div>
                                            </div>
                                        </div>

                                        {/* Policy Cell 5 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3 border-end-md"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-check-circle fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Availability
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.availabilityStatus}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Policy Cell 6 */}
                                        <div
                                            className="col-12 col-md-4 p-3 d-flex align-items-center gap-3"
                                            style={{ borderColor: "#f0f0f0", minHeight: "80px" }}
                                        >
                                            <i className="bi bi-journal-check fs-4" style={{ color: ORANGE_COLOR }}></i>
                                            <div>
                                                <div className="text-secondary" style={{ fontSize: "0.78rem", lineHeight: "1.2" }}>
                                                    Minimum Order Qty
                                                </div>
                                                <div className="fw-medium text-dark mt-1" style={{ fontSize: "0.875rem" }}>
                                                    {data.minimumOrderQuantity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border rounded-4 border-light-subtle bg-white p-4">
                            <h5 className="fw-semibold text-dark mb-4">Customer Reviews</h5>

                            {/* Review */}

                            <div className="d-flex flex-column gap-3">
                                {data.reviews.map((data, index) => (
                                    <div key={index} className="p-3 bg-light rounded-3 border-0">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="badge bg-warning text-dark fw-bold d-flex align-items-center gap-1 px-2 py-2">
                                                    <i className="fa-solid fa-star"></i> {data.rating}
                                                </span>
                                                <div>
                                                    <h6 className="mb-0 fw-semibold text-dark fs-6">{data.reviewerName}</h6>
                                                    <small className="text-muted" style={{ fontSize: "0.75rem" }}>{data.reviewerEmail}</small>
                                                </div>
                                            </div>
                                            <span className="text-muted small">{new Date(data.date).toLocaleDateString()}</span>
                                        </div>
                                        <p className="text-dark mb-0 small ps-1">{data.comment}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;