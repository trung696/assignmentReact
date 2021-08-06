// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getAllCate, } from "../../api/categoryAPI";
import { getAllCateId } from "../../api/productAPI";


export default function ListProductFromCate(props) {
    console.log('props', props);
    const { id } = useParams();
    console.log(id);
    const [categories, setCategories] = useState([]);
    console.log("cate", categories);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await getAllCate();
                setCategories(data);
                console.log('cate2', categories);
            } catch (error) {
                console.log(error);
            }
        };
        getCategory();
    }, []);
    const { history } = useHistory();
    const [products, setProducts] = useState([]);
    console.log("pro", products);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await getAllCateId(id);
                setProducts(data);
                // reset(data)
                console.log('pro2', products);
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [
        id
    ]);
    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="container py-5 margintop">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="h2 pb-4 text-success ">
                        <Link to={`/`} className=" font-monospace">Menu </Link>
                    </h1>
                    <ul className="list-unstyled templatemo-accordion">
                        {categories.map((item, index) => (
                            <div key={index}>
                                <li className="pb-3 btn btn_primary">
                                    <Link
                                        to={`/${item.id}`}
                                        className=" "
                                    >
                                        <span className="mau-text">{item.name}</span>
                                    </Link>
                                </li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-9">

                    <div className="row">
                        {products.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className=" mb-4  rounded-5">
                                    <div className="rounded">
                                        <img
                                            className="card-img rounded-circle  "
                                            src={item.image}
                                            width="250px"
                                            height="250px"
                                        />
                                    </div>
                                    <div className="card-body">
                                        <h6 className=" text-center text-uppercase font-weight-bold">{item.name}</h6>
                                        <p className="text-center mb-0 text-danger">{item.price}$</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
