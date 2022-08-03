# jisap-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Jisap

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jisap-product-card';
```

```
<ProductCard                                                                          
    product= { product }                           
    initialValues={{      
            count: 4,
            maxCount: 10
          }}                              
        >
          { 
            ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => ( // Se renderiza unos componentes a traves de una función que recibe un objeto con los valores generados en el productCard
              <>
                  <ProductImage />
                  <ProductTitle  />
                  <ProductButtons />
              </>
            )
          }                                             
</ProductCard>
```