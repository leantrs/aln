import Button from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import signUser from "../actions/accountActions";
import { useDispatch } from "react-redux";

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Buttonx = styled.button`
  display: flex;
  background-color: #db7093;
  color: white;
  padding: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  width-max: 20%;
  color: black;
  font-weight: 300;
`;

const Image = styled.img`
   {
    height: 50px;
    width: 250px;

    position: absolute;
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.cart.listaCarrinho);
  const dispatch = useDispatch();
  const [rec, setRec] = useState("Default");
  const [user, setUser] = useState("20");
  const [refx, setRefx] = useState("");
  const [estado, setEstado] = useState(false);

  useEffect(
    () => {
      if (estado === false) {
        rsn();
        comparar();
      }
    }, // eslint-disable-next-line
    [estado]
  );

  async function rsn() {
    const userx = JSON.stringify(localStorage.getItem("pass"));
    setUser(userx);

    if (userx === "20" || userx === "null") {
    } else {
      setRec(JSON.parse(atob(userx.split(".")[1])));
      dispatch(signUser(userx));
    }

    setEstado(true);
  }

  async function comparar() {
    let date1 = rec["exp"];
    let date2 = new Date() - 3 * 60 * 60 * 1000;

    let dataUm = new Date(date1).getTime();
    let dataDois = new Date(date2).getTime();

    let dataBd = dataUm.toString().substr(0, 10);
    let dataAtual = dataDois.toString().substr(0, 10);

    if (estado === true) {
      if (parseInt(dataBd) > parseInt(dataAtual)) {
        await dispatch(signUser(user));
      } else {
        if (rec === "Default") {
          localStorage.setItem("pass", "20");
        }
      }
    }
  }

  const closeMobileMenu = (rec) => {
    setClick(false);
  };

  async function handleSignIn() {
    const url1 = window.location.href;
    const res1 = url1.split("/");
    const res2 = res1[3].split("?");

    if (res2[0] === "ProductList") {
      // eslint-disable-next-line
      navigate("/ProductList" + "?" + refx);
      window.location.reload();
    } else {
      if (res2[1] === undefined) {
        // eslint-disable-next-line
        navigate("/ProductList" + "?" + refx);
      } else {
      }
    }
  }

  async function handleSignIn2() {
    // eslint-disable-next-line
    navigate("/Cart");
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Image src="https://trs2500.ml/img/logo.png" />
          <i class="fab fa-firstdraft" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/ProductList?Scarpin"
              className="nav-links"
              onClick={() => closeMobileMenu("/ProductList?Scarpin")}
            >
              Sapato Scarpin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList1?Tenis"
              className="nav-links"
              onClick={() => closeMobileMenu}
            >
              Tenis
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList3?Sandalia"
              className="nav-links"
              onClick={() => closeMobileMenu}
            >
              Sandalia
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ProductList4?Bolsas"
              className="nav-links"
              onClick={() => closeMobileMenu}
            >
              Bolsas
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-links-mobile">
              <i className="fa fa-user"> Login</i>
            </Link>
          </li>
        </ul>
        <Button />
      </nav>

      <Right>
        <MenuItem>
          <Input
            type="text"
            value={refx}
            onChange={(event) => setRefx(event.target.value)}
            placeholder="Procurar"
          />
        </MenuItem>

        <MenuItem>
          <Buttonx
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSignIn}
          >
            ok
          </Buttonx>
        </MenuItem>
        <MenuItem>{rec && rec["email"]}</MenuItem>

        <MenuItem>
          <Badge badgeContent={Object.keys(todos).length} color="primary">
            <ShoppingCartOutlined onClick={handleSignIn2} />
          </Badge>
        </MenuItem>
        <MenuItem></MenuItem>
      </Right>
    </>
  );
}

export default Navbar;
