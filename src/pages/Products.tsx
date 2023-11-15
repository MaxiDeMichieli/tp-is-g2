import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useContext } from "../context/ContextProvider";
import ProductCard from "../components/ProductCard";
import { Button, IconButton, MenuItem, Select, TextField } from "@mui/material";
import { Clear } from "@mui/icons-material";
import DollarRates from "../components/DollarRates";

const Products = () => {
  const [filters, setFilters] = useState({
    shopId: null,
    search: "",
    categoryId: null,
  });
  const [search, setSearch] = useState("");
  const [shop, setShop] = useState(null);
  const [products, setProducts] = useState([]);
  const { context } = useContext();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const shopId = params.shopId || context?.shopId;
    if (shopId) {
      const currentShop = context.shops?.find((shop) => shop.id === +shopId);

      if (currentShop) {
        setShop(currentShop);
        setFilters({ ...filters, shopId: +shopId });
      }
    } else {
      setShop(null);
      setFilters({ ...filters, shopId: null });
    }
  }, [params.shopId, context?.shopId]);

  useEffect(() => {
    setProducts(
      context.products?.filter((product) => {
        let match = true;

        if (filters.shopId) match &&= product.shopId === filters.shopId;

        if (filters.categoryId)
          match &&= product.categoryId === filters.categoryId;

        if (filters.search)
          match &&= product.name
            .toLowerCase()
            .includes(filters.search.toLowerCase());

        return match;
      })
    );
  }, [filters]);

  return (
    <Layout
      banner={
        <div className="absolute top-0 left-0 w-full bg-[#7B4F94] h-24" />
      }
    >
      <h1 className="w-full h-24 text-white flex items-center font-medium text-3xl">
        Productos regionales{shop ? ` - ${shop.name}` : ""}
      </h1>
      <div className="py-10">
        <div className="flex items-center mb-4">
          <TextField
            label="Buscar"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            margin="none"
            size="small"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => {
                    setSearch("");
                    setFilters((filters) => ({ ...filters, search: "" }));
                  }}
                  size="small"
                >
                  <Clear />
                </IconButton>
              ),
            }}
          />
          <div className="ml-4">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => setFilters((filters) => ({ ...filters, search }))}
            >
              Aplicar
            </Button>
          </div>
        </div>
        {!shop && (
          <Select
            size="small"
            value={filters.shopId ?? 0}
            onChange={(e) =>
              setFilters((filters) => ({ ...filters, shopId: +e.target.value }))
            }
            displayEmpty
            renderValue={(value) =>
              value === 0
                ? "Filtrar por comercio"
                : context.shops?.find((shop) => shop.id === value)?.name
            }
            inputProps={{ "aria-label": "Select" }}
            endAdornment={
              filters.shopId && (
                <IconButton
                  onClick={() => setFilters({ ...filters, shopId: null })}
                  size="small"
                >
                  <Clear />
                </IconButton>
              )
            }
          >
            <MenuItem value={0} disabled>
              Seleccionar opción
            </MenuItem>
            {context.shops?.map((shop) => (
              <MenuItem key={shop.id} value={shop.id}>
                {shop.name}
              </MenuItem>
            ))}
          </Select>
        )}
        <Select
          className="ml-4"
          size="small"
          value={filters.categoryId ?? 0}
          onChange={(e) =>
            setFilters((filters) => ({
              ...filters,
              categoryId: +e.target.value,
            }))
          }
          displayEmpty
          renderValue={(value) =>
            value === 0
              ? "Filtrar por categoría"
              : context.categories?.find((category) => category.id === value)
                  ?.name
          }
          inputProps={{ "aria-label": "Select" }}
          endAdornment={
            filters.categoryId && (
              <IconButton
                onClick={() => setFilters({ ...filters, categoryId: null })}
                size="small"
              >
                <Clear />
              </IconButton>
            )
          }
        >
          <MenuItem value={0} disabled>
            Seleccionar opción
          </MenuItem>
          {context.categories?.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {products.length === 0 && (
        <div className="w-full h-24 bg-gray-200 text-gray-800 rounded text-lg flex justify-center items-center">
          No hay productos que coincidan con tu búsqueda
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/productos/${product.id}`)}
          />
        ))}
      </div>
      <DollarRates />
    </Layout>
  );
};

export default Products;
