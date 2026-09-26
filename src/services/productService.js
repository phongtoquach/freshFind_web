import productsData from "../data/products.json";


export function getProductsByFilters(filters) {
    console.log("[getProductsByFilters] Calling getProductsByFilters() ! filters : ", filters);

    const filteredProducts = productsData.filter((product) => {
        console.log("[getProductsByFilters] product dang check :");
        console.log(product);

        // check filters.availableMonth
        if (filters.availableMonth > 0) {
            if (Array.isArray(product.availableMonths) && product.availableMonths.length > 0) {
                const hasAvaiMonthMatchWithFilter = product.availableMonths.some(avaiMonth => {
                    console.log("[getProductsByFilters] Product " + product.id + " - Check avaiMonth : " + avaiMonth);

                    if (avaiMonth === filters.availableMonth) {
                        console.log("[getProductsByFilters] Product " + product.id + " - avaiMonth : " + avaiMonth + " MATCHED voi filter !");
                        return true;
                    }
                    else {
                        console.log("[getProductsByFilters] Product " + product.id + " - avaiMonth : " + avaiMonth + " KHONG MATCHED voi filter !");
                        return false;
                    }
                });

                if (hasAvaiMonthMatchWithFilter === false) {
                    console.log("[getProductsByFilters] Product " + product.id + " : NOT MATCHED with filter availableMonth !");
                    return false;
                }
            }
            else {
                console.log("[getProductsByFilters] Product " + product.id + " khong co availableMonths hoac availableMonths la array rong ! Product nay available trong tat ca month ! Nen PASSED filter availableMonth !");
            }
        }
        else {
            console.log("[getProductsByFilters] filter availableMonth <= 0 ! Bo qua filter nay !");
        }

        console.log("[getProductsByFilters] Product " + product.id + " DA PASSED het cac filter !");
        return true;
    });

    console.log("[getProductsByFilters] Mang filteredProducts sau cung :");
    console.log(filteredProducts);

    return filteredProducts;
}