export interface IProduct {
  id: number
  title: string
  price: number
  inventory: number // 库存
}

const products: IProduct[] = [
  {id: 1, title: 'iPad 4 Mini', price: 500, inventory: 2},
  {id: 2, title: 'H&M T-Shirt While', price: 10.99, inventory: 10},
  {id: 1, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5},
]

const getProducts = async () => {
  await wait(100)
  return products
}

const buyProducts = async () => {
  await wait(100)
  return Math.random() > 0.5
}

async function wait(delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
}

export { getProducts, buyProducts}