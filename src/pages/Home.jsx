import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'
import qs from 'qs'

import Platforms from "../components/Platforms";
import ItemCard from "../components/ItemCard";
import Placeholder from '../components/ItemCard/Placeholder';
import Sort from "../components/Sort";

import { useFilterItemsQuery } from '../redux/slices/items-slice'
import { setPlatformId, setSort, setOrder, setPage, setFilter, filterSelector } from '../redux/slices/filter-slice'

import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { Pagination } from "../components/Pagination";


export const sortList = [
  { sortId: 0, name: 'popularity', property: "rating" },
  { sortId: 1, name: 'price', property: "price" },
  { sortId: 2, name: 'alphabet', property: "title" }
]

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false);

  const [items, setItems] = useState([]);
  const { platformId, sort, order, search, page } = useAppSelector(filterSelector)
  const { data, isFetching, isError } = useFilterItemsQuery([platformId, sort.property, order, search, 4, page])

  // Если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sort.property,
        order,
        platformId,
        page,
        search
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [platformId, order, sort.property, page, search, navigate]);

  // Если был первый рендер, то проверяем URl-параметры и сохраняем в редаксе
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find((obj) => obj.property === params.sortBy);

      dispatch(
        setFilter({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, [dispatch]);

  // Если был первый рендер, то запрашиваем игры
  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current && data) {
      setItems(() => {
        return data.filter((item) => {
          return platformId > 0
            ? item.platforms.indexOf(platformId) > -1
            : item
        })
      })
      window.scrollTo(0, 0)
    }

    isSearch.current = false;
  }, [platformId, search, page, data]);

  const platformOnClick = (i) => {
    dispatch(setPlatformId(i))
  }

  const sortOnClick = (obj) => {
    dispatch(setSort(obj))
  }

  const orderOnClick = () => {
    dispatch(setOrder())
  }

  const pageOnChange = (currentPage) => {
    dispatch(setPage(currentPage))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Platforms
          id={platformId}
          platformOnClick={platformOnClick}
        />
        <Sort
          sort={sort}
          sortList={sortList}
          order={order}
          sortOnClick={sortOnClick}
          orderOnClick={orderOnClick}
        />
      </div>
      <h2 className="content__title">All games</h2>
      {
        isError &&
        <div className="content__error-info">
          <h2>Unfortunately, an error has occured 😔</h2>
          <p>Faield to load videogames. Try again later.</p>
        </div>
      }
      {
        search && items && items.length < 1 &&
        <div className="content__error-info">
          <h2>No videogames were found 😔</h2>
          <p>Try to change filter settings.</p>
        </div>
      }
      <div className="content__items">
        {
          isFetching
            ? [...new Array(8)].map((_, i) => (
              <Placeholder
                key={i}
              />
            ))
            : items.map((item) => (
              <Link to={`/game/${item.id}`} key={item.id}>
                <ItemCard
                  {...item}
                />
              </Link>
            ))
        }
      </div>

      <Pagination page={page} pageOnChange={pageOnChange} />
    </div>
  )
}

