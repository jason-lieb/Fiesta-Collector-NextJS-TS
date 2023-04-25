import { FunctionComponent } from 'react'
import { GetServerSideProps } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Head from 'next/head'

// import styles from '@/styles/Home.module.css'
// import { HomeController } from '../../controller'
import { Filters } from '@/components/Filters'
import { ItemCard } from '@/components/ItemCard'

type HomeProps = {
  inventory: string[]
  items: string[]
  categories: string[]
  colors: string[]
  name: string
}

const Home: FunctionComponent<HomeProps> = ({
  inventory,
  items,
  categories,
  colors,
  name,
}) => {
  return (
    <>
      <Head>
        <title>Fiesta Collector</title>
      </Head>
      {/* <main className={styles.main}>  For reference of how to use css modules */}
      <div className="lg:flex">
        <Filters
          categories={categories}
          colors={colors}
          items={items}
          selectedCategories={new Set()}
        />
        <main id="main" className="line">
          <h2 className="font-dosis text-center lg:text-left text-4xl mt-3 ml-14">
            {name}&apos;s Fiesta Collection
          </h2>
          <div
            id="itemCards"
            className="flex flex-wrap justify-around lg:justify-start gap-4 m-6 ml-14"
          >
            {/* {inventory.map((item, i) => (
              <ItemCard key={i} item={item} />
            ))} */}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home

// export const getServerSideProps: GetServerSideProps<HomeProps> =
//   withPageAuthRequired(async () => {
//     // const data = await HomeController.get()
//     const data = { success: false, error: 'Test' }
//     if (!data.success) {
//       console.log('Server Error')
//       return { props: { inventory: [] } }
//     }
//     const { inventory, items, categories, colors, name } = data.value

//     return {
//       props: { inventory, items, categories, colors, name },
//     }
//   })
