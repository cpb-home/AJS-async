import GameSavingLoader from '../GameSavingLoader';

test('testing GameSavingLoader class load method', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual({"created": 1546300800, "id": 9, "userInfo": {"id": 1, "level": 10, "name": "Hitman", "points": 2000}});
});

test('testing GameSavingLoader class load method error reply', async () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
  }
  catch(e) {
    expect(e.name).toEqual('Error');
  }
});