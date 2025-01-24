(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ac9327._.js", {

"[project]/constants/Constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "products": (()=>products)
});
const products = [
    // MEN
    {
        id: 1,
        images: [
            'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
            'https://plus.unsplash.com/premium_photo-1690340192770-3460a6c5067c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Classic T-Shirt',
        description: 'Comfortable and stylish cotton T-shirt, perfect for casual wear.',
        price: '$25.00',
        discount: '$20.00'
    },
    {
        id: 2,
        images: [
            'https://images.unsplash.com/photo-1641060311626-9362cbf0c7a8?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1661313817350-1fa759c43a3b?q=80&w=1817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1511287080534-fe9d6cd10e68?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Leather Jacket',
        description: 'Premium leather jacket with a modern fit and durable finish.',
        price: '$150.00',
        discount: null
    },
    {
        id: 3,
        images: [
            'https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1690820317284-9369ca82c397?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1618828450820-ff5f3da9611a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Slim Fit Jeans',
        description: 'Trendy denim jeans with a slim fit for a sharp and modern look.',
        price: '$45.00',
        discount: null
    },
    {
        id: 4,
        images: [
            'https://plus.unsplash.com/premium_photo-1671135590215-ded219822a44?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1733701621294-5ca3b00f3bd0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1661274158693-401c233e0d21?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Wool Sweater',
        description: 'Stay warm and stylish with this cozy wool sweater.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 5,
        images: [
            'https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1499202977705-65f436dac18a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689977492903-bd8d201af5bd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Chinos',
        description: 'Comfortable and versatile chinos for casual or formal settings.',
        price: '$40.00',
        discount: null
    },
    {
        id: 6,
        images: [
            'https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1603252109360-909baaf261c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1603252109612-24fa03d145c8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Formal Shirt',
        description: 'Classic button-up shirt for office wear and special occasions.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 7,
        images: [
            'https://images.unsplash.com/photo-1704430705406-24fc29dfcccf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1685328403783-00925c2a4301?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1728394604710-14c31693eee5?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Hoodie',
        description: 'Relaxed and cozy hoodie, perfect for layering.',
        price: '$50.00',
        discount: null
    },
    {
        id: 8,
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1708214837981-1a2c1abd5464?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1724921195080-31c2d6d82a16?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Running Shoes',
        description: 'Lightweight running shoes for sports and casual outings.',
        price: '$80.00',
        discount: '$70.00'
    },
    {
        id: 9,
        images: [
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1690338237128-b32fedb44d55?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Polo T-Shirt',
        description: 'Stylish polo T-shirt with a breathable fabric.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 10,
        images: [
            'https://images.unsplash.com/photo-1700650109006-1741e917a6bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1700649734304-38fa54b8dd5a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1700647153994-aece6c354a54?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://via.placeholder.com/300x400'
        ],
        category: 'Men',
        title: 'Sports Watch',
        description: 'Durable sports watch with waterproof features.',
        price: '$60.00',
        discount: null
    },
    {
        id: 11,
        images: [
            'https://images.unsplash.com/photo-1599012307605-23a0ebe4d321?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1520903074185-8eca362b3dce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1504826023244-4694f7330c73?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Leather Boots',
        description: 'Sturdy leather boots for outdoor adventures.',
        price: '$100.00',
        discount: '$90.00'
    },
    {
        id: 12,
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1698670080725-db6b2cd5b347?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1673210887927-9188d6ba26fd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Track Pants',
        description: 'Comfortable track pants for workouts or lounging.',
        price: '$40.00',
        discount: null
    },
    {
        id: 13,
        images: [
            'https://images.unsplash.com/photo-1534298932699-6d670acabb01?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1519079754742-f83afaef6d35?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1533603531139-2c4d04df8f16?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Cap',
        description: 'Classic baseball cap to add a sporty touch to your outfit.',
        price: '$20.00',
        discount: null
    },
    {
        id: 14,
        images: [
            'https://images.unsplash.com/photo-1642075191572-9992f5f290c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1519766400364-8824dc3c4e26?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1525383734057-57832c535c9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Gloves',
        description: 'Warm gloves made from high-quality wool for winter.',
        price: '$15.00',
        discount: null
    },
    {
        id: 15,
        images: [
            'https://images.unsplash.com/photo-1607198463850-1b682798e6ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1589452820464-575022a4aaf2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1663076130603-77287a2c0a50?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Scarf',
        description: 'Stylish scarf for added comfort and warmth.',
        price: '$25.00',
        discount: null
    },
    {
        id: 16,
        images: [
            'https://plus.unsplash.com/premium_photo-1723223095958-612c6ffb1d82?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723791610035-0ef3d930be54?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723867474657-d4caa7043aaa?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Socks (Pack of 3)',
        description: 'Comfortable and durable socks for daily use.',
        price: '$10.00',
        discount: '$8.00'
    },
    {
        id: 17,
        images: [
            'https://images.unsplash.com/photo-1628019049646-552bb07df11e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxUaWV8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1591729652476-e7f587578d9c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1580997643346-e245056191c5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Tie',
        description: 'Elegant tie for formal occasions.',
        price: '$20.00',
        discount: null
    },
    {
        id: 18,
        images: [
            'https://images.unsplash.com/photo-1598915850252-fb07ad1e6768?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1521485878586-6b92b0c3641c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Blazer',
        description: 'Tailored blazer for a sophisticated look.',
        price: '$120.00',
        discount: '$100.00'
    },
    {
        id: 19,
        images: [
            'https://images.unsplash.com/photo-1722851721443-e3a83a31a5cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1710624244858-f6f81ce08087?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1682092121090-5f3e89c7aa3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Kurta',
        description: 'Traditional and stylish kurta for men, perfect for casual and festive occasions.',
        price: '$50.00',
        discount: null
    },
    {
        id: 20,
        images: [
            'https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1668849404288-4d5a55894f6b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1485527691629-8e370684924c?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Men',
        title: 'Cardigan',
        description: 'Soft cardigan for layering during cooler days.',
        price: '$70.00',
        discount: '$60.00'
    },
    // WOMEN (21-40)
    {
        id: 21,
        images: [
            'https://images.unsplash.com/photo-1630955110816-6fbcd2b87de4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1606753232300-62dfaeb1fd8a?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
            'https://images.unsplash.com/photo-1509190043825-179c637fdba8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Floral Dress',
        description: 'Beautiful floral print dress, ideal for casual outings and events.',
        price: '$40.00',
        discount: null
    },
    {
        id: 22,
        images: [
            'https://images.unsplash.com/photo-1519803786820-8f866133444d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1589565927725-39a53837cd6c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1528055619608-90e62ae350d5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Denim Jacket',
        description: 'A trendy denim jacket that pairs well with almost everything.',
        price: '$70.00',
        discount: null
    },
    {
        id: 23,
        images: [
            'https://images.unsplash.com/photo-1589697547048-962940abc062?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1661740770309-fb7f06bf4ee5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1643015862949-5c8d15a4242e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Knit Sweater',
        description: 'Cozy knit sweater to keep you warm and stylish.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 24,
        images: [
            'https://images.unsplash.com/photo-1533753434925-216dee77e464?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1579805535066-bc4c65585ca8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1524242635868-52c4137f3ccd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Maxi Skirt',
        description: 'Elegant and flowy maxi skirt for casual and formal occasions.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 25,
        images: [
            'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1482826496886-09fe37f30633?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1563226072-07ff50283206?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Striped Sundress',
        description: 'Lightweight and breezy sundress with a fun striped pattern for warm weather.',
        price: '$30.00',
        discount: null
    },
    {
        id: 26,
        images: [
            'https://images.unsplash.com/photo-1727301209101-ef4f6f7048a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1524635620932-ae4f58f5f3c1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1728664900998-c2abded762ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Ankle Boots',
        description: 'Chic ankle boots for a comfortable and stylish look.',
        price: '$80.00',
        discount: '$75.00'
    },
    {
        id: 27,
        images: [
            'https://images.unsplash.com/photo-1597486294654-63a60ef73aab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1527565533779-404437dc80d6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1517472292914-9570a594783b?q=80&w=1733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Silk Scarf',
        description: 'Luxurious silk scarf for a sophisticated touch.',
        price: '$30.00',
        discount: null
    },
    {
        id: 28,
        images: [
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1591216073997-18ac8f4cfcdb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1695844419276-f8e42c19a1ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Wide-Leg Pants',
        description: 'Trendy wide-leg pants for effortless chic.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 29,
        images: [
            'https://images.unsplash.com/photo-1635097247472-dfc3e652db97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683140799308-dec024ca1bd3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1573545289441-827c028f7a3b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Trench Coat',
        description: 'Classic trench coat for a timeless style.',
        price: '$120.00',
        discount: null
    },
    {
        id: 30,
        images: [
            'https://images.unsplash.com/photo-1517495795755-0eb983e162a0?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1522057060392-5211903dcab5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1603920346280-75b4832fb6a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Leggings',
        description: 'Comfortable leggings for workouts or casual wear.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 31,
        images: [
            'https://images.unsplash.com/photo-1533659828870-95ee305cee3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1520313017156-f91ddd4fe1da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1692559002660-1238ea53103c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Wrap Dress',
        description: 'Flattering wrap dress for a stunning silhouette.',
        price: '$55.00',
        discount: null
    },
    {
        id: 32,
        images: [
            'https://images.unsplash.com/photo-1679666715451-600413fb0f5f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1523523262500-ec13396518c6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1523251654373-00615b266166?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Cardigan Sweater',
        description: 'Soft cardigan sweater for layering.',
        price: '$45.00',
        discount: '$40.00'
    },
    {
        id: 33,
        images: [
            'https://plus.unsplash.com/premium_photo-1692230108000-00731947d227?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1734415283408-16b80da7cdf3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1702635213165-958cbe48c951?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Red Bodycon Dress',
        description: 'Compact crossbody bag for essentials on the go.',
        price: '$70.00',
        discount: '$60.00'
    },
    {
        id: 34,
        images: [
            'https://plus.unsplash.com/premium_photo-1671806266905-87fb9402929e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1676225678979-80df276a983e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1529635436167-b1c4784d7168?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Heeled Sandals',
        description: 'Stylish heeled sandals for evenings out.',
        price: '$90.00',
        discount: null
    },
    {
        id: 35,
        images: [
            'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1690338235263-68f2c173b5cc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1664461168692-c2ff913fbaef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Classic Shirt',
        description: 'A timeless casual shirt with a relaxed fit and versatile style.',
        price: '$25.00',
        discount: '$22.00'
    },
    {
        id: 36,
        images: [
            'https://images.unsplash.com/photo-1534445418105-b161f1aca589?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1661380505084-c091a7f9094b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1501345167189-d8d4c5d24130?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Midi Dress',
        description: 'Graceful midi dress with a flattering fit.',
        price: '$65.00',
        discount: null
    },
    {
        id: 37,
        images: [
            'https://plus.unsplash.com/premium_photo-1664373233029-7238db68d0a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1726804978736-013fbb95c031?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723914108893-ac3047a4f1df?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Chiffon Top',
        description: 'Lightweight chiffon top for a breezy look.',
        price: '$35.00',
        discount: null
    },
    {
        id: 38,
        images: [
            'https://images.unsplash.com/photo-1519763246425-1d41fcb282d6?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1682433297435-ee516b20ba85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1682432716480-d03427febc37?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Cocktail dress',
        description: 'Elegant evening gown with a fitted bodice and flowy skirt, perfect for formal occasions',
        price: '$90.00',
        discount: '$75.00'
    },
    {
        id: 39,
        images: [
            'https://images.unsplash.com/photo-1552327359-d86398116072?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1637140442239-bcc91f5841f0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1707928727870-62882e51f93d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Puffer Jacket',
        description: 'Warm puffer jacket for cold weather.',
        price: '$110.00',
        discount: '$100.00'
    },
    {
        id: 40,
        images: [
            'https://plus.unsplash.com/premium_photo-1675107360188-111441548390?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1644937891190-41e569954e0e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1620257493155-ec4ab7d13a1a?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Women',
        title: 'Evening Gown',
        description: 'Elegant evening gown for formal occasions.',
        price: '$150.00',
        discount: null
    },
    // KIDS (41-60)
    {
        id: 41,
        images: [
            'https://images.unsplash.com/photo-1565963925128-eebd45213b1f?q=80&w=1839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1485145782098-4f5fd605a66b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Graphic T-Shirt',
        description: 'Fun and colorful graphic T-shirt for kids.',
        price: '$15.00',
        discount: '$12.00'
    },
    {
        id: 42,
        images: [
            'https://images.unsplash.com/photo-1642768971292-73092d30b753?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1503308079700-6df337c0ee92?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
            'https://images.unsplash.com/photo-1649006612249-6d32f5c2c429?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Warm Hoodie',
        description: 'Cozy and soft hoodie to keep kids warm during chilly days.',
        price: '$25.00',
        discount: null
    },
    {
        id: 43,
        images: [
            'https://images.unsplash.com/photo-1631044237696-6b38064fbbf4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1614690431089-afb0de81d184?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Denim Jeans',
        description: 'Durable denim jeans for kids, perfect for all-day play.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 44,
        images: [
            'https://plus.unsplash.com/premium_photo-1661715319384-437cc4d1bbfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1516658908390-30039e1d09d5?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683147626588-7710de8f58d5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Rain Boots',
        description: 'Waterproof rain boots for fun splashing in puddles.',
        price: '$30.00',
        discount: null
    },
    {
        id: 45,
        images: [
            'https://images.unsplash.com/photo-1672214467600-cf9f03f135fc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1663099757175-d84fbef799c5?q=80&w=1853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1663099782693-c094a6279120?q=80&w=1821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Winter Coat',
        description: 'Warm and cozy winter coat for the cold season.',
        price: '$60.00',
        discount: '$50.00'
    },
    {
        id: 46,
        images: [
            'https://plus.unsplash.com/premium_photo-1672081742135-b72eb2baf5cb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1560358863-c333c7318cb9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1515349541556-ef8cc276e382?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Sneakers',
        description: 'Comfortable and durable sneakers for everyday wear.',
        price: '$40.00',
        discount: '$35.00'
    },
    {
        id: 47,
        images: [
            'https://plus.unsplash.com/premium_photo-1698305283092-575dcb4d3ec2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fFBhamFtYXMlMjBTZXQlMjBLSURTfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1663090454898-a7e69947e4eb?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Pajamas Set',
        description: 'Soft and cozy pajamas for a good night’s sleep.',
        price: '$18.00',
        discount: '$15.00'
    },
    {
        id: 48,
        images: [
            'https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Baseball Cap',
        description: 'Stylish cap to keep the sun off during outdoor play.',
        price: '$12.00',
        discount: null
    },
    {
        id: 49,
        images: [
            'https://plus.unsplash.com/premium_photo-1700429926463-3bde0329bd97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1683035571579-2a74c8d33d63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1661714056376-6f75dcff7c41?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Raincoat',
        description: 'Waterproof raincoat for all-weather fun.',
        price: '$35.00',
        discount: null
    },
    {
        id: 50,
        images: [
            'https://plus.unsplash.com/premium_photo-1661895755055-760d2a17a556?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1682092172894-7d2af749e399?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1664475741639-f188534b599e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Swimwear',
        description: 'Bright and fun swimwear for pool or beach time.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 51,
        images: [
            'https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1485853949185-d7dbd2d457c0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1726768942000-b6165c3a0461?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Leggings',
        description: 'Stretchy leggings for active play or lounging.',
        price: '$15.00',
        discount: null
    },
    {
        id: 52,
        images: [
            'https://plus.unsplash.com/premium_photo-1726992603742-51f9ecd0d3a5?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1723532613987-dfdae2b23bf3?q=80&w=1710&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1726992603790-ee75682e26c2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        ],
        category: 'Kids',
        title: 'Party Dress',
        description: 'Adorable party dress for special occasions.',
        price: '$45.00',
        discount: '$40.00'
    },
    {
        id: 53,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Shorts',
        description: 'Comfortable shorts for summer activities.',
        price: '$18.00',
        discount: null
    },
    {
        id: 54,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'School Backpack',
        description: 'Durable and fun backpack for school essentials.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 55,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Tights (Pack of 2)',
        description: 'Soft tights for layering or wearing on their own.',
        price: '$12.00',
        discount: '$10.00'
    },
    {
        id: 56,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Sweatshirt',
        description: 'Warm sweatshirt with fun prints for casual wear.',
        price: '$25.00',
        discount: null
    },
    {
        id: 57,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Capri Pants',
        description: 'Light and breezy capri pants for summer days.',
        price: '$22.00',
        discount: '$20.00'
    },
    {
        id: 58,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Sandals',
        description: 'Comfortable sandals for all-day wear.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 59,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Winter Gloves',
        description: 'Soft and warm gloves for chilly weather.',
        price: '$10.00',
        discount: null
    },
    {
        id: 60,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Kids',
        title: 'Snow Boots',
        description: 'Sturdy snow boots for winter adventures.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 61,
        images: [
            'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Wallet',
        description: 'Premium leather wallet with multiple compartments.',
        price: '$25.00',
        discount: '$20.00'
    },
    {
        id: 62,
        images: [
            'https://images.unsplash.com/photo-1615823453796-85f7cc1914f3?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Sunglasses',
        description: 'Stylish UV-protected sunglasses for outdoor adventures.',
        price: '$50.00',
        discount: '$45.00'
    },
    {
        id: 63,
        images: [
            'https://images.unsplash.com/photo-1551718901-bf7ef251dc4e?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Beanie Hat',
        description: 'Warm and cozy beanie for cold weather.',
        price: '$18.00',
        discount: null
    },
    {
        id: 64,
        images: [
            'https://images.unsplash.com/photo-1603792295103-5d8a11704dc0?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Classic Watch',
        description: 'Elegant wristwatch with a sleek leather strap.',
        price: '$120.00',
        discount: '$100.00'
    },
    {
        id: 65,
        images: [
            'https://images.unsplash.com/photo-1560831341-289d6c544c9f?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Fashion Scarf',
        description: 'Lightweight and trendy scarf for all seasons.',
        price: '$15.00',
        discount: '$12.00'
    },
    {
        id: 66,
        images: [
            'https://images.unsplash.com/photo-1593032457862-d191cc7339b8?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Belt',
        description: 'Durable leather belt with a polished buckle.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 67,
        images: [
            'https://images.unsplash.com/photo-1511384751535-c4f6c11b5b7b?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Backpack',
        description: 'Spacious and stylish backpack for everyday use.',
        price: '$60.00',
        discount: '$55.00'
    },
    {
        id: 68,
        images: [
            'https://images.unsplash.com/photo-1581579201082-dac6a1571f7c?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Woolen Gloves',
        description: 'Soft woolen gloves for chilly weather.',
        price: '$20.00',
        discount: null
    },
    {
        id: 69,
        images: [
            'https://images.unsplash.com/photo-1507120410856-1f3f975b9be4?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Bucket Hat',
        description: 'Trendy bucket hat for a casual and cool look.',
        price: '$22.00',
        discount: '$20.00'
    },
    {
        id: 70,
        images: [
            'https://images.unsplash.com/photo-1562967916-eb82221dfb5d?q=80&w=1873&auto=format&fit=crop',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Gold Necklace',
        description: 'Elegant gold-plated necklace for special occasions.',
        price: '$75.00',
        discount: '$65.00'
    },
    {
        id: 71,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Keychain',
        description: 'Stylish and durable keychain for your essentials.',
        price: '$10.00',
        discount: null
    },
    {
        id: 72,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Duffel Bag',
        description: 'Spacious and lightweight duffel bag for travel.',
        price: '$80.00',
        discount: '$70.00'
    },
    {
        id: 73,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Earrings Set',
        description: 'Elegant earrings set with multiple designs.',
        price: '$25.00',
        discount: null
    },
    {
        id: 74,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Travel Organizer',
        description: 'Compact organizer for storing travel essentials.',
        price: '$35.00',
        discount: '$30.00'
    },
    {
        id: 75,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Leather Briefcase',
        description: 'Classic leather briefcase for work or school.',
        price: '$150.00',
        discount: '$130.00'
    },
    {
        id: 76,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Cufflinks',
        description: 'Sophisticated cufflinks for formal attire.',
        price: '$30.00',
        discount: '$25.00'
    },
    {
        id: 77,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Bracelet',
        description: 'Chic bracelet to complement any outfit.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 78,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Makeup Pouch',
        description: 'Compact makeup pouch for storing cosmetics.',
        price: '$15.00',
        discount: null
    },
    {
        id: 79,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Phone Case',
        description: 'Durable and stylish phone case with a modern design.',
        price: '$20.00',
        discount: '$18.00'
    },
    {
        id: 80,
        images: [
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400',
            'https://via.placeholder.com/300x400'
        ],
        category: 'Accessories',
        title: 'Portable Charger',
        description: 'Compact portable charger for on-the-go power.',
        price: '$35.00',
        discount: '$30.00'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sections/shop/ShopPage.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/constants/Constants.js [app-client] (ecmascript)"); // Import your products data
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const categories = [
    'All',
    'Men',
    'Women',
    'Kids',
    'Accessories'
];
// Helper functions
const getPaginatedProducts = (category, page, productsPerPage)=>{
    const filteredProducts = category === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.category.toLowerCase() === category.toLowerCase());
    const startIndex = (page - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
};
const ShopPage = ()=>{
    _s();
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const productsPerPage = 12;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShopPage.useEffect": ()=>{
            // Get the current category from the URL pathname
            const path = window.location.pathname.split('/').pop();
            const initialCategory = categories.find({
                "ShopPage.useEffect.initialCategory": (cat)=>cat.toLowerCase() === path.toLowerCase()
            }["ShopPage.useEffect.initialCategory"]);
            if (initialCategory) {
                setSelectedCategory(initialCategory);
            }
        }
    }["ShopPage.useEffect"], []);
    const handleCategoryChange = (category)=>{
        setSelectedCategory(category);
        setCurrentPage(1);
        // Update URL without reloading the page
        const newUrl = `/products/${category.toLowerCase()}`;
        window.history.pushState(null, '', newUrl);
    };
    const filteredProducts = selectedCategory === 'All' ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter((product)=>product.category.toLowerCase() === selectedCategory.toLowerCase());
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-screen-xl mx-auto py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center tracking-wide text-gray-400 text-2xl my-1 mt-10",
                children: selectedCategory === 'All' ? 'All Categories' : selectedCategory
            }, void 0, false, {
                fileName: "[project]/sections/shop/ShopPage.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center space-x-4 my-6",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 rounded-md text-sm font-medium transition ${selectedCategory === cat ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`,
                        onClick: ()=>handleCategoryChange(cat),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/sections/shop/ShopPage.js",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sections/shop/ShopPage.js",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                children: paginatedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-lg rounded border border-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-64 rounded-md overflow-hidden flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.images[0],
                                    alt: product.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/sections/shop/ShopPage.js",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sections/shop/ShopPage.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold mt-4",
                                children: product.title
                            }, void 0, false, {
                                fileName: "[project]/sections/shop/ShopPage.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/sections/shop/ShopPage.js",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "line-through text-gray-400",
                                        children: product.discount ? product.price : null
                                    }, void 0, false, {
                                        fileName: "[project]/sections/shop/ShopPage.js",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-500",
                                        children: product.discount || product.price
                                    }, void 0, false, {
                                        fileName: "[project]/sections/shop/ShopPage.js",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sections/shop/ShopPage.js",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/sections/shop/ShopPage.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sections/shop/ShopPage.js",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center space-x-4 mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 rounded-md text-sm font-medium transition ${currentPage > 1 ? 'bg-sky-500 text-white hover:bg-sky-400' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        onClick: ()=>currentPage > 1 && setCurrentPage(currentPage - 1),
                        disabled: currentPage <= 1,
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/sections/shop/ShopPage.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: totalPages
                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `px-4 py-2 rounded-md text-sm font-medium transition ${currentPage === index + 1 ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`,
                            onClick: ()=>setCurrentPage(index + 1),
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/sections/shop/ShopPage.js",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 rounded-md text-sm font-medium transition ${currentPage < totalPages ? 'bg-sky-500 text-white hover:bg-sky-400' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        onClick: ()=>currentPage < totalPages && setCurrentPage(currentPage + 1),
                        disabled: currentPage >= totalPages,
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/sections/shop/ShopPage.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sections/shop/ShopPage.js",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sections/shop/ShopPage.js",
        lineNumber: 60,
        columnNumber: 5
    }, this);
};
_s(ShopPage, "hughvGdNnINxxGpv6Bb4lRH6Nbs=");
_c = ShopPage;
const __TURBOPACK__default__export__ = ShopPage;
var _c;
__turbopack_refresh__.register(_c, "ShopPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/products/[categoryName]/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_ac9327._.js.map