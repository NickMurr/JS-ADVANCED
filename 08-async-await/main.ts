const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};

const fetchData = async (url: string) => {
  console.log('Fetch started');
  await delay(2000);
  try {
    const res = await fetch(url);
    const data = await res.json();
    return await data;
  } catch (err) {
    return { error: err };
  } finally {
    console.log('Done');
  }
};

const d1 = fetchData(
  'https://jsonplaceholder.typicode.com/todos?_limit=3'
).then(da => {
  console.log(da);
});
