export default function home() {
  return (
    <>
    <Nav />
<div class='lg:flex'>
  {{> filters}}
  <main id="main" class='line'>
    <h2 class='font-dosis text-center lg:text-left text-4xl mt-3 ml-14'>{{name}}'s Fiesta Collection</h2>
    <div id='itemCards' class='flex flex-wrap justify-around lg:justify-start gap-4 m-6 ml-14'>
      {inventory.map((item) => {
        <ItemCard />
      })}

    </div>
  </main>
</div></>
  )
}
