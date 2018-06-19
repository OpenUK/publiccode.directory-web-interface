var faker = require("faker");

function generateProducts() {
    var products = [];
    for (var id = 0; id < 50; id++) {
        products.push({
            id: id,
            product_name: faker.commerce.product(),
            description: faker.lorem.words(10),
            product_link: faker.internet.url(),
            category: faker.random.arrayElement([
                "software",
                "casestudy",
                "policy",
                "resource",
            ]),
            industry_sector: faker.random.arrayElement([
                "localgov",
                "centralgov",
                "healthcare",
                "education",
                "defence",
            ]),
            product_type: faker.random.arrayElement([
                'public',
                'NGO',
                'commercial'
            ]),
            licence: faker.random.arrayElement([
                'MIT',
                'GNU',
                'Github3',
                'Paid for',
                'some other licence'
            ]),
            geolocation: faker.random.objectElement({
                lat: faker.address.latitude(),
                long: faker.address.longitude()
            }),
            published_date: faker.date.past(2),
            country: faker.address.country(),
            product_company: faker.company.companyName(0)

        });
    }
    return {
        products: products
    };
}
module.exports = generateProducts;