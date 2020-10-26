var repository = (function () {
    'use strict';
    var products = [{
    id: 1,
    name: 'Nike Precision 4',
    price: 55.99,
    description: 'The Nike Precision 4 combines a racer look with a low-profile design, so you can make the most of your speed and agility during games.',
    category: 'shirt'
    }, {
    id: 2,
    name: 'Cool Shirt',
    price: 40,
    description: 'cool shirt  is the fifth shirt in the AD line',
    category: 'shirt'
    }, {
    id: 3,
    name: 'shadow_shirt',
    price: 50.99,
    description: 'A low-profile shirt built for quick attack.',
    category: 'dark shirt'
    }, { 
    id: 4,
    name: 'freaky_shirt',
    price: 56.50,
    description: 'A low-profile shirt honor the never-breaked.',
    category: 'shirt'
    }, {
    id: 5,
    name: 'shirt-rose7',
    price: 30.50,
    description: 'hese basketball shirt honor the never-break attitude of derrick rose.',
    category: 'shirt'
    }, {
    id: 6,
    name: 'Cshirt 4',
    price: 30.25,
    description: 'The Curry 4 is for the quick guard who likes a low to the ground ride with responsive cushioning, tight traction, stability and containment',
    category: 'shirt'
    }, {
    id: 7,
    name: 'inshirt 1',
    price: 59,
    description: 'The Zoom inshirt 11 has the extra-responsive cushioning, forefoot stability and multi-directional traction needed to complement his freakishly athletic game.',
    category: 'Basketball shirt'
    }, {
    id: 8,
    name: 'shirt 3',
    price: 60,
    description: ' shirt 3 dominates the court with his lightning-quick first step and fluid playing style.',
    category: 'shirt'
    }, {
    id: 9,
    name: 'Kyrie shirt',
    price: 70,
    description: 'The mesh upper of these Kyrie shirt creates just enough airflow to keep your foot cool.',
    category: 'shirt'
    }, {
    id: 10,
    name: 'D-shirt',
    price: 55.99,
    description: 'The upper on the Rose 9 is definitely the bright spot, as adidas is using a knit upper (but not calling it Primeknit).',
    category: 'shirt'
    }
    ];
    return {
    getTopProducts: function () {
    return [products[1], products[2], products[3]];
    },
    getProduct: function (id) {
    return products.filter(p => p.id === id)[0];
    },
    search: function (q) {
        if (q == null) {
       return [];
        } else {
        return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
        }
    }
    };
    })();