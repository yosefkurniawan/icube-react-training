const initState = [
    {
        name: 'Test Configurable Product',
        image:
            'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/m/h/mh01-gray_main_2_1.jpg',
        price: { currency: 'USD', value: 45, __typename: 'Money' },
        qty: '1',
        sku: 'test-configurable',
    },
    {
        name: 'Test 2',
        image:
            'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/m/h/mh01-gray_main_2_1.jpg',
        price: { currency: 'USD', value: 50, __typename: 'Money' },
        qty: '1',
        sku: 'test-2',
    },
]

export function cart(state = initState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.item];
        default:
            return state;
    }
}