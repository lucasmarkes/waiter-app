import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Button } from "../components/Button";
import { Cart } from "../components/Cart";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Empty } from "../components/Icons/Empty";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import { Text } from "../components/Text";
import { CartItem } from "../types/CartItem";
import { ICategory } from "../types/Category";
import { IProduct } from "../types/Product";
import { api } from "../utils/api";
import {
  CategoriesContainer,
  CenteredContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleResetOrder() {
    setSelectedTable("");
    setCartItems([]);
  }

  function handleAddToCart(product: IProduct) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prev) => {
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return prev.concat({ product, quantity: 1 });
      }

      const newCartItems = [...prev];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleRemoveFromCart(product: IProduct) {
    setCartItems((prev) => {
      const itemIndex = prev.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      const item = prev[itemIndex];

      const newCartItems = [...prev];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);
        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId
      ? "/products"
      : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    Promise.all([api.get("/categories"), api.get("/products")]).then(
      ([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleResetOrder}
        />
        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>

            {isLoadingProducts ? (
              <CenteredContainer>
                <ActivityIndicator size="large" color="#D73035" />
              </CenteredContainer>
            ) : (
              <>
                {products.length > 0 ? (
                  <MenuContainer>
                    <Menu onAddTocart={handleAddToCart} products={products} />
                  </MenuContainer>
                ) : (
                  <CenteredContainer>
                    <Empty />
                    <Text color="#666" style={{ marginTop: 24 }}>
                      Nenhum produto encontrado!
                    </Text>
                  </CenteredContainer>
                )}
              </>
            )}
          </>
        )}

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator size="large" color="#D73035" />
          </CenteredContainer>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              onConfirmOrder={handleResetOrder}
              selectedTable={selectedTable}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}
