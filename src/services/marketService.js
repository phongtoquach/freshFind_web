import marketsData from "../data/markets.json";
import productsData from "../data/products.json";

import { timeToMinutes } from "../utils/dateTimeUtils";

export function getMarketsByFilters(filters) {
    console.log("[getMarketsByFilters] Calling getMarketsByFilters() ! filters : ", filters);

    let finalFiltersData = handleMarketFiltersData(filters);
    console.log("[getMarketsByFilters] finalFiltersData cuoi cung : ", finalFiltersData);

    let lowerCaseAreaName = finalFiltersData.areaName.toLocaleLowerCase();
    // neu cac filter trong filtersData deu rong, null : lay tat ca market trong mang marketsData
    if (lowerCaseAreaName == "" && finalFiltersData.productCateId == 0 && finalFiltersData.daysOfWeek.length == 0 && finalFiltersData.onlyOpenNow == 0) {
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
                            return false;
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

        // check finalFiltersData.daysOfWeek
        if (Array.isArray(finalFiltersData.daysOfWeek) && finalFiltersData.daysOfWeek.length > 0) {
            // check market nay co open vao 1 trong nhung ngay trong finalFiltersData.daysOfWeek hay ko
            // chi can match 1 ngay trong finalFiltersData.daysOfWeek la MATCHED

            // check market nay co schedule ko
            if (!Array.isArray(market.schedule) || market.schedule.length == 0) {
                console.log("[getMarketsByFilters] Market " + market.id + " khong co schedule ! NOT MATCHED voi filter daysOfWeek !");
                return false;
            }

            const hasOpenDayMatchWithFilter = market.schedule.some(weekDayItem => {
                console.log("[getMarketsByFilters] Market " + market.id + " - schedule item : ", weekDayItem);
                if (weekDayItem.open === true) {
                    console.log("[getMarketsByFilters] Market " + market.id + " - OPEN at weekday " + weekDayItem.day);
                    if (!finalFiltersData.daysOfWeek.includes(weekDayItem.day)) {
                        console.log("[getMarketsByFilters] Market " + market.id + " - Open weekday " + weekDayItem.day + " NOT MATCHED with filter daysOfWeek !");
                        return false;
                    }
                    else {
                        console.log("[getMarketsByFilters] Market " + market.id + " - Open weekday " + weekDayItem.day + " MATCHED with filter daysOfWeek !");
                        return true;
                    }
                }
                else {
                    console.log("[getMarketsByFilters] Market " + market.id + " - CLOSE at weekday " + weekDayItem.day + " ! NOT MATCHED");
                    return false;
                }
            });

            if (hasOpenDayMatchWithFilter === false) {
                console.log("[getMarketsByFilters] Market " + market.id + " : NOT MATCHED with filter daysOfWeek !");
                return false;
            }
        }
        else {
            console.log("[getMarketsByFilters] daysOfWeek khong phai array hoac la empty array ! Bo qua filter nay !");
        }

        console.log("[getMarketsByFilters] Market " + market.id + " DA PASSED het cac filter !");
        return true;
    });

    console.log("[getMarketsByFilters] Mang filteredMarkets sau cung :");
    console.log(filteredMarkets);

    // check tiep finalFiltersData.onlyOpenNow dua tren filteredMarkets
    // nhung can check ngay hien tai
    if (finalFiltersData.onlyOpenNow == 1) {
        console.log("[getMarketsByFilters] filter onlyOpenNow = 1 !");

        const openFilteredMarkets = filteredMarkets.filter(filteredMarketObj => {
            console.log("[getMarketsByFilters] onlyOpenNow - filteredMarket : ", filteredMarketObj);
            const marketIsOpenNow = isMarketOpenNow(filteredMarketObj);
            console.log("[getMarketsByFilters] onlyOpenNow - filteredMarket " + filteredMarketObj.id + " - marketIsOpenNow : ", marketIsOpenNow);

            return marketIsOpenNow;
        });

        console.log("[getMarketsByFilters] onlyOpenNow - openFilteredMarkets sau cung :");
        console.log(openFilteredMarkets);
        return openFilteredMarkets;
    }
    else {
        console.log("[getMarketsByFilters] filter onlyOpenNow = " + finalFiltersData.onlyOpenNow + " ! Bo qua filter nay !");
    }

    return filteredMarkets;
}


export function isMarketOpenNow(market) {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const nowObj = new Date();

    const dayIndex = nowObj.getDay();
    const currentDay = days[dayIndex];
    console.log("[isMarketOpenNow] dayIndex : " + dayIndex + " ; currentDay : " + currentDay);

    console.log("[isMarketOpenNow] Market " + market.id + " - current time : " + nowObj.getHours() + ":" + nowObj.getMinutes());

    const currentMinutes = nowObj.getHours() * 60 + nowObj.getMinutes();

    const todaySchedule = market.schedule.find(item => item.day === currentDay);
    
    console.log("[isMarketOpenNow] Market " + market.id + " - data cua todaySchedule cua market nay : ", todaySchedule);

    if (!todaySchedule || !todaySchedule.open) {
        console.log("[isMarketOpenNow] Market " + market.id + " : todaySchedule dang CLOSED ! return false !");
        return false;
    }

    console.log("[isMarketOpenNow] Market " + market.id + " - hours data : ", todaySchedule.hours);
    const startMinutes = timeToMinutes(todaySchedule.hours.start);
    const endMinutes = timeToMinutes(todaySchedule.hours.end);
    console.log("[isMarketOpenNow] Market " + market.id + " - startMinutes : " + startMinutes + " ; endMinutes : " + endMinutes);
    console.log("[isMarketOpenNow] Market " + market.id + " - currentMinutes : " + currentMinutes);

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}


/**
 * This function is used to format param filtersData to a unique formar
 * {
*      areaName: "",
*      productCateId: 0,
*      daysOfWeek: [],
*      onlyOpenNow: 0
 * }
 */
export function handleMarketFiltersData(filtersData) {
    console.log("[handleMarketFiltersData] Calling handleMarketFiltersData() ! filtersData : ", filtersData);
    let finalFilters = {
        areaName: "",
        productCateId: 0,
        daysOfWeek: [],
        onlyOpenNow: 0
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

    // check onlyOpenNow
    if (Object.hasOwn(filtersData, "onlyOpenNow")) {
        console.log("[handleMarketFiltersData] filtersData co attr onlyOpenNow ! Value : " + filtersData.onlyOpenNow);
        // check co phai number ko
        let onlyOpenNowVal = Number(filtersData.onlyOpenNow);
        if (Number.isNaN(onlyOpenNowVal)) {
            onlyOpenNowVal = 0;
        }
        // chi chap nhan 0 hoac 1
        if (onlyOpenNowVal != 0 && onlyOpenNowVal != 1) {
            onlyOpenNowVal = 0;
        }

        finalFilters.onlyOpenNow = onlyOpenNowVal;
    }
    else {
        console.log("[handleMarketFiltersData] filtersData KHONG CO attr onlyOpenNow !");
    }

    console.log("[handleMarketFiltersData] Data cuoi cung cua finalFilters : ", finalFilters);

    return finalFilters;
}


export function sortMarketsByType(markets_data, sortType, startLocation) {
    // neu mang products_data rong thi return ngay
    if (markets_data.length <= 0) {
        console.log("[sortMarketsByType] products_data rong ! Return mang rong ngay !");
        return [];
    }
    
    console.log("[sortMarketsByType] param sortType : " + sortType);
    if (sortType == "" || sortType == "default") {
        console.log("[sortMarketsByType] sortType rong hoac default. Set lai thanh nearest_first");
        sortType = "nearest_first";
    }

    let clonedMarketsData = structuredClone(markets_data);

    switch (sortType) {
        case "name_asc":
            console.log("[sortMarketsByType] sortType = " + sortType + ". Sort theo name A-Z !");

            clonedMarketsData.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
            return clonedMarketsData;

            break;
        case "name_desc":
            console.log("[sortMarketsByType] sortType = " + sortType + ". Sort theo name Z-A !");

            clonedMarketsData.sort(function(a, b) {
                return b.name.localeCompare(a.name);
            });
            return clonedMarketsData;

            break;
        case "nearest_first":
            console.log("[sortMarketsByType] sortType = " + sortType + ". Sort theo market tu gan nhat den xa nhat ! startLocation : ");
            console.log(startLocation);

            // check startLocation co phai object va co 2 attr latitude, longitude hay ko
            if (startLocation && typeof startLocation === "object" && startLocation !== null && !Array.isArray(startLocation)
                && Object.hasOwn(startLocation, "latitude") && Object.hasOwn(startLocation, "longitude"))
            {
                console.log("[sortMarketsByType] startLocation la object va co 2 attr latitude, longitude !");

                clonedMarketsData.sort(function(a, b) {
                    const distanceA = calculateDistance(
                        startLocation.latitude,
                        startLocation.longitude,
                        a.location.latitude,
                        a.location.longitude
                    );

                    console.log("[sortMarketsByType - nearest_first] Data cua a : ", a);
                    console.log("distanceA : " + distanceA);

                    const distanceB = calculateDistance(
                        startLocation.latitude,
                        startLocation.longitude,
                        b.location.latitude,
                        b.location.longitude
                    );

                    console.log("[sortMarketsByType - nearest_first] Data cua b : ", b);
                    console.log("distanceB : " + distanceB);

                    return distanceA - distanceB;
                });

                return clonedMarketsData;
            }
            else {
                return clonedMarketsData;
            }

            break;
        default:
            console.log("[sortMarketsByType] Khong co sort type phu hop! Return mang goc !");
            return clonedMarketsData;
    }
}


export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km

    const toRad = (degree) => degree * Math.PI / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}


export function getMarketById(id) {
    if (!id) return null;
    const marketIdNum = Number(id);
    return marketsData.find((m) => m.id === marketIdNum) || null;
}

export function getMarketByIdOrSlug(idOrSlug) {
    if (!idOrSlug) return null;
    const idNum = Number(idOrSlug);
    if (!Number.isNaN(idNum) && idNum > 0) {
        return marketsData.find((m) => m.id === idNum) || null;
    }
    return marketsData.find((m) => m.slug === idOrSlug) || null;
}