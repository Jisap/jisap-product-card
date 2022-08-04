import React from 'react'
import renderer from 'react-test-renderer';

import { product1 } from '../data/products';
import { ProductCard } from '../../src/components';

const { act } = renderer

describe('ProductCard', () => {
    
    test('debe mostrar el componente correctamente', () => {
       
        const wrapper = renderer.create( 
            <ProductCard product={ product1 } >
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>   
        )

        expect( wrapper.toJSON() ).toMatchSnapshot()
    });
    
    test('Debe de incrementar el contador', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(1) }></button>
                        </>
                    )
                }
            </ProductCard>
        )

        let tree = wrapper.toJSON();                                    // Obtenemos el árbol del componente
        expect( tree ).toMatchSnapshot();                               // Verificamos que el árbol del componente es igual al snapshot

        act(() => { 
            (tree as any).children[2].props.onClick();                  // Simulamos el click en el botón
        });

        tree = wrapper.toJSON();                                        // Obtenemos el árbol del componente basado en el wrapper actualizado                       
        expect((tree as any).children[1].children[0]).toBe('1');        // Esperariamos que el contador sea 1
    });
    
});
