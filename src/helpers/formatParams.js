function formatParams(searchParams) {
  let query = "";

  Object.entries(searchParams).map((param) => {
    const [key, value] = param;

    if (value) query = `${query == "" ? "" : query + "&"}${key}=${value}`;
  });

  return query;
}

export default formatParams;
