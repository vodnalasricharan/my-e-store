import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page-100">
        <section>
          <h5>
            the checkout page is disabled due to deployment issues, you can
            check out rest of the project
          </h5>
          <Link to="/" className="btn">
            Please go back home
          </Link>
        </section>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.main`
  background: #faf9f6;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;
export default CheckoutPage;
