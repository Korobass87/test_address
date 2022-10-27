import React, { useState } from "react";
import { Container } from "../../components/container";
import { SearchLogo } from "../../data/svg";
import "./address.scss";
import { apiFavMov } from "../../api/api";
import { AxiosError } from "axios";

export const Address = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);
    apiFavMov(query.trim())
      .then(({ data }) => {
        data.suggestions.length ? setData(data.suggestions) : setData(null);
      })
      .catch((e: AxiosError) => {
        console.log(e);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Container title={"Поиск адресов"}>
      <p className={"search-subtitle"}>Введите интересующий вас адрес</p>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className={"search-form"}
        action=""
      >
        <input
          value={query}
          minLength={3}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"Введите интересующий вас адрес"}
          className={"search-input"}
          type="text"
        />

        <button className={"search-button"} type={"submit"}>
          <SearchLogo className={"search-icon"} /> <p>Поиск</p>
        </button>
      </form>

      {isLoading ? (
        <div className={"loading"}>Загрузка...</div>
      ) : (
        data && (
          <div className={"data-response"}>
            <h3 className={"address-header"}>Адреса</h3>
            <ul>
              {" "}
              {data.map((address, idx) => {
                return (
                  <li className={"address-item"} key={idx}>
                    <p>{address.value}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )
      )}
      {error && <h3>{error}</h3>}
    </Container>
  );
};
