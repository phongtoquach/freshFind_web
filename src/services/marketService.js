import marketsData from "../data/markets.json";
import productsData from "../data/products.json";

export function getMarketsByFilters(filters) {
    console.log("[getMarketsByFilters] Calling getMarketsByFilters() ! filters : ", filters);

    let finalFiltersData = handleMarketFiltersData(filters);
    console.log("[getMarketsByFilters] finalFiltersData cuoi cung : ", finalFiltersData);

    let lowerCaseAreaName = finalFiltersData.areaName.toLocaleLowerCase();
    // neu cac filter trong filtersData deu rong, null : lay tat ca product trong mang productsData
    if (lowerCaseAreaName == "" && finalFiltersData.productCateId == 0 && finalFiltersData.daysOfWeek.length == 0) {
        console.log("[getMarketsByFilters] Khong co filter nao trong finalFiltersData. Lay tat ca market trong mang marketsData !");
        console.log(marketsData);
        return marketsData;
    }

    // neu co filter, bat dau di qua tung phan tu trong 
    const filteredMarkets = marketsData.filter((market) => {
        console.log("[getMarketsByFilters] market dang check :");
        console.log(market);

        // check finalFiltersData.areaName
        if (lowerCaseAreaName != "") {
            console.log("[getMarketsByFilters] AreaName keyword not empty : " + lowerCaseAreaName);
            if (!market.location.area.toLocaleLowerCase().includes(lowerCaseAreaName)) {
                console.log("[getMarketsByFilters] Market " + market.id + " : NOT MATCHED with AreaName keyword !");
                return false;
            }
            else {
                console.log("[getMarketsByFilters] Market " + market.id + " : MATCHED with AreaName keyword !");
            }
        }
        else {
            console.log("[getProductsByFilters] AreaName keyword rong ! Bo qua filter nay !");
        }

        // check finalFiltersData.productCateId
        if (finalFiltersData.productCateId > 0) {
            if (market.productIds.length > 0) {
                console.log("[getMarketsByFilters] Market " + market.id + " - productIds co phan tu ! Di qua tung phan tu trong productIds !");
                console.log(market.productIds);

                const hasProductBelongFilterCate = market.productIds.some(productId => {
                    console.log("[getMarketsByFilters] Market " + market.id + " - Check phan tu productId : " + productId);
                    const productObj = productsData.find(p => p.id === productId);

                    if (productObj) {
                        console.log("[getMarketsByFilters] Data of the product : ");
                        console.log(productObj);
                        if (productObj.categoryId === finalFiltersData.productCateId) {
                            console.log("[getMarketsByFilters] Market " + market.id + " - Product " + productObj.id + " thuoc category duoc search !");
                            return true;
                        }
                        else {
                            console.log("[getMarketsByFilters] Market " + market.id + " - Product " + productObj.id + " KHONG thuoc category duoc search !");
                        }
                    }
                    
                    return false;
                });

                if (hasProductBelongFilterCate === false) {
                    console.log("[getMarketsByFilters] Market " + market.id + " : NOT MATCHED with productCateId " + finalFiltersData.productCateId);
                    return false;
                }
            }
            else {
                console.log("[getMarketsByFilters] Market " + market.id + " khong co product nao ! NOT MATCHED with productCateId" + finalFiltersData.productCateId);
                return false;
            }
        }
        else {
            console.log("[getMarketsByFilters] productCateId = 0 ! Bo qua filter nay !");
        }

        console.log("[getMarketsByFilters] Market " + market.id + " DA PASSED het cac filter !");
        return true;
    });

    console.log("[getMarketsByFilters] Mang filteredMarkets sau cung :");
    console.log(filteredMarkets);

    return filteredMarkets;
}

/**
 * This function is used to format param filtersData to a unique formar
 * {
*      areaName: "",
*      productCateId: 0,
*      daysOfWeek: []
 * }
 */
export function handleMarketFiltersData(filtersData) {
    console.log("[handleMarketFiltersData] Calling handleMarketFiltersData() ! filtersData : ", filtersData);
    let finalFilters = {
        areaName: "",
        productCateId: 0,
        daysOfWeek: []
    };

    // check areaName
    if (Object.hasOwn(filtersData, "areaName")) {
        console.log("[handleMarketFiltersData] filtersData co attr areaName ! Value : " + filtersData.areaName);
        finalFilters.areaName = filtersData.areaName.trim();
    }

    // check productCateId
    if (Object.hasOwn(filtersData, "productCateId")) {
        console.log("[handleMarketFiltersData] filtersData co attr productCateId ! Value : " + filtersData.productCateId);
        
        if (filtersData.productCateId !== null && filtersData.productCateId !== "") {
            let productCateId_int = Number(filtersData.productCateId); 
            if (productCateId_int > 0) {
                finalFilters.productCateId = productCateId_int;
            }
        }
    }

    // check daysOfWeek
    if (Object.hasOwn(filtersData, "daysOfWeek") && Array.isArray(filtersData.daysOfWeek)) {
        console.log("[handleMarketFiltersData] filtersData co attr daysOfWeek va la array !");
        finalFilters.daysOfWeek = filtersData.daysOfWeek;
    }

    console.log("[handleMarketFiltersData] Data cuoi cung cua finalFilters : ", finalFilters);

    return finalFilters;
}