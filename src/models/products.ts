class Product{
  id: string;
  key: number;
  name: string;
  constructor(id: string, key: number, name: string) {
    this.id = id;
    this.key = key;
    this.name = name;
  }
}

export default {
    namespace: 'products',
    state: [
      new Product("dva", 1, "dva"),
      new Product("antd", 2, "antd"),
    ],
    reducers: {
      delete(state: Product[], { payload: id }: any) {
        return state.filter(item => item.id !== id);
      },
      copy(state: Product[], { payload: id }: any) {
        return state.concat([new Product("vv" + state.length, state.length + 1, "new")]);
      },
    },
  };