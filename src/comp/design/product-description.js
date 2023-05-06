import React from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import Cart from "../shopping/cart";

export default function Product() {
  const [cartShow, setCartShow] = React.useState(false);
  return (
    <div className="px-3" style={{ overflowX: "hidden" }}>
      <p>Nomad Collection</p>
      <div className="row gx-0 d-flex">
        <div className="col-9">
          <Carousel id="caro-description">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad3.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad4.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad5.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./images/nomad6.webp"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-3 px-3">
          <h4>Block Nomad Sofa</h4>
          <span className="d-flex flex-wrap" style={{ fontSize: "x-large" }}>
            <s>$1595</s>&nbsp;
            <p>$1275</p>
          </span>
          <p>+ Free Shipping</p>
          <div className="d-flex gap-3 my-3">
            <label htmlFor="country-selector">Size:</label>
            <div className="gap-1 d-flex">
              <input
                type="radio"
                id="small"
                name="size"
                value="small"
                checked
              />
              <label htmlFor="small">&nbsp;Small</label>
              <input type="radio" id="medium" name="size" value="medium" />
              <label htmlFor="medium">&nbsp;Medium</label>
              <input type="radio" id="large" name="size" value="large" />
              <label htmlFor="large">&nbsp;Large</label>
            </div>
          </div>
          <div className="d-flex gap-3">
            <label htmlFor="country-selector">Color:</label>
            <div className=" d-flex">
              <input
                type="radio"
                id="small"
                name="color"
                value="White"
                checked
              />
              <label htmlFor="small">&nbsp;White</label>
              &nbsp;
              <input type="radio" id="medium" name="color" value="Black" />
              <label htmlFor="medium">&nbsp;Black</label>
              &nbsp;
              <input type="radio" id="large" name="color" value="Brown" />
              <label htmlFor="large">&nbsp;Brown</label>
              &nbsp;
              <input type="radio" id="large" name="color" value="Gray" />
              <label htmlFor="large">&nbsp;Gray</label>
            </div>
          </div>
          <div className="my-3 d-flex flex-wrap">
            <select className="p-2 px-3" style={{ backgroundColor: "#d1d0d0" }}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="8">9</option>
              <option value="8">10</option>
            </select>
            <button className="add-cart mx-3" onClick={() => setCartShow(true)}>
              <div
                to="/user-profile"
                style={{ textDecoration: "none", color: "#484543" }}
              >
                <b>ADD TO CART</b>
              </div>
            </button>
            <Cart show={cartShow} onHide={() => setCartShow(false)} />
          </div>
          <div>
            <div className="shop-seat container my-1 text-center"></div>
          </div>
          <p>In stock! Ships in 5-10 business days</p>
        </div>
      </div>
      <div className="container mt-4">
        <div>
          <h4>Dimensions</h4>
          <img
            src="./images/nomad-dimensions.webp"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="about-piece">
          <h4>About this piece</h4>
          <p style={{ fontSize: "1.4rem" }}>
            The cornerstone of our Nomad Collection is the essential sofa
            reinvented for modern life. The first truly easy-to-move sofa thanks
            to our award-winning modular design; it has plenty of room for three
            people, or more if you're into cuddling. It's packed with all the
            clever, life-changing features you expect from Burrow, starting with
            a built-in USB charger.
          </p>
        </div>
        <div className="row">
          <div className="col-4">
            <h6>Customizable</h6>
            <p>
              Create your ideal sectional sofa with five fabric colors, six leg
              finishes, and three armrest heights. You can even swap the
              reversible back cushions: one side is tufted for a classic look,
              the other smooth and contemporary.
            </p>
          </div>
          <div className="col-4">
            <h6>Adaptable</h6>
            <p>
              Rest easy with the knowledge that your new furniture can grow and
              expand with your life, thanks to the universal, modular design of
              our Nomad Collection.
            </p>
          </div>
          <div className="col-4">
            <h6>Comfortable</h6>
            <p>
              The cushions are formulated for lasting comfort with our
              proprietary three-layer foam and fiber architecture, and feature a
              plush crown for a soft initial sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
