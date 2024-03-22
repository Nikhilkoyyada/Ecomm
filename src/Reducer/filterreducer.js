
const filterreducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };

      case "UPDATE_FILTERS_VALUE":
        const { name, value } = action.payload;
        const parsedValue = name === "price" ? parseInt(value) : value;
        return {
          ...state,
          filters: {
            ...state.filters,
            [name]: parsedValue,
          },
        };
        case "FILTER_PRODUCTS":
          let { all_products } = state;
          let tempFilterProduct = [...all_products];
    
          const { text, category, company, color, price } = state.filters;
          tempFilterProduct = tempFilterProduct.filter((product) => {
            const matchesText = !text || product.name.toLowerCase().includes(text.toLowerCase());
            const matchesCategory = category === "all" || product.category === category;
            const matchesCompany = company === "all" || product.company.toLowerCase() === company.toLowerCase();
            const matchesColor = color === "all" || product.colors.includes(color);
            const matchesPrice = price === 0 || product.price <= price;
    
            return matchesText && matchesCategory && matchesCompany && matchesColor && matchesPrice;
          });
    
          return {
            ...state,
            filter_products: tempFilterProduct,
          };
    
        case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,

          price:0,
          minPrice:0
        },
      };

    default:
      return state;
  }
};

export default filterreducer;
