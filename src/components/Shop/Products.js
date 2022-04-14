import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
  {
    id: "p1",
    price: 6,
    title: "first book",
    description: "This is a first book",
  },
  {
    id: "p2",
    price: 89,
    title: "Second book",
    description: "This is a Second book",
  },
  {
    id: "p3",
    price: 60,
    title: "Third book",
    description: "This is a Third book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
            key={product.id}
            id ={product.id}
            price={product.price}
            title={product.title}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
