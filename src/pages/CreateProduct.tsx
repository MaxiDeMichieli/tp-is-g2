import { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Input,
} from "@mui/material";
import Layout from "../components/Layout";
import { useContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import ProductModal from "../components/ProductsModal";

const CreateProduct = () => {
  const navigate = useNavigate();
  const { context, setContext } = useContext();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    details: "",
    categoryId: 0,
    type: "",
    restrictions: "",
    characteristics: "",
    image: null,
  });
  const [showProductModal, setShowProductModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const imageFile = files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;

        console.log(dataURL);
        setFormData((prevData) => ({
          ...prevData,
          [name]: dataURL,
        }));
      };

      reader.readAsDataURL(imageFile);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lastId = context.products.length
      ? context.products[context.products.length - 1].id
      : 0;
    setContext({
      ...context,
      products: [
        ...context.products,
        {
          ...formData,
          id: lastId + 1,
          shopId: context.shopId,
        },
      ],
    });

    navigate("/mis-productos");
  };

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        Crear aviso de producto
      </h1>
      <form onSubmit={handleSubmit} className="m-4 flex flex-col">
        <div className="w-full flex items-center">
          <div className="grow">
            <TextField
              label="Nombre"
              name="name"
              size="small"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </div>
          {formData.name?.length > 0 && (
            <div className="ml-4">
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setShowProductModal(true)}
              >
                Comparar precios
              </Button>
            </div>
          )}
        </div>

        <TextField
          label="Descripción"
          name="description"
          size="small"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          label="Precio"
          type="number"
          name="price"
          size="small"
          value={formData.price}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          label="Detalles"
          multiline
          rows={4}
          name="details"
          size="small"
          value={formData.details}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl margin="normal">
          <InputLabel id="category-label" size="small">
            Categoría
          </InputLabel>
          <Select
            size="small"
            labelId="category-label"
            name="categoryId"
            value={formData.categoryId || ""}
            onChange={handleChange}
          >
            {context.categories?.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel id="type-label" size="small">
            Tipo
          </InputLabel>
          <Select
            size="small"
            labelId="type-label"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <MenuItem value="service">Servicio</MenuItem>
            <MenuItem value="item">Artículo</MenuItem>
          </Select>
        </FormControl>

        {formData.type === "service" && (
          <TextField
            label="Restricciones"
            multiline
            rows={4}
            name="restrictions"
            size="small"
            value={formData.restrictions}
            onChange={handleChange}
            margin="normal"
          />
        )}

        {formData.type === "item" && (
          <TextField
            label="Características"
            multiline
            rows={4}
            name="characteristics"
            size="small"
            value={formData.characteristics}
            onChange={handleChange}
            margin="normal"
          />
        )}

        <FormControl margin="normal">
          <InputLabel htmlFor="image-input">Imagen</InputLabel>
          <Input
            type="file"
            id="image-input"
            name="image"
            accept="image/*"
            size="small"
            onChange={handleChange}
          />
        </FormControl>

        {formData.image && (
          <img src={formData.image} alt="Preview" className="w-32 h-32" />
        )}

        <div className="mt-10 w-full">
          <Button type="submit" variant="contained" color="primary">
            Cargar aviso
          </Button>
        </div>
      </form>
      {showProductModal && (
        <ProductModal
          onClose={() => setShowProductModal(false)}
          searchString={formData.name}
        />
      )}
    </Layout>
  );
};

export default CreateProduct;
