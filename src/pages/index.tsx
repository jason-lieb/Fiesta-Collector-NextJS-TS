import Head from 'next/head'

import styles from '@/styles/Home.module.css'

import Filters from '@/components/Filters'

// import Inventory from '../../models'

export default function Home() {
  // async function queryInventory() {
  //   const inventoryObjects = Inventory.findAll({
  //     include: [
  //       { model: User, attributes: ['name'] },
  //       { model: Color, attributes: ['color_name'] },
  //       {
  //         model: Item,
  //         attributes: ['id', 'item_name'],
  //         include: [{ model: Category, attributes: ['category_name'] }],
  //       },
  //     ],
  //     where: { user_id: req.session.user_id },
  //   })
  // }

  return (
    <>
      <Head>
        <title>Fiesta Collector</title>
      </Head>
      <main className={styles.main}>
        <div className="lg:flex">
          <Filters />
          <main id="main" className="line">
            {/* Replace 2nd main */}
            <h2 className="font-dosis text-center lg:text-left text-4xl mt-3 ml-14">
              names Fiesta Collection{/* name's Fiesta Collection */}
            </h2>
            <div
              id="itemCards"
              className="flex flex-wrap justify-around lg:justify-start gap-4 m-6 ml-14"
            >
              {/* {inventory.map((item) => {
                  ;<ItemCard />
                })} */}
            </div>
          </main>
        </div>
      </main>
    </>
  )
}
